import { ContentProps, port, TriggerProps } from "@oxenode/core";

export const Name = "Signal";

export default function Content({ node }: ContentProps) {  
  return (
    <div style={{
      padding: '1em',
      borderRadius: '12px',
      backgroundColor: 'var(--dark-1)'
    }}>
      <div style={{
        minWidth: '1.5em',
        minHeight: '1.5em',
        width: '1.5em',
        height: '1.5em',
        borderRadius: '8px',
        backgroundColor: node.State.signal ? `var(--grey-4)` : 'var(--dark-1)'
      }}/>
    </div>
  );
}

export async function Trigger({ node, controller }: TriggerProps) {
  node.State.signal = '1';
  controller.update(node);

  setTimeout(() => {
    node.State.signal = undefined;
    controller.update(node);
  }, 120);

  return controller.trigger(0); 
}

export const ports = [
  port.input().type("trigger"),
  port.output().type("trigger"),
];
