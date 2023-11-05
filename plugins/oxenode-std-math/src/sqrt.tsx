import { FetchProps, port } from "@oxenode/core";

export const Name = "sqrt(x)";

export default function Content() {
  return <h3>sqrt</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: FetchProps) => Math.sqrt(inputs[0])),
];
