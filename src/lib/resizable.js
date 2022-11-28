import { DefaultResizer } from './index';
import PointerTracker from '@douganderson444/pointer-tracker';

let show;

export function resizable(node, { Resizer = DefaultResizer, show = true } = {}) {
	// check if parent is relative or absolute, if not set it
	const pos = node.style.position;
	if (pos !== 'relative' && pos !== 'absolute') {
		node.style.position = 'relative';
	}

	// mount the Resizer Comp to the node
	let resizer = new Resizer({
		target: node,
		props: {
			trigger: (node) => createHandleTracker(node),
			show
		}
	});

	return {
		update(newParams) {
			// the value of `bar` has changed
			show = newParams.show;
			resizer.$set({ show });
		},

		destroy() {
			// the node has been removed from the DOM
		}
	};
}

function createHandleTracker(node) {
	let shiftX;
	let shiftY;

	let width;
	let height;
	let dx, dy;

	let pointerTracker = new PointerTracker(node, {
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
