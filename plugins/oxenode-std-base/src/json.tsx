import { ContentProps, onFetchProps, port } from '@oxenode/core'
import { Textarea } from "@oxenode/ui";

export const Name = "JSON";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>JSON</h2>
      <Textarea
        name="data"
        nodeId={nodeId}
        value={'{ \n  "name": "Jason", \n  "lastname": "Daniels" \n}'}
        language="json"
      />
    </>
  );
}

export const ports = [
  port
    .output()
    .type("data")
    .onFetch(({ state }: onFetchProps) => {
      try {
        return JSON.parse(state.data || "{}");
      } catch (e) {
        return { error: "parsing" };
      }
    }),
];
