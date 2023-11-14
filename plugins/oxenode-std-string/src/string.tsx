import { ContentProps, onFetchProps, port } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Name = "String";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h3>String</h3>
      <Textarea name="text" nodeId={nodeId} value="" language="handlebars" />
    </>
  );
}

export const ports = [
  port
    .output()
    .type("string")
    .onFetch(({ state }: onFetchProps) => state.text),
];
