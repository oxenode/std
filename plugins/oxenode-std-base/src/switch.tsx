import { TriggerProps, port } from '@oxenode/core'

export const Name = "Switch"

export default function Content() {
    return <h2>Switch</h2>
}

export async function Trigger({ node, inputs: { value }, controller }: TriggerProps) {

    // Find the port range
    const portRange = node.ports.find(
        p => p.range && p.label === 'case'
    );
    if (!portRange) return;

    let branchEntryPort;
    switch(typeof value) {
        case 'number': {
            branchEntryPort = portRange.range.ports[value];
            break;
        }

        case 'string': {
            // Find the port in the range by label
            branchEntryPort = portRange.range.ports.find(p => p.label === value);
            if (!branchEntryPort) {
                // Find the port in the range by id
                branchEntryPort = portRange.range.ports.find(p => p.id === value);
            };
            break;
        }
    }

    if (!branchEntryPort) return controller.trigger(0);


    return controller.trigger(branchEntryPort.id);
}

export const ports = [
    
    port.input().type('trigger'),
    
    port.input().type(['data']).label('test2').range(0, 16),
    port.input().type(['number', 'string']).label('value'),
    port.output().type('trigger').label('case').range(0, 16),

]
