import { FetchProps, port } from "@oxenode/core";

export const Name = "compare";

export default function Content() {
  return <h2>==</h2>;
}

export const ports = [
  port.input().type("string").label("A"),
  port.input().type("string").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: FetchProps) => Boolean(A === B)),
];
