import { onFetchProps, port } from "@oxenode/core";

export const Name = "concat";

export default function Content() {
  return <h3>concat</h3>;
}

export const ports = [
  port.input().type(["string", "number", "boolean"]).label("A"),
  port.input().type(["string", "number", "boolean"]).label("B"),
  port
    .output()
    .type("string")
    .onFetch(({ inputs: { A, B } }: onFetchProps) => `${A}${B}`),
];
