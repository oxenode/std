import { ContentProps, onFetchProps, TriggerProps, port } from "@oxenode/core";
import { Select } from "@oxenode/ui";

const methodWithBodies = [
  "POST",
  "PUT",
  "PATCH"
];

export const Name = "Fetch";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>Fetch</h2>
      <Select nodeId={nodeId} name="method" value="GET">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </Select>
      <br/>
      <Select nodeId={nodeId} name="parseMode" value="json">
        <option value="json">json</option>
        <option value="text">text</option>
        <option value="blob">blob</option>
        <option value="arrayBuffer">arrayBuffer</option>
        <option value="clone">clone</option>
        <option value="formData">formData</option>
      </Select>
    </>
  );
}

export async function Trigger({ 
  state: { method, parseMode },
  inputs: { url, options, body },
  controller
}: TriggerProps) {

  options = { method, ...options };

  if (methodWithBodies.includes(method)) {
    options.body = JSON.stringify(body || {});
  }

  fetch(url, options)
    .then((res: any) => (res as Record<string, () => {}>)[parseMode]())
    .then((value: Record<string, any>) => {
      controller.setCache("return", value);
      controller.trigger(0);
    });
}

export const ports = [
  port.input().type("trigger"),
  port.input().type("string").label("url"),
  port.input().type("data").label("options"),
  port.input().type("data").label("body"),
  port.output().type("trigger"),
  port
    .output()
    .type("data")
    .label("return")
    .onFetch(({ cache }: onFetchProps) => cache),
];