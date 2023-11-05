import { ContentProps, FetchProps, port } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "power";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h4>pow</h4>
      <NumberInput
        name="power"
        nodeId={nodeId}
        value="2"
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
    .onFetch(({ inputs, state: { power } }: FetchProps) => Math.pow(inputs[0], power)),
];
