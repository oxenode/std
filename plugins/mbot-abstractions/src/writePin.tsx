import { ContentProps, TriggerProps, port } from "@oxenode/core";
import { NumberInput, Select } from "@oxenode/ui";

export const Name = "Write Pin";

export default function Content({ nodeId }: ContentProps) {
    return <>
        <h3>Write Pin</h3>
        <span className="xsmall">Write digital state to pins</span>

        <NumberInput
            nodeId={nodeId}
            name='gpioPin'
            value='12'
        />

        <Select
            nodeId={nodeId}
            name='mode'
            value='1'
        >
            <option value="1">HIGH</option>
            <option value="0">LOW</option>
        </Select>
    </>;
}

export function Trigger({ controller, inputs: { socket }, state: { mode, gpioPin } }: TriggerProps) {

    const commandBuffer = new Uint8Array([
        0x80,        // Motor Control
        gpioPin,     // GPIO Pin
        +mode & 1    // Forward
    ]);

    console.log(commandBuffer);

    socket.send(commandBuffer);

    const promise = new Promise(r => {
        socket.onmessage = (data: string) => {
            r(data);
        };
    });

    controller.setCache('data', promise);

    return controller.trigger(0);
} 

export const ports = [
    port.input().type('trigger'),
    port.input().type('data').label('socket'),
    port.output().type('trigger'),
]