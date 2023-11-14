import { onFetchProps, port } from "@oxenode/core";

export const Name = "absolute number";

export default function Content() {
  return <h3>abs</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: onFetchProps) => Math.abs(inputs[0])),
];
