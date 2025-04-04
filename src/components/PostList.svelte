<script lang="ts">
  import { onMount } from "svelte";
  import { generatePath, getMinCoverPath } from "src/utils.ts";
  import type { ProcessedPost } from "src/utils.ts";


  const { posts }: { posts: ProcessedPost[] } = $props();
  const itemsPerPage = 10;

  let currentPage = $state(0);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  function addClassNames() {
    setTimeout(() => {
      const elements500 = document.querySelectorAll(".a-500");
      elements500.forEach((element) => {
        element.classList.add("transition-all", "duration-500");
      });
      const elements300 = document.querySelectorAll(".a-300");
      elements300.forEach((element) => {
        element.classList.add("transition-all", "duration-300");
      });
    }, 100);
  }

  function setCurrentPageFromHash() {
    const pageFromHash = parseInt(location.hash.replace("#", ""), 10);
    if (!isNaN(pageFromHash)) {
      currentPage = pageFromHash - 1;
    }
  }

  onMount(() => {
    setCurrentPageFromHash();
    window.addEventListener("hashchange", setCurrentPageFromHash);
    addClassNames();
  });

  function goToPage(page: number) {
    currentPage = page;
    window.location.hash = `#${currentPage + 1}`;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    addClassNames();
  }

  const paginatedPosts = $derived(
    posts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
  );
</script>

<ul class="list-none flex flex-col gap-4 pa-0 ma-0">
  {#each paginatedPosts as post (post.id)}
    <li
      class="bg-bgColor dark:bg-bgColordark rounded-lg a-300 sm:h-56 overflow-hidden shadow active:scale-98 onload"
    >
      <div
        class="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between a-300 group h-full"
      >
        <div class="pa-5 flex flex-col w-full h-full">
          <div class="flex flex-wrap gap-2 items-center justify-between">
            <div class="flex items-center">
              {#if post.categories}
                <a
                  href={`/categories/${post.categories}`}
                  class="inline-flex items-center h-7 px-4 py-0.5 ml-2 text-sm font-bold text-bgColorbdark dark:text-bgColorb no-underline
               rounded-full hover:bg-bgColorh dark:hover:bg-bgColorhdark a-300"
                >
                  {post.categories}
                </a>
              {/if}
              <p
                class="text-textColor2 dark:text-textColor2dark ml-3 text-xs my-0 font-bold"
              >
                {post.date.toLocaleDateString()}
              </p>
              <p
                class="text-textColor2 dark:text-textColor2dark ml-3 text-xs my-0 font-bold"
              >
                {post.wordCount} 字
              </p>
            </div>
            {#if post.tags}
              <span class="flex">
                {#each post.tags.slice(0, 3) as tag (tag)}
                  <a
                    href={`/tags/${tag}`}
                    class="flex items-center h-7 px-2 mx-1 text-xs font-bold text-textColor2 dark:text-textColor2dark no-underline
                bg-bgColorh dark:bg-bgColorhdark rounded-full hover:bg-bgColorb dark:hover:bg-bgColorbdark a-300"
                  >
                    <p class="i-mdi-tag mr-1"></p>
                    {tag}
                  </a>
                {/each}</span
              >
            {/if}
          </div>
          <a
            href={generatePath(post.date, post.id)}
            class="no-underline flex-grow"
          >
            <h1
              class="text-textColor dark:text-textColordark group-hover:text-themeColor a-500 text-xl font-bold"
            >
              {post.title}
            </h1>

            <p
              class="text-sm text-textColor2 dark:text-textColor2dark break-all"
            >
              {#if post.description}
                {post.description}
              {/if}
            </p></a
          >
        </div>
        {#if post.cover}
          <a
            href={generatePath(post.date, post.id)}
            class="mb-2 shrink-0 w-full sm:w-90 h-56 overflow-hidden no-underline"
          >
            <img
              src={getMinCoverPath(post.cover)}
              fetchpriority="high"
              alt={post.title}
              class="w-full sm:w-90 h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>{/if}
      </div>
    </li>
  {/each}
</ul>

<div class="flex justify-center my-5 gap-2">
  <button
    class="flex items-center justify-center w-10 h-10 rounded-md bg-bgColor2 dark:bg-bgColor2dark text-textColor dark:text-textColordark
    hover:bg-bgColorh dark:hover:bg-bgColorhdark border-transparent a-300 cursor-pointer"
    aria-label="Previous page"
    onclick={() => goToPage(currentPage - 1)}
    disabled={currentPage === 0}
    ><p class="i-mdi-chevron-left text-xl ma-0"></p></button
  >

  {#each Array(totalPages) as _, index}
    <button
      class={`w-10 h-10 rounded-md bg-bgColor2 dark:bg-bgColor2dark text-textColor dark:text-textColordark 
  hover:bg-bgColorh dark:hover:bg-bgColorhdark a-300 cursor-pointer
${index === currentPage ? " border-1 border-solid border-bgColorb dark:border-bgColorbdark" : "border-transparent"}`}
      onclick={() => goToPage(index)}
      disabled={index === currentPage}
    >
      {index + 1}
    </button>
  {/each}

  <button
    class="flex items-center justify-center w-10 h-10 rounded-md bg-bgColor2 dark:bg-bgColor2dark text-textColor dark:text-textColordark
  hover:bg-bgColorh dark:hover:bg-bgColorhdark border-transparent a-300 cursor-pointer"
    aria-label="Next page"
    onclick={() => goToPage(currentPage + 1)}
    disabled={currentPage === totalPages - 1}
    ><p class="i-mdi-chevron-right text-xl ma-0"></p></button
  >
</div>
