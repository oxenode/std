import { ContentProps, port } from "@oxenode/core";
import { Canvas } from "@oxenode/ui";

export const Name = "Canvas";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>Canvas</h2>
      <Canvas nodeId={nodeId} name="draw" />
    </>
  );
}

export async function Trigger({ node, inputs, controller }: any) {
  node.State["draw_setup"] = inputs.setup;
  node.State["draw_loop"] = inputs.loop;

  controller.update(node);
}

export const ports = [
  port.input().type("trigger"),
  port.input().type("function").label("setup"),
  port.input().type("function").label("loop"),
];
