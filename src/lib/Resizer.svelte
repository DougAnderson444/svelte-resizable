<script>
	export let handle; // bind this var to your custom handle
	export let trigger; // passed down from resizable.js
	export let show; // boolean toggle whether to show the resizer handle or not
	$: if (handle) trigger(handle); // let the directive know what/where the resize handle is
</script>

{#if show}
	<div class="svlt-resizer" bind:this={handle} />
{/if}

<style>
	:root {
		--width: 10px;
	}
	.svlt-resizer {
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
	.svlt-resizer::after {
		--line-width: 5px;
		content: '';
		position: absolute;
		right: calc(-1 * var(--line-width) / 2);
		bottom: calc(-1 * var(--line-width) / 2);
		width: calc(var(--width) / 2);
		height: calc(var(--width) / 2);
		border-right: var(--line-width) solid rgba(107, 107, 107, 0.5);
		border-bottom: var(--line-width) solid rgba(133, 133, 133, 0.5);
		transform: translate(calc(-1 * var(--width) / 1.1), calc(-1 * var(--width) / 1.1));
		transform-origin: 0 0;
	}
</style>
