<script>
	import PointerTracker from '@douganderson444/pointer-tracker';

	let pointerTracker;
	let shiftX;
	let shiftY;

	function resizable(node) {
		pointerTracker = new PointerTracker(node, {
			eventListenerOptions: { capture: true }, // catch the event before it goes to child in the DOM tree
			avoidPointerEvents: false, // pointers dont seem to work
			start: (pointer, event) => {
				if (pointerTracker.currentPointers.length === 1) return false; // track only 1 pointer at a time

				console.log({ pointer, event });
				shiftX = pointer.clientX - node.getBoundingClientRect().left;
				shiftY = pointer.clientY - node.getBoundingClientRect().top;

				event.preventDefault();
				event.stopPropagation();
				return true;
			},
			move: (previousPointers, changedPointers, event) => {
				event.stopPropagation(); // continue exclusive rights over the pointer from DOM tree

				resizePointerMove({
					pageX: pointerTracker.currentPointers[0].pageX,
					pageY: pointerTracker.currentPointers[0].pageY
				});
			},
			end: (pointer, event, cancelled) => {
				// nothing to do here
				console.log('Drag ended');
			}
		});

		function resizePointerMove({ pageX, pageY }) {
			const currentRect = node.parentNode.getBoundingClientRect();
			node.parentNode.style.width = pageX - shiftX - currentRect.left + 'px';
			node.parentNode.style.height = pageY - shiftY - currentRect.top + 'px';
		}
	}
</script>

<div class="svlt-resizer" use:resizable />

<style>
	:root {
		--width: 2em;
		--line-width: 0.4em;
	}
	.svlt-resizer {
		user-select: none;
		padding: 0.5em;

		width: 2.5em;
		height: 2.5em;
		position: absolute;
		right: 0;
		bottom: 0;
		cursor: se-resize;
		transform: translate(calc(var(--width) / 2), calc(var(--width) / 2));
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
		transform: translate(calc(-1 * var(--width) / 2), calc(-1 * var(--width) / 2));
		transform-origin: 0 0;
	}
</style>
