import { ContentProps, FetchProps, TriggerProps, port } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Name = "eval js";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>JS</h2>
      <Textarea
        name="code"
        nodeId={nodeId}
        language="javascript"
        value={"alert(`Hello world`)"}
      />
    </>
  );
}

const AsyncFunction: FunctionConstructor = Object.getPrototypeOf(
  async function () {}
).constructor;

export async function Trigger({
   state: { code },
   inputs: { args }, 
   controller 
}: TriggerProps) {
  args = args || {};

  const functionScript = AsyncFunction(...Object.keys(args), code);

  const ret = functionScript(...Object.values(args));

  if (ret instanceof Promise) {
    return new Promise((r: any) => {
      ret.then((value: any) => {
        controller.setCache("return", value);
        controller.trigger(0);
      
        r();
      });
  
    });
  } else { 
    controller.setCache("return", ret);
    return controller.trigger(0);
  }
}

export const ports = [
  port.input().type("trigger"),
  port.input().type("data").label("args"),
  port.output().type("trigger"),
  port
    .output()
    .type("data")
    .label("return")
    .onFetch(({ cache }: FetchProps) => cache),
];
