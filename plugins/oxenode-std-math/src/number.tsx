import { ContentProps, FetchProps, port } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "number constant";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h3>Number</h3>
      <NumberInput name="value" nodeId={nodeId} value="0" />
    </>
  );
}

export const ports = [
  port
    .output()
    .type("number")
    .onFetch(({ state }: FetchProps) => Number(state.value)),
];
