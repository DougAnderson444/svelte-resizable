# Resize handle for any HTML Node element

![Demo](resizable.gif)

## Use

The Resize Component will make it's direct parent element resizable.

```js
<script>
	import { Resizer } from '$lib/Resizable.svelte';

	let target;
	let style = '';

	// you can also set other non-resizable vars
	let minWidth = 200;
	let maxHeight = 400;
</script>

<h1>Resize Demo</h1>

<div id='this-is-resizable-now'>
	<p>Resize My parent HTML element</p>

	<Resizer />
</div>

```
