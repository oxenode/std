import { onFetchProps, port } from "@oxenode/core";

export const Name = "AND";

export default function Content() {
  return <h2>AND</h2>;
}

export const ports = [
  port.input().type("boolean").label("A"),
  port.input().type("boolean").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: onFetchProps) => A && B),
];
