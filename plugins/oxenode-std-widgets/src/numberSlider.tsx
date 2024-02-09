import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { Slider } from "@oxenode/ui";

export const Name = "number slider";

export default function Content({ state, nodeId }: ContentProps) {
	const [value, setValue] = useNodeState(nodeId, "value", 0);

	return (
		<>
			<h3>{value}</h3>
			<Slider
				value={value}
				onChange={(e) => setValue(e.target.value)}
				min={-(0xfffe / 2)}
				max={0xfffe / 2}
				step={1}
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
