import { ContentProps, onFetchProps, port, useNodeState } from '@oxenode/core'
import { Textarea } from "@oxenode/ui";

export const Name = "JSON";

export default function Content({ nodeId }: ContentProps) {
  const [data, setData] = useNodeState(nodeId, 
    'data', 
    '{ \n  "name": "Jason", \n  "lastname": "Daniels" \n}'  
  )

  return (
    <>
      <h2>JSON</h2>
      <Textarea
        value={data}
        onChange={e => setData(e.target.value)}
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
