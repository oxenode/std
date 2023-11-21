import { TriggerProps, port } from "@oxenode/core";

export const Name = "Websocket Send";

export default function Content() {

    return (
        <>
            <h3>Websocket Send</h3>
        </>
    );
}

export async function Trigger({ inputs: { socket, data }, controller }: TriggerProps) {
    if (data.length < 2) {
        console.log('Please provide a byte string\n Example:   81 A2 BE\n');
    };

    let [command, ...args] = data.split(' ');

    command = parseInt(command.slice(0, 2), 16) || 0x00;

    if (!args) args = [];

    const promise = new Promise(r => {
        socket.onmessage = (data: string) => {
            r(data);
        };
    });

    const commandBuffer = new Uint8Array([
        command & 0xFF,         // Command Byte
        args[0] & 0xFF || 0x00, // ARG1 Byte or just send 0x00 if not defined
        args[1] & 0xFF || 0x00  // ARG2 Byte or just send 0x00 if not defined
    ]);

    socket.send(commandBuffer);


    controller.setCache('data', promise );

    return controller.trigger(0);
}

export const ports = [
    port.input().type('trigger'),
    port.input().type('data').label('socket'),
    port.input().type('string').label('data'),
    port.output().type('trigger')
]