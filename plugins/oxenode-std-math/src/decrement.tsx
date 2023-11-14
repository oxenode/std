import { onFetchProps, port } from "@oxenode/core";

export const Name = "decrement number --";

export default function Content() {
  return <h1>--</h1>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: onFetchProps) => inputs[0] - 1),
];
