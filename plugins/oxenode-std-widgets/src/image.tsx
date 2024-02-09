import { ContentProps, TriggerProps, port, useNodeState } from "@oxenode/core";
import { Image } from "@oxenode/ui";

export const Name = "Image";

export default function Content({ nodeId }: ContentProps) {
  const [url] = useNodeState(nodeId, 'url', '');
  
  return (
    <>
      <h2>Image</h2>
      <Image src={url}/>
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
