import { ContentProps, TriggerProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "delay";

export default function Content({ nodeId }: ContentProps) {
  const [ delayMs, setDelayMs ] = useNodeState<number>(nodeId, 'delayMs', 1000);
  return (
    <>
      <h2>Delay (ms)</h2>
      <NumberInput 
        value={delayMs} 
        onChange={e => setDelayMs(+e.target.value)}
      />
    </>
  );
}

export async function Trigger({ state, controller }: TriggerProps) {
  await new Promise((res) => {
    setTimeout(res, state.delayMs);
  });

  return controller.trigger(0);
}

export const ports = [
  port.input().type("trigger"),
  port.output().type("trigger"),
];
