import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Static = true;

export const Name = "number constant";

export default function Content({ nodeId }: ContentProps) {
	const [value, setValue] = useNodeState(nodeId, "value", 0);

	return (
		<>
			<h3>Number</h3>
			<NumberInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	);
}

export const ports = [
	port
		.output()
		.type("number")
		.onFetch(({ state }: onFetchProps) => Number(state.value)),
];
