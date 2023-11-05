import { FetchProps, port } from "@oxenode/core";

export const Name = "equals number";

export default function Content() {
  return <h2>==</h2>;
}

export const ports = [
  port.input().type("number").label("A"),
  port.input().type("number").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: FetchProps) => Boolean(A === B)),
];
