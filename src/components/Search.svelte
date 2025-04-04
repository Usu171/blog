<script lang="ts">
import { onMount } from "svelte";

function handleClickOutside(event: MouseEvent) {
  const searchbarBg = document.getElementById("searchbarbg");
  if (searchbarBg && event.target === searchbarBg) {
    searchbarBg.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    hiddenSearchBar();
  }
}

function hiddenSearchBar() {
  const searchbarBg = document.getElementById("searchbarbg");
  if (searchbarBg && !searchbarBg.classList.contains("hidden")) {
    searchbarBg.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

const resultFake = [
  {
    url: "/",
    meta: {
      title: "This Is a Fake Search Result",
    },
    excerpt: "Because the search cannot work in the <mark>dev</mark> environment.",
  },
  {
    url: "/",
    meta: {
      title: "If You Want to Test the Search",
    },
    excerpt: "Try running <mark>npm build && npm preview</mark> instead.",
  },
];

let keyword = $state("");

let result = $state([]);

let search = (keyword: string) => {};

onMount(() => {
  window.addEventListener("click", handleClickOutside);
  window.addEventListener("keydown", handleKeyDown);
  search = async (keyword: string) => {
    let arr = [];
    if (import.meta.env.PROD) {
      const ret = await pagefind.search(keyword);
      for (const item of ret.results) {
        arr.push(await item.data());
      }
    } else {
      arr = resultFake;
    }

    result = arr;
  };
  return () => {
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("keydown", handleKeyDown);
  };
});

$effect(() => {
  search(keyword);
});
</script>


<div
  aria-label="Toggle Search Bar"
  title="Toggle Search Bar"
  class="hidden fixed h-100vh w-100vw z-200 bg-#16181da8"
  id="searchbarbg"
>
  <div class="mx-auto mt-24 md:w-150 bg-bgColor dark:bg-bgColordark rounded-lg" id="searchbar">
    <header
      class="px-4 pb-2 pt-4"
    ><form class="rounded-md h-16 border-solid border-2 border-themeColor flex items-center">
      <div class="text-3xl ml-3 h-10 w-10 my-0 i-mdi-search text-themeColor"></div>
      <input placeholder="Search" type="text" bind:value={keyword} onfocus={() => search(keyword)}
        class="w-full h-full transition-all text-xl bg-transparent outline-0
      text-textColor2 dark:text-textColor2dark border-none pa-3"
      />
      {#if keyword}
      <button aria-label="Clear Input" class="text-3xl ml-3 i-mdi-close text-textColor2 dark:text-textColor2dark mr-3 cursor-pointer"
      onclick={() => keyword = ""}></button>
      {:else}
      <div aria-label="Clear Input" class="text-3xl ml-3 i-mdi-close text-textColor2 dark:text-textColor2dark mr-3 opacity-0"></div>
      {/if}
    </form>

    </header>
    <div class="overflow-y-auto max-h-40vh">
      {#if result.length > 0}
      <ul class="list-none px-4">
        {#each result as item (item.meta.title)}
        <li class="rounded-lg bg-bgColor2 dark:bg-bgColor2dark my-2 h-30 group">
          <a href={item.url} class="w-full h-full px-4 py-2 flex flex-col no-underline" onclick={hiddenSearchBar}>
            <h3 class="my-1 text-lg font-bold text-textColor2 dark:text-textColor2dark a-300 group-hover:text-themeColor">{item.meta.title}</h3>
            <p class="my-1 text-gray-500 dark:text-gray-400 text-sm">{@html item.excerpt}</p>
          </a>
        </li>
        {/each}
      </ul>
      {:else}
      <p class="text-center text-xl text-textColor2 dark:text-textColor2dark pb-4 pt-2">No Results Found</p>
      {/if}
    </div>
    <footer class="flex justify-end items-center bg-bgColor2 dark:bg-bgColor2dark px-3 rounded-lb-lg rounded-rb-lg">
      <p class="i-mdi-keyboard-esc text-textColor2 dark:text-textColor2dark"></p><p class="text-sm ml-3 text-textColor2 dark:text-textColor2dark">to close</p>
    </footer>
  </div>
</div>
