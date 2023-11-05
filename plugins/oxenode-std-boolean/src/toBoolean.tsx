import { FetchProps, port } from "@oxenode/core";

export const Name = "toBoolean";

export default function Content() {
  return <h3>toBoolean</h3>;
}

export const ports = [
  port.input().type(["data", "string", "number"]),
  port
    .output()
    .type("boolean")
    .onFetch(({ inputs }: FetchProps) => Boolean(inputs[0])),
];
