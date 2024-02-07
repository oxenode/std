import { ContentProps, port } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Static = true;

/**
 * Node's Name
 */
export const Name = "ASM";

/**
 * Node's React Component
 */
export default function Content({ nodeId }: ContentProps) {
	return <>
        <h1>asm</h1>

        <Textarea
            nodeId={nodeId}
            name='source'
            language="armasm"
        />
    
    </>;
}

/**
 * Node's Ports
 */
export const ports = [
    port.input().type('trigger'),
    port.output().type('trigger'),
];

export const extern = {
    'x86_64': ({ state }: any) => state.source.split('\n')
}