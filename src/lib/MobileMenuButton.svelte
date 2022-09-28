<script>
    export let menuLink = '/';
    export let name = 'TEST';
    export let faIcon;

    import { page } from '$app/stores';

    import Fa from 'svelte-fa/src/fa.svelte'

    let isActive = false;
    $: if ($page.routeId) {
        isActive = $page.routeId === menuLink;
    };

    // $: isActive = menuLink === route;
</script>

<a href="{menuLink}" class="{isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'} group py-2 px-3 rounded-md flex items-center text-sm font-medium">
    <Fa icon={faIcon}/>
    <span class="ml-2">{name}</span>
</a>
