import { Select } from "@oxenode/ui";

import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";

export const Name = "boolean constant";

export default function Content({ nodeId }: ContentProps) {
	const [value, setValue] = useNodeState(nodeId, "value", "0");

	return (
		<Select
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			<option value="0">False</option>
			<option value="1">True</option>
		</Select>
	);
}

export const ports = [
	port
		.output()
		.type("boolean")
		.onFetch(({ state: { A } }: onFetchProps) => Boolean(+A)),
];
