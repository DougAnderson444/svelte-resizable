# Resize handle for any HTML Node element

Resize handle for any HTML Node element

![Demo](resizable.gif)

## Use

See `./src/routes/+page.svelte` for a full demo.

The Resize Component will make it's direct parent element resizable.

```js
<script>
  import { resizable } from '@douganderson444/svelte-resizable';
</script>

<div use:resizable>Resize me</div>
<div use:resizable={{show: false}}>Hidden resizer</div>
<div use:resizable={{scale: scale}}>Resize if transformed</div>
<div use:resizable={{Resizer: CustomResizerComponent, show}}>Custom Componenet resizer</div>
```

The directive will set the HTMLElement as `relative` if it detects it as `static`. If it's `absolute` it will leave it as absolute.

## Customised Resizer Handle

You can use your own custom resizer, just pass your component a param to the Svelte directive. Your component **must** call the resizable-provided `trigger` function with your handle `HTMLElement` as a `param`. The below example also destroys the mouse tracker when the component is destroyed.

```svelte
<script>
	import { createEventDispatcher } from 'svelte';

	export let show = true; // optional boolean to toggle whether to show the resizer handle
	export let mounted = false; // required boolean for parent directive to indicate when mounted has occured

	const dispatch = createEventDispatcher();

	let handle; // bind this var to your custom handle

	$: if (mounted && handle) {
		dispatch('ready', { handle }); // let the parent know we're ready to track
	}
</script>

{#if show}
	<div class="resizer" bind:this={handle} />
{/if}
```
