import { port } from '@oxenode/core'

export const Static = true;

/**
* Node's Name
*/
export const Name = "if";

/**
* Node's React Component
*/
export default function Content({}) {
    return <h1>if</h1>;
}

/**
* Node's Ports
*/
export const ports = [
    port.input().type('trigger'),
    port.output().type('trigger').label('true'),
    port.output().type('trigger').label('false')
];

// Not yet fully functional
export const extern = {
    'x86_64': ({ $, node, edges }: any) => [
        $('cmp', 'rax', 'rbx'), // TODO: get from boolean input
        `je .${edges[node.ports.find((p:any) => p.label === 'true').edgeIds[0]].to.nodeId}`,
        `jmp .${edges[node.ports.find((p:any) => p.label === 'false').edgeIds[0]].to.nodeId}`
    ]
}