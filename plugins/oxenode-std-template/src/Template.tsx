import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

import { compile } from "handlebars";

export const Name = "Template";

export default function Content({ nodeId }: ContentProps) {
  const [source, setSource] = useNodeState(nodeId, 'source', "Hello {{name}} {{lastname}}");

  return (
    <>
      <h2>Template</h2>
      <Textarea
        value={source}
        onChange={e => setSource(e.target.value)}
        language="handlebars"
      />
    </>
  );
}

export const ports = [
  port.input().type(["data", "string"]),
  port
    .output()
    .type("string")
    .onFetch(({ state, inputs }: onFetchProps) => {
      let data: { [key: string]: any } = inputs;
      if (typeof inputs[0] === "object") {
        data = inputs[0];
      }

      const template = compile(state.text);
      try {
        return template(data);
      } catch (e) {
        return `Handlebars ${e}`;
      }
    }),
];
