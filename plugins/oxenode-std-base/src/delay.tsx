import { ContentProps, TriggerProps, port } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "delay";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>Delay (ms)</h2>
      <NumberInput name="value" nodeId={nodeId} value="1000" />
    </>
  );
}

export async function Trigger({ state, controller }: TriggerProps) {
  await new Promise((res) => {
    setTimeout(res, state.value);
  });

  return controller.trigger(0);
}

export const ports = [
  port.input().type("trigger"),
  port.output().type("trigger"),
];
