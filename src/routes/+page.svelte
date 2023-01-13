<script>
	import { resizable } from '@douganderson444/svelte-resizable';
	import CustomResizer from '$lib/CustomResizer.svelte';

	let scalable;
	let scale = 1;
	$: if (scalable && scale) scalable.style.scale = scale;
</script>

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<a href="https://github.com/DougAnderson444/svelte-resizable"
	>https://github.com/DougAnderson444/svelte-resizable</a
>
<!-- ranger slider for scale -->
<input type="range" min="0.2" max="1" step="0.1" bind:value={scale} class="w-full" />

<div bind:this={scalable} class="flex flex-wrap content-start bg-red-100 p-2 h-screen ">
	<div class="basis-auto w-1/3 h-1/3 bg-green-100 m-2 p-2" use:resizable>Small</div>
	<div class="basis-auto w-1/4 h-1/3 bg-purple-100 m-2 p-2  text-xl" use:resizable>Med</div>
	<div class="basis-auto w-1/4 h-1/3 bg-blue-100 m-2 p-2 text-3xl" use:resizable>Large</div>
	<div
		class="basis-auto w-1/2 h-1/4 bg-amber-800 m-2 p-2 text-4xl"
		use:resizable={{ Resizer: CustomResizer, show: true, scale: scale }}
	>
		Custom 💩 scale: {scale}
	</div>
</div>
