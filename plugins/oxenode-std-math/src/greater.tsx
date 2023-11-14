import { onFetchProps, port } from "@oxenode/core";

export const Name = "greater number";

export default function Content() {
  return <h1>&gt;</h1>;
}

export const ports = [
  port.input().type("number").label("A"),
  port.input().type("number").label("B"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs: { A, B } }: onFetchProps) => Boolean(A > B)),
];
