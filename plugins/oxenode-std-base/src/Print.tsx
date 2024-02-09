import { useNodeState, ContentProps, port, TriggerProps } from "@oxenode/core";

import { Textarea } from "@oxenode/ui";

export const Name = "Print";

export default function Content({ nodeId }: ContentProps) {
  const [text, setText] = useNodeState(nodeId, 'text', '');

  return (
    <>
      <h2>Print</h2>
      <Textarea
        value={text}
        onChange={e => setText(e.target.value)}
        language="handlebars"
      />
    </>
  );
}

export async function Trigger({ node, controller, inputs }: TriggerProps) {
  node.State.text = inputs[0] !== undefined ? inputs[0].toString() : "undefined";

  if (typeof inputs[0] === "object") {
    node.State.text = JSON.stringify(inputs[0], null, 2);
  }

  controller.update(node);

  return controller.trigger(0);
}

export const ports = [
  port.input().type("trigger"),
  port.input().type(["data", "string", "number", "boolean"]),
  port.output().type("trigger"),
];
