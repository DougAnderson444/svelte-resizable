<script>
	export let handle;
	export let trigger;
	$: if (handle) trigger(handle);
</script>

<div class="svlt-resizer" bind:this={handle} />

<style>
	:root {
		--width: 3em;
		--line-width: 0.4em;
	}
	.svlt-resizer {
		user-select: none;
		padding: 0.5em;

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
		content: '';
		position: absolute;
		right: calc(-1 * var(--line-width) / 2);
		bottom: calc(-1 * var(--line-width) / 2);
		width: calc(var(--width) / 2);
		height: calc(var(--width) / 2);
		border-right: var(--line-width) solid rgba(63, 255, 4, 0.952);
		border-bottom: var(--line-width) solid rgba(63, 255, 4, 0.952);
		transform: translate(calc(-1 * var(--width) / 1.1), calc(-1 * var(--width) / 1.1));
		transform-origin: 0 0;
	}
</style>
