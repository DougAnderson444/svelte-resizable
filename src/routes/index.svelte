<script>
	import Resizer from '$lib/Resizer.svelte';

	// you can also set other non-resizable vars
	let minWidth = 200;
	let maxHeight = 400;
</script>

<h1>Resize Demo</h1>
<h2>
	See: <pre><code>./src/routes/index.svelte</code></pre>
</h2>

<div style="--max-height: {maxHeight}px; min-width: {minWidth}px;">
	<p>Insert Resizer as child of the HTMLElement you wan to Resize.</p>
	<p>Minimum width: {minWidth}</p>
	<p>Maximum height: {maxHeight}</p>

	<Resizer />
</div>

<style>
	div {
		min-height: 200px;
		max-height: var(--max-height);
		width: 400px;
		padding: 1em;
		position: relative;
		box-shadow: 2px 2px 19px #e0e0e0;
		-o-box-shadow: 2px 2px 19px #e0e0e0;
		-webkit-box-shadow: 2px 2px 19px #e0e0e0;
		-moz-box-shadow: 2px 2px 19px #e0e0e0;
		-moz-border-radius: 8px;
		border-radius: 8px;
		background-color: rgba(250, 128, 114, 0.418);
	}
</style>
