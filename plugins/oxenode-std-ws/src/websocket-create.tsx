import { ContentProps, TriggerProps, port } from "@oxenode/core";
import { ErrorMessage } from "@oxenode/ui";

export const Name = "Websocket Create";

export default function Content({ nodeId }: ContentProps) {

    return (
        <>
            <h3>Websocket Create</h3>
            <ErrorMessage name="err" nodeId={nodeId}/>
        </>
    );
}

export async function Trigger({ node, inputs: { uri }, controller }: TriggerProps) {
    const socket = await (new Promise((resolve, reject) => {
        const server = new WebSocket(uri);
        server.onopen = () => resolve(server);
        server.onerror = (err) => {
            node.State.err = err;
            controller.update(node);
            
            reject(err)
        };
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