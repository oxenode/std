import { ContentProps, onFetchProps, port } from "@oxenode/core";
import { Slider } from "@oxenode/ui";

export const Name = "number slider";

export default function Content({ state, nodeId }: ContentProps) {
  return (
    <>
      <h3>{ state && state.value }</h3>
      <Slider name="value" min={-(0xFFFE/2)} max={0xFFFE/2} step={1} nodeId={nodeId} value="0"/>
    </>
  );
}

export const ports = [
  port
    .output()
    .type("number")
    .onFetch(({ state }: onFetchProps) => Number(state.value)),
];
