import { FetchProps, port } from "@oxenode/core";

export const Name = "sin(x)";

export default function Content() {
  return <h3>sin</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: FetchProps) => Math.sin(inputs[0])),
];
