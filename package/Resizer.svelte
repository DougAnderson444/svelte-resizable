<script>
	import PointerTracker from '@douganderson444/pointer-tracker';

	let pointerTracker;
	let shiftX;
	let shiftY;

	let width;
	let height;
	let dx, dy;

	function resizable(node) {
		pointerTracker = new PointerTracker(node, {
			eventListenerOptions: { capture: true }, // catch the event before it goes to child in the DOM tree
			avoidPointerEvents: true, // pointers dont seem to work
			start: (pointer, event) => {
				if (pointerTracker.currentPointers.length === 1) return false; // track only 1 pointer at a time

				event.preventDefault();
				event.stopPropagation();

				width = (width || getComputedStyle(node.parentNode)['width'].replace('px', '') || 0) * 1;
				height = (height || getComputedStyle(node.parentNode)['height'].replace('px', '') || 0) * 1;

				shiftX = 0; // pointer.clientX - node.getBoundingClientRect().left;
				shiftY = 0; // pointer.clientY - node.getBoundingClientRect().top;

				return true;
			},
			move: (previousPointers, changedPointers, event) => {
				event.preventDefault();
				event.stopPropagation(); // continue exclusive rights over the pointer from DOM tree

				dx = pointerTracker.currentPointers[0].pageX - previousPointers[0].pageX;
				dy = pointerTracker.currentPointers[0].pageY - previousPointers[0].pageY;

				// const currentRect = node.parentNode.getBoundingClientRect();
				// pointerTracker.currentPointers[0].pageX - shiftX - currentRect.left + 'px';
				// pointerTracker.currentPointers[0].pageY - shiftY - currentRect.top + 'px';

				width = width + dx;
				height = height + dy;

				node.parentNode.style.width = width + 'px';
				node.parentNode.style.height = height + 1 + 'px';
			},
			end: (pointer, event, cancelled) => {
				// nothing to do here
				console.log('Drag ended');
			}
		});
	}
</script>

<div class="svlt-resizer" use:resizable />

<style>
	:root {
		--width: 2.5em;
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
		border-right: var(--line-width) solid rgba(107, 107, 107, 0.5);
		border-bottom: var(--line-width) solid rgba(133, 133, 133, 0.5);
		transform: translate(calc(-1 * var(--width) / 1.1), calc(-1 * var(--width) / 1.1));
		transform-origin: 0 0;
	}
</style>
