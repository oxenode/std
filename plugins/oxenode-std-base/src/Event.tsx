import { ContentProps, EventStoreContext, TriggerProps, port } from '@oxenode/core'
import { Select } from '@oxenode/ui';
import { useContext, useEffect } from 'react';


export const Name = "Event";

export default function Content({ node, state }: ContentProps) {
    
    const { eventStore } = useContext(EventStoreContext);

    const handleOnChange = (e: any) => {
        console.log(e)
    };
  
    useEffect(() => {
      handleOnChange({
        target: { value: state.eventName || Object.keys(eventStore)[0] },
      });
    }, []);

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '0.8em',
                gap: '0.5em'
            }}>
                <span
                    style={{
                        backgroundColor: `var(--p-instance)`,
                        width: "0.8em",
                        height: "0.8em",
                        margin: "0.2em",
                        borderRadius: "25%",
                    }}
                ></span><h3 style={{margin: 0}}>Event</h3>
            </div>
            <Select
                onChange={handleOnChange}
                name="eventName"
                value={state.eventName || Object.keys(eventStore)[0]}
                nodeId={node.id}
            >
                {Object.entries(eventStore).map(([name], i) => (
                    <option key={i} value={name}>
                        {name}
                    </option>
                ))}
            </Select>
        </>
    )
}

export async function Trigger({ controller }: TriggerProps) {
    return controller.trigger(0);
}

export const ports = [
    port.output().type('trigger')
];