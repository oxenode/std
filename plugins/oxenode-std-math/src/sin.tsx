import { onFetchProps, port } from "@oxenode/core";

export const Name = "sin(x)";

export default function Content() {
  return <h3>sin</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: onFetchProps) => Math.sin(inputs[0])),
];
