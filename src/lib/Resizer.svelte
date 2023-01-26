<script>
	import { createEventDispatcher } from 'svelte';

	export let show = true; // optional boolean to toggle whether to show the resizer handle
	export let mounted = false; // required boolean for parent directive to indicate when mounted has occured

	const dispatch = createEventDispatcher();

	/**
	 * @type {HTMLDivElement}
	 */
	let handle; // bind this var to your custom handle

	$: if (mounted && handle) {
		dispatch('ready', { handle }); // let the parent know we're ready to track
	}
</script>

{#if show}
	<div class="resizer" bind:this={handle} />
{/if}

<style>
	:root {
		--width: 10px;
		--line-width: 5px;
	}
	.resizer {
		user-select: none;
		padding: 2px;

		width: calc(var(--width) * 2.25);
		height: calc(var(--width) * 2.25);
		position: absolute;
		right: 0;
		bottom: 0;
		cursor: se-resize;
		transform: translate(calc(var(--width) / 1), calc(var(--width) / 1));
		transform-origin: 0 0;
	}
	.resizer::after {
		content: '';
		position: absolute;
		right: calc(-1 * var(--line-width) / 2);
		bottom: calc(-1 * var(--line-width) / 2);
		width: calc(var(--width) / 2);
		height: calc(var(--width) / 2);
		border-bottom: var(--line-width) solid rgba(107, 107, 107, 0.5);
		border-right: var(--line-width) solid rgba(133, 133, 133, 0.5);
		transform: translate(calc(-1 * var(--width) / 1.1), calc(-1 * var(--width) / 1.1));
		transform-origin: 0 0;
	}
</style>
