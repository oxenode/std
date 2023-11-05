import { FetchProps, port } from "@oxenode/core";

export const Name = "OR";

export default function Content() {
  return <h2>OR</h2>;
}

export const ports = [
  port.input().type("boolean").label("A"),
  port.input().type("boolean").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: FetchProps) => A || B),
];