import { FetchProps, port } from "@oxenode/core";

export const Name = "tan(x)";

export default function Content() {
  return <h3>tan</h3>;
}

export const ports = [
  port.input().type("number"),
  port
    .output()
    .type("number")
    .onFetch(({ inputs }: FetchProps) => Math.tan(inputs[0])),
];
