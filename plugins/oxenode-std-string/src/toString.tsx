import { FetchProps, port } from "@oxenode/core";

export const Name = "toString";

export function Content() {
  return <h3>toString</h3>;
}

export const ports = [
  port.input().type(["data", "number", "boolean", "function"]),
  port
    .output()
    .type("string")
    .onFetch(({ inputs }: FetchProps) => {
      if (typeof inputs[0] === "object") {
        return JSON.stringify(inputs[0]);
      } else {
        return inputs[0].toString();
      }
    }),
];