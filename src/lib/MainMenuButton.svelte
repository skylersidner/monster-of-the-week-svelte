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

</script>

<a href="/{menuLink}" class="{isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'} group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
    <Fa size='2x' icon={faIcon}/>
    <span class="mt-2">{name}</span>
</a>
