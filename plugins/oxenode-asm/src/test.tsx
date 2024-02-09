import { port, useNodeState, ContentProps, TriggerProps } from "@oxenode/core";

/**
 * Node's Name
 */
export const Name = "Test Hook";

export async function Trigger({ controller }: TriggerProps) {
	return controller.trigger(0);
}

/**
 * Node's React Component
 */
export default function Content({ nodeId }: ContentProps) {

	const [count, setCount] = useNodeState(nodeId, 'count', 0);

	return (
		<>
			<h4>State Counter Node</h4>
			<span className="xsmall">example</span>

			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click me!
			</button>
		</>
	);
}

/**
 * Node's Ports
 */
export const ports = [
	port.input().type("trigger"),

	port.output().type("trigger"),
	port.output().type("number").label("count").onFetch(({ state }) => state.count),
];
