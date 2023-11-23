import { ContentProps, TriggerProps, port } from "@oxenode/core";
import { NumberInput, Select } from "@oxenode/ui";

export const Name = "Pin Mode";

export default function Content({ nodeId }: ContentProps) {
    return <>
        <h3>Pin Mode</h3>
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
            <option value={(0)}>Disable</option>
            <option value={(1 << 0)}>Input</option>
            <option value={(1 << 1)}>Output</option>
            <option value={(1 << 1) | (1 << 2)}>Output OD</option>
            <option value={(1 << 0) | (1 << 1) | (1 << 2)}>Input Output OD</option>
            <option value={(1 << 0) | (1 << 1)}>Input Output</option>
        </Select>
    </>;
}

export function Trigger({ controller, inputs: { socket }, state: { mode, gpioPin } }: TriggerProps) {

    const commandBuffer = new Uint8Array([
        0x7F,           // Motor Control
        gpioPin,         // GPIO Pin
        +mode & 0x07    // Forward
    ]);

    socket.send(commandBuffer);

    return controller.trigger(0);
} 

export const ports = [
    port.input().type('trigger'),
    port.input().type('data').label('socket'),
    port.output().type('trigger'),
]