import { ContentProps, FetchProps, TriggerProps, port } from "@oxenode/core";
import { Select } from "@oxenode/ui";

const methodWithBodies = [
  "POST",
  "PUT",
  "PATCH"
];

interface IFetchOptions {
  method: string;
  headers: Record<string, string>;
  body?: string
}

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
    </>
  );
}

export async function Trigger({ 
  state: { method },
  inputs: { url, headers, body },
  controller
}: TriggerProps) {

  let options: IFetchOptions = { method, headers };

  if (methodWithBodies.includes(method)) {
    options.body = JSON.stringify(body || {});
  }

  fetch(url, options)
    .then((res: any) => res.json())
    .then((value: Record<string, any>) => {
      controller.setCache("return", value);
      controller.trigger(0);
    });
}

export const ports = [
  port.input().type("trigger"),
  port.input().type("string").label("url"),
  port.input().type("data").label("headers"),
  port.input().type("data").label("body"),
  port.output().type("trigger"),
  port
    .output()
    .type("data")
    .label("return")
    .onFetch(({ cache }: FetchProps) => cache),
];