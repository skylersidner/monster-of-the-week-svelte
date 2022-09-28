<script>
	import '../app.css';
  import { fade } from 'svelte/transition';
  import enums from '../enums';
  import MainMenuButton from '../lib/MainMenuButton.svelte';
  import MobileMenuButton from '../lib/MobileMenuButton.svelte';
    import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  
  const { PAGE_NAMES } = enums;

let isShowingUserMenu = false;
function toggleIsShowingUserMenu() {
  isShowingUserMenu = !isShowingUserMenu;
}

let isShowingMobileMenu = false;
function toggleIsShowingMobileMenu() {
  isShowingMobileMenu = !isShowingMobileMenu;
}

  $: mainMenuButtonModels = Object.entries(PAGE_NAMES).map(([pageKey, pageValue]) => {
    return {
      name: pageValue.name,
      menuLink: pageValue.route,
      faIcon: pageValue.faIcon,
    }
  });
</script>


<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full overflow-hidden">
  ```
-->
<div class="h-screen flex">
  <!-- Narrow sidebar -->
  <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
    <div class="w-full py-6 flex flex-col items-center">
      <div class="flex-shrink-0 flex items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
      </div>
      <div class="flex-1 mt-6 w-full px-2 space-y-1">
        {#each mainMenuButtonModels as model}
          <MainMenuButton {...model}></MainMenuButton>
        {/each}
      </div>
    </div>
  </div>

  <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->


  {#if isShowingMobileMenu}
  <div class="relative z-20 md:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-1 right-0 -mr-14 p-1">
          <button on:click={toggleIsShowingMobileMenu} type="button" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>

        <div class="flex-shrink-0 px-4 flex items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
        </div>
        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
          <nav class="h-full flex flex-col">
            <div class="space-y-1">
            {#each mainMenuButtonModels as model}
              <MobileMenuButton {...model}></MobileMenuButton>
            {/each}
            </div>
          </nav>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>

  </div>
  {/if}

  <!-- Content area -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="w-full">
      <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
        <button on:click={toggleIsShowingMobileMenu} type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
          <span class="sr-only">Open sidebar</span>
          <Fa size='2x' icon={faBars}/>
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search all files</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <!-- Heroicon name: solid/search -->
                  <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input name="search-field" id="search-field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search" type="search">
              </div>
            </form>
          </div>
          <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
            <!-- Profile dropdown -->
            <div class="relative flex-shrink-0">
              <div>
                <button on:click={toggleIsShowingUserMenu} type="button" class="bg-white rounded-full flex text-sm hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              {#if isShowingUserMenu}
              <div transition:fade="{{ duration: 200 }}" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Sign out</a>
              </div>
              {/if}
            </div>

            <button type="button" class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <!-- Heroicon name: outline/plus-sm -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span class="sr-only">Add file</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <slot />
  </div>
</div>

<style>
  
</style>