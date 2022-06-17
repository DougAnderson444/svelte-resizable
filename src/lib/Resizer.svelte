<script>
	export let target;
	export let style;

	const baseStyle = style;

	let width = target?.clientWidth || 0;
	let height = target?.clientHeight || 0;
	let left = 0;
	let top = 0;

	let newSize = { width, height };
	let initSize = { width: 0, height: 0 };
	let resizeInitPos = { x: 0, y: 0 };

	let active = false; // resize active or not

	$: style = `left: ${left}px; 
	top: ${top}px; 
	width: ${active ? newSize.width : width}px; 
	height:${active ? newSize.height : height}px; ${baseStyle}`;

	function resizePointerDown(e) {
		console.log('Pointer down');
		e.stopPropagation();
		const { pageX, pageY } = e;

		resizeInitPos = { x: pageX, y: pageY };
		initSize = { width, height };
		newSize = { width, height };

		active = true;

		window.addEventListener('pointermove', resizePointerMove);
		window.addEventListener('pointerup', resizePointerUp);
	}

	function resizePointerMove({ pageX, pageY }) {
		newSize.width = initSize.width + pageX - resizeInitPos.x;
		newSize.height = initSize.height + pageY - resizeInitPos.y;
	}

	function resizePointerUp(e) {
		e.stopPropagation();

		width = newSize.width;
		height = newSize.height;

		active = false;

		window.removeEventListener('pointermove', resizePointerMove);
		window.removeEventListener('pointerup', resizePointerUp);
	}
</script>

<div class="svlt-resizer" on:pointerdown|preventDefault={resizePointerDown} />

<style>
	.svlt-resizer {
		user-select: none;
		width: 2em;
		height: 2em;
		position: absolute;
		right: 0;
		bottom: 0;
		cursor: se-resize;
	}
	.svlt-resizer::after {
		content: '';
		position: absolute;
		right: 0.4em;
		bottom: 0.4em;
		width: 0.6em;
		height: 0.6em;
		border-right: 0.25em dashed rgb(0, 0, 0, 0.4);
		border-bottom: 0.25em dashed rgba(0, 0, 0, 0.4);
	}
</style>
