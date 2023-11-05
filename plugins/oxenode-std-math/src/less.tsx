import { FetchProps, port } from "@oxenode/core";

export const Name = "less number";

export default function Content() {
  return <h1>&lt;</h1>;
}

export const ports = [
  port.input().type("number").label("A"),
  port.input().type("number").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: FetchProps) => Boolean(A < B)),
];
