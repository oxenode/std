import { ContentProps, port, useNodeState } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Static = true;

/**
 * Node's Name
 */
export const Name = "ASM Source";

/**
 * Node's React Component
 */
export default function Content({ nodeId }: ContentProps) {
    const [source, setSource] = useNodeState(nodeId, 'source', '; asm source\n');

	return <>
        <h1>asm</h1>

        <Textarea
            language="armasm"
            value={source}
            onChange={e => e.target.value}
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