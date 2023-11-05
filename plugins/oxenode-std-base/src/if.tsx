import { TriggerProps, port } from '@oxenode/core'

export const Name = "If"

export default function Content() {
    return <h1>If</h1>
}

export async function Trigger({ inputs, controller }: TriggerProps) {
    return controller.trigger(Number(!inputs[0]));
}

export const ports = [
    port.input().type('trigger'),
    port.input().type('boolean'),
    port.output().type('trigger').label('true'),
    port.output().type('trigger').label('false')
]
