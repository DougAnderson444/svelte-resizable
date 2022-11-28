# Resize handle for any HTML Node element

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
<div use:resizable={{Resizer: CustomResizerComponent, show}}>Custom Componenet resizer</div>
```

The directive will set the HTMLElement as `relative` if it detects it as `static`. If it's `absolute` it will leave it as absolute.

## Customised Resizer Handle

You can use your own custom resizer, just pass your component a param to the Svelte directive. Your component **must** call the resizable-provided `trigger` function with your handle `HTMLElement` as a `param`.

```svelte
<script>
	export let myHandle; // bind this var to your custom handle
	export let trigger; // passed down from resizable.js
	export let show; // optional show/hide toggle prop
	$: if (myHandle) trigger(myHandle); // let the resizable directive know what/where the resize handle is
</script>

{#if show}
	<div bind:this={myHandle}>💩 Drag me to resize</div>
{/if}
```
