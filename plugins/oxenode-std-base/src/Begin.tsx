import { TriggerProps, port } from '@oxenode/core'

export const Name = "Begin";

export default function Content() {
    return <h2 style={{margin: 0}}>Begin</h2>
}

export async function Trigger({ controller }: TriggerProps) {
    return controller.trigger(0);
}

export const ports = [
    port.output().type('trigger')
];