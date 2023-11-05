import { FetchProps, port } from "@oxenode/core";

export const Name = "XOR";

export default function Content() {
  return <h2>XOR</h2>;
}

export const ports = [
  port.input().type("boolean").label("A"),
  port.input().type("boolean").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: FetchProps) => (A && !B) || (!A && B)),
];
