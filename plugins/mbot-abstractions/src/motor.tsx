import { ContentProps, TriggerProps, port } from "@oxenode/core";
import { Select } from "@oxenode/ui";

export const Name = "Motor";

export default function Content({ nodeId }: ContentProps) {
    return <>
        <h3>Motor</h3>
        <span className="xsmall">Control motors</span>

        <Select
            nodeId={nodeId}
            name='mode'
            value='1'
        >
            <option value="1">Go Forward</option>
            <option value="2">Turn Left</option>
            <option value="3">Turn Right</option>
            <option value="4">Brake</option>
        </Select>
    </>;
}

export async function Trigger({ controller, inputs: { socket }, state: { mode } }: TriggerProps) {

    const commandBuffer = new Uint8Array([
        0xC0,        // Motor Control
        +mode & 0x07 // Forward
    ]);

    console.log(commandBuffer);

    socket.send(commandBuffer);

    const response = await (new Promise(r => {
        socket.onmessage = (data: string) => {
            r(data);
        };
    }));

    console.log(response);

    return controller.trigger(0);
} 

export const ports = [
    port.input().type('trigger'),
    port.input().type('data').label('socket'),
    port.output().type('trigger'),
]