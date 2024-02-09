import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "power";

export default function Content({ nodeId }: ContentProps) {
  const [power, setPower] = useNodeState(nodeId, 'power', 2);

  return (
    <>
      <h4>pow</h4>
      <NumberInput
        value={power}
        onChange={e => setPower(e.target.value)}
        style={{ fontSize: 16 }}
      />
    </>
  );
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs, state: { power } }: onFetchProps) => Math.pow(inputs[0], power)),
];
