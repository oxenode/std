import { FetchProps, port } from "@oxenode/core";

export const Name = "toObject";

export default function Content() {
  return <h3>toObject</h3>;
}

export const ports = [
  port.input().type("string"),
  port
    .output()
    .type("data")
    .onFetch(({ inputs }: FetchProps) => {
      try {
        return JSON.parse(inputs[0]);
      } catch (e) {
        return { 
          error: e
        };
      }
    }),
];
