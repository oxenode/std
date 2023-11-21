import { TriggerProps, port } from "@oxenode/core";

export const Name = "Websocket Create";

export default function Content() {

    return (
        <>
            <h3>Websocket Create</h3>
        </>
    );
}

export async function Trigger({ inputs: { uri }, controller }: TriggerProps) {
    const socket = await (new Promise((resolve, reject) => {
        const server = new WebSocket(uri);
        server.onopen = () => resolve(server);
        server.onerror = (err) => reject(err);
    }));

    console.log('CREATED NEW SOCKET', socket)

    controller.setCache('socket', socket);

    return controller.trigger(0);
}

export const ports = [
    port.input().type('trigger'),
    port.input().type('string').label('uri'),
    
    port.output().type('trigger'),
    port.output().type('data').label('socket').onFetch(({ cache }) => cache),
]