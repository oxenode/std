import { ContentProps, TriggerProps, port } from '@oxenode/core'

export const Static = true;

/**
* Node's Name
*/
export const Name = "Entrypoint";

/**
* Node's React Component
*/
export default function Content({ node }: ContentProps) {
    node.State.eventName = "_start";
    return <h2>_start</h2>;
}

/**
* Node's Ports
*/
export const ports = [
    port.output().type('trigger')
];

export const extern = {
    'x86_64': () => `_start:`
}