import * as yaml from "js-yaml";

import { ContentProps, onFetchProps, port } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Name = "YAML";

export default function Content({ nodeId }: ContentProps) {
  return (
    <>
      <h2>YAML</h2>
      <Textarea
        name="data"
        nodeId={nodeId}
        value={"name: 'James'\nlastname: 'Smith'"}
        language="yaml"
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
        return yaml.load(state.data) || {};
      } catch (e) {
        return { error: "parsing" };
      }
    }),
];
