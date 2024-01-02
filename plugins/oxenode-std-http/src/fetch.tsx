import { ContentProps, onFetchProps, TriggerProps, port } from "@oxenode/core";
import { Select, ErrorMessage } from "@oxenode/ui";

const methodWithBodies = [
  "POST",
  "PUT",
  "PATCH"
];

export const Name = "Fetch";

export default function Content({ node }: ContentProps) {
  return (
    <>
      <h2>Fetch</h2>
      <Select nodeId={node.id} name="method" value="GET">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </Select>
      <br/>
      <Select nodeId={node.id} name="parseMode" value="json">
        <option value="json">json</option>
        <option value="text">text</option>
        <option value="blob">blob</option>
        <option value="arrayBuffer">arrayBuffer</option>
        <option value="clone">clone</option>
        <option value="formData">formData</option>
      </Select>      
      <br/>

      <ErrorMessage name="err" nodeId={node.id}/>
    </>
  );
}

export async function Trigger({ 
  node,
  state: { method, parseMode },
  inputs: { url, options, body },
  controller
}: TriggerProps) {
  
  options = { method, ...options };

  if (methodWithBodies.includes(method)) {
    options.body = JSON.stringify(body || {});
  }

  // Remove previous error
  if (node.State.err) {
    delete node.State.err;
  }

  // Reset cache 
  controller.setCache("return", {});
  const port = node.ports.find(p => p.label === 'return');
  if (!port) return;
  port.Cache = {};

  controller.update(node);
  
  try {
    // Fetch
    const res = await fetch(url, options) as unknown;

    // Parse response according to parse mode
    const value = await ((res as Record<string, () => {}>)[parseMode]());
    
    controller.setCache("return", value);
    port.Cache = value;
    controller.update(node);

    
  } catch(error) {
    node.State.err = `${error}`;

    controller.setCache("return", {});
    port.Cache = {};
    controller.update(node);
  }

  await (new Promise(r => setTimeout(r)));

  return controller.trigger(0)
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