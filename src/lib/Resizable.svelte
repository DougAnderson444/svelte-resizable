<script>
	import Resizer from '$lib/Resizer.svelte';

	export let target = null;
	export let style;
</script>

<svelte:component this={Resizer} {target} bind:style />
