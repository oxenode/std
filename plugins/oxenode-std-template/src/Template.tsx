import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

import { compile } from "handlebars";

export const Name = "Template";

export default function Content({ nodeId }: ContentProps) {
  const [text, setText] = useNodeState(nodeId, 'text', "Hello {{name}} {{lastname}}");

  return (
    <>
      <h2>Template</h2>
      <Textarea
        value={text}
        onChange={e => setText(e.target.value)}
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
