import { onFetchProps, port } from "@oxenode/core";

export const Name = "floor number";

export default function Content() {
  return <h3>floor</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: onFetchProps) => Math.floor(inputs[0])),
];
