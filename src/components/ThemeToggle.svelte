<script lang="ts">
import { onMount } from "svelte";

let isDark = $state(true);

onMount(() => {
  if (localStorage.getItem("theme")) {
    isDark = localStorage.getItem("theme") === "dark";
  }
});

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleSidebar() {
  document.querySelector(".sidebardiv").classList.toggle("hidden");
  document.querySelector(".basediv").classList.toggle("lg:w-[calc(75%-2.5rem)]");
  document.querySelector(".basediv").classList.toggle("w-full");
}

function toggleSearchbar() {
  const searchbar = document.getElementById("searchbarbg");
  if (searchbar) {
    searchbar.classList.remove("hidden");
  }
  document.body.classList.add("overflow-hidden");
}
</script>


<button
  onclick={toggleSearchbar}
  aria-label="Toggle Search Bar"
  title="Toggle Search Bar"
  class="text-2xl line-height-20 ml-5 cursor-pointer i-mdi-search text-textColor dark:text-textColordark
  hover:text-themeColor"
></button>

<button
  onclick={toggleSidebar}
  aria-label="Toggle SideBar"
  title="Toggle SideBar"
  class="text-2xl line-height-20 ml-5 cursor-pointer i-uil-arrows-h text-textColor dark:text-textColordark
  hidden lg:inline-block hover:text-themeColor"
></button>

<button
  onclick={toggleTheme}
  aria-label="Toggle Dark Mode"
  title="Toggle Dark Mode"
  class="text-2xl line-height-20 ml-5 cursor-pointer i-mdi-weather-night dark:i-mdi-weather-sunny text-textColor dark:text-textColordark
  hover:text-themeColor"
></button>
