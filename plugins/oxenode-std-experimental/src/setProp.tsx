import { ContentProps, onFetchProps, port } from "@oxenode/core";
import { TextInput } from "@oxenode/ui";

export const Name = "set";

export default function Content({ nodeId }: ContentProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        margin: 0,
      }}
    >
      <TextInput
        style={{
          fontSize: "28px",
          maxWidth: "14rem",
          margin: 0,
        }}
        nodeId={nodeId}
        name="key"
      />
    </div>
  );
}

export const ports = [
  port.input().type(["string", "number", "data"]).label("value"),
  port.input().type("data").label("object"),
  port
    .output()
    .type("data")
    .onFetch(({ inputs, state }: onFetchProps) => {
      const ans = { ...(inputs.object || {}) };

      ans[state.key] = inputs.value;

      return ans;
    }),
];
