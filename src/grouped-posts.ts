import type { CollectionEntry } from "astro:content";
import { POSTS_PER_PAGE, processPosts, type ProcessedPost } from "./utils.ts";

type BlogPost = CollectionEntry<"blog">;

interface GroupedPostConfig<ParamName extends string> {
  title: string;
  paramName: ParamName;
  basePath: `/${string}`;
  getValues: (post: BlogPost) => string[];
  sortValues?: (a: string, b: string) => number;
}

interface GroupedPostEntry<ParamName extends string> {
  groupValue: string;
  pageBasePath: string;
  posts: BlogPost[];
  totalCount: number;
  params: Record<ParamName, string>;
}

interface FirstPageProps<ParamName extends string> {
  groupValue: string;
  pageBasePath: string;
  posts: BlogPost[];
  totalCount: number;
  params: Record<ParamName, string>;
}

interface PaginationPageProps {
  groupValue: string;
  totalCount: number;
  pageBasePath: string;
}

export const tagGroupConfig = {
  title: "Tags",
  paramName: "tag",
  basePath: "/tags",
  getValues: (post: BlogPost) => post.data.tags || [],
} satisfies GroupedPostConfig<"tag">;

export const categoryGroupConfig = {
  title: "Categories",
  paramName: "category",
  basePath: "/categories",
  getValues: (post: BlogPost) => [post.data.categories || "未分类"],
} satisfies GroupedPostConfig<"category">;

export const archiveGroupConfig = {
  title: "Archives",
  paramName: "year",
  basePath: "/archives",
  getValues: (post: BlogPost) => [String(new Date(post.data.date).getFullYear())],
  sortValues: (a: string, b: string) => Number(b) - Number(a),
} satisfies GroupedPostConfig<"year">;

function getGroupedEntries<ParamName extends string>(
  posts: BlogPost[],
  config: GroupedPostConfig<ParamName>
): GroupedPostEntry<ParamName>[] {
  const groupedPosts = new Map<string, BlogPost[]>();

  for (const post of posts) {
    for (const value of config.getValues(post)) {
      const existingPosts = groupedPosts.get(value);

      if (existingPosts) {
        existingPosts.push(post);
        continue;
      }

      groupedPosts.set(value, [post]);
    }
  }

  const values = [...groupedPosts.keys()];

  if (config.sortValues) {
    values.sort(config.sortValues);
  }

  return values.map((groupValue) => ({
    groupValue,
    pageBasePath: `${config.basePath}/${groupValue}`,
    posts: groupedPosts.get(groupValue) || [],
    totalCount: groupedPosts.get(groupValue)?.length || 0,
    params: { [config.paramName]: groupValue } as Record<ParamName, string>,
  }));
}

export function getGroupedIndexItems<ParamName extends string>(
  posts: BlogPost[],
  config: GroupedPostConfig<ParamName>
) {
  return getGroupedEntries(posts, config).map(({ groupValue, totalCount }) => ({
    item: groupValue,
    count: totalCount,
  }));
}

export function getGroupedStaticPaths<ParamName extends string>(
  posts: BlogPost[],
  config: GroupedPostConfig<ParamName>
) {
  return getGroupedEntries(posts, config).map(({ params, ...props }) => ({
    params,
    props,
  }));
}

export async function getGroupedPaginatedStaticPaths<ParamName extends string>(
  posts: BlogPost[],
  config: GroupedPostConfig<ParamName>,
  paginate: (data: ProcessedPost[], options: { pageSize: number; params: Record<ParamName, string>; props: PaginationPageProps; }) => unknown[]
) {
  const groupedEntries = getGroupedEntries(posts, config);

  const paginatedPaths = await Promise.all(
    groupedEntries.map(async ({ params, groupValue, pageBasePath, posts, totalCount }) =>
      paginate(await processPosts(posts), {
        pageSize: POSTS_PER_PAGE,
        params,
        props: {
          groupValue,
          totalCount,
          pageBasePath,
        },
      })
    )
  );

  return paginatedPaths.flat();
}

export async function getGroupedFirstPageProps<ParamName extends string>(
  props: FirstPageProps<ParamName>
) {
  const processedPosts = await processPosts(props.posts);

  return {
    groupValue: props.groupValue,
    totalCount: props.totalCount,
    pageBasePath: props.pageBasePath,
    posts: processedPosts.slice(0, POSTS_PER_PAGE),
    currentPage: 1,
    lastPage: Math.ceil(processedPosts.length / POSTS_PER_PAGE),
  };
}
