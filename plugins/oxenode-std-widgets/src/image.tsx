import { ContentProps, TriggerProps, port } from "@oxenode/core";
import { Image } from "@oxenode/ui";

export const Name = "Image";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>Image</h2>
      <Image nodeId={nodeId} name="url" width='200px' />
    </>
  );
}

export function Trigger({ node, inputs, controller }: TriggerProps) {
  node.State.url = inputs.url;

  controller.update(node);

  return controller.trigger(0);
}

export const ports = [
  port.input().type("trigger"),
  port.input().type("string").label("url"),
  port.output().type("trigger")
];
