import { Select } from "@oxenode/ui";

import { ContentProps, FetchProps, port } from "@oxenode/core";

export const Name = "boolean constant";

export default function Content({ nodeId }: ContentProps) {
  return (
    <Select nodeId={nodeId} name="A" value="0">
      <option value="0">False</option>
      <option value="1">True</option>
    </Select>
  );
}

export const ports = [
  port
    .output()
    .type("boolean")
    .onFetch(({ state: { A } }: FetchProps) => Boolean(+A)),
];
