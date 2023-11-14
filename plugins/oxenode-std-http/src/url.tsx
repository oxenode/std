import { onFetchProps, port } from "@oxenode/core";

export const Name = "URL Queries";

export default function Content() {
  return <h4>URL Queries</h4>
}

export const ports = [
  port.input().label("url").type(["string"]),
  port.input().label("queries").type(["data", "string"]),
  port
    .output()
    .type("string")
    .onFetch(({ inputs }: onFetchProps) => {

      if (typeof inputs.queries === "string") {
        return inputs.url + "?" + inputs.queries;
      }

      return (
        inputs.url +
        "?" +
        Object.entries(inputs.queries).reduce((str, q) => `${q[0]}=${q[1]}&${str}`, "")
      );
    }),
];
