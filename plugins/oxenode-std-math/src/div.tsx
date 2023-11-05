import { FetchProps, port } from "@oxenode/core";

export const Name = "divide number";

export default function Content() {
  return <h1>÷</h1>;
}

export const ports = [
  port.input().type("number").label("A"),
  port.input().type("number").label("B"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs: { A, B } }: FetchProps) => A / B),
];
