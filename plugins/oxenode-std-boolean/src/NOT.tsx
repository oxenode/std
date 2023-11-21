import { onFetchProps, port } from "@oxenode/core";

export const Name = "NOT";

export default function Content() {
  return <h2>NOT</h2>;
}

export const ports = [
  port.input().type("boolean"),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs }: onFetchProps) => !Boolean(inputs[0])),
];
