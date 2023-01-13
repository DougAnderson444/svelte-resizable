import { DefaultResizer } from './index';
import PointerTracker from '@douganderson444/pointer-tracker';

export function resizable(node, { Resizer = DefaultResizer, show = true, scale = 1 } = {}) {
	// check if parent is relative or absolute, if not set it
	const pos = node.style.position;
	if (pos !== 'relative' && pos !== 'absolute') {
		node.style.position = 'relative';
	}

	// mount the Resizer Comp to the node
	let resizer = new Resizer({
		target: node,
		props: {
			trigger: (handle) => {
				return createHandleTracker(handle);
			},
			show
		}
	});

	function createHandleTracker(handle) {
		let shiftX;
		let shiftY;

		let width;
		let height;
		let dx, dy;

		let pointerTracker = new PointerTracker(handle, {
			avoidPointerEvents: true, // pointers dont seem to work
			start: (pointer, event) => {
				if (pointerTracker.currentPointers.length === 1) return false; // track only 1 pointer at a time

				event.preventDefault();
				event.stopPropagation();

				width = (width || getComputedStyle(handle.parentNode)['width'].replace('px', '') || 0) * 1;
				height =
					(height || getComputedStyle(handle.parentNode)['height'].replace('px', '') || 0) * 1;

				shiftX = 0; // pointer.clientX - handle.getBoundingClientRect().left;
				shiftY = 0; // pointer.clientY - handle.getBoundingClientRect().top;

				return true;
			},
			move: (previousPointers, changedPointers, event) => {
				event.preventDefault();
				event.stopPropagation(); // continue exclusive rights over the pointer from DOM tree

				dx = (pointerTracker.currentPointers[0].pageX - previousPointers[0].pageX) / scale;
				dy = (pointerTracker.currentPointers[0].pageY - previousPointers[0].pageY) / scale;

				// const currentRect = handle.parentNode.getBoundingClientRect();
				// pointerTracker.currentPointers[0].pageX - shiftX - currentRect.left + 'px';
				// pointerTracker.currentPointers[0].pageY - shiftY - currentRect.top + 'px';

				width = width + dx;
				height = height + dy;

				// emit customEvent on handle.parentNode
				handle.parentNode.dispatchEvent(new CustomEvent('resized', { detail: { width, height } }));

				handle.parentNode.style.width = width + 'px';
				handle.parentNode.style.height = height + 1 + 'px';
			},
			end: (pointer, event, cancelled) => {
				// nothing to do here
				// console.log('Drag ended');
			}
		});

		return pointerTracker;
	}

	return {
		update(newParams) {
			// the value of `newParams` has changed
			({ show = show, scale = scale } = newParams);
			resizer.$set({ show });
		},

		destroy() {
			// the node has been removed from the DOM
			resizer.$destroy();
		}
	};
}
