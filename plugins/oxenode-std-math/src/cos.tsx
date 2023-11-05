import { FetchProps, port } from "@oxenode/core";

export const Name = "cos(x)";

export default function Content() {
  return <h3>cos</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: FetchProps) => Math.cos(inputs[0])),
];
