# Resize handles for any HTML Node element

```js
<script>
	import Resizable from '$lib/Resizable.svelte';

	let target;
	let style = '';

	// you can also set other non-resizable vars
	let minWidth = 200;
	let maxHeight = 400;
</script>

<h1>Resize Demo</h1>

<div bind:this={target} style="--max-height: {maxHeight}px; min-width: {minWidth}px; {style}">
	<p>Resize Me</p>

	{#if target}
		<Resizable {target} bind:style />
	{/if}
</div>

```
