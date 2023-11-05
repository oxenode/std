import { FetchProps, port } from "@oxenode/core";

export const Name = "round number";

export default function Content() {
  return <h3>round</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: FetchProps) => Math.round(inputs[0])),
];
