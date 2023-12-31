import { onFetchProps, port } from "@oxenode/core";

export const Name = "toNumber";

export default function Content({}) {
  return <h3>toNumber</h3>;
}

export const ports = [
  port.input().type(["string", "boolean"]),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: onFetchProps) => Number(inputs[0])),
];
