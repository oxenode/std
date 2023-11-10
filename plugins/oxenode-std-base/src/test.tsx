import { TriggerProps, port } from '@oxenode/core'

export const Name = "AlertHello";

export default function Content() {
    return <h2 style={{margin: 0}}>ALERT('')</h2>
}

export async function Trigger({ controller }: TriggerProps) {
    alert('HELLO')

    return controller.trigger(0);
}

export const ports = [
    //port.input().type('trigger'),
    port.output().type('trigger'),
];