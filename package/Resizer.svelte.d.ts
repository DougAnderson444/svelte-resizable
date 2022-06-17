/** @typedef {typeof __propDef.props}  ResizerProps */
/** @typedef {typeof __propDef.events}  ResizerEvents */
/** @typedef {typeof __propDef.slots}  ResizerSlots */
export default class Resizer extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ResizerProps = typeof __propDef.props;
export type ResizerEvents = typeof __propDef.events;
export type ResizerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
