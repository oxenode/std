import { onFetchProps, port } from "@oxenode/core";

export const Name = "create object";

export default function Content() {
  return (
      <h3>Object</h3>
  );
}

export const ports = [
  port.input().type(["string", "number", "data"]).label("value").range(0, 16),
  port
    .output()
    .type("data")
    .onFetch(({ inputs, node }: onFetchProps) => {
      const ans: Record<string, any> = {};

      const properties = node.ports.find(p => p.label === 'value');

      properties.range.ports.forEach(propPort => {
        ans[propPort.label] = inputs[propPort.label]
      });

      return ans;
    }),
];
