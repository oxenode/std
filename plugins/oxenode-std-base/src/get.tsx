import React from "react";

import {
	ContentProps,
	EdgeContext,
	onFetchProps,
	JStoOxenodeType,
	NodeContext,
	port,
	disconnectEdge,
	useNodeState,
} from "@oxenode/core";

import { Select } from "@oxenode/ui";

export const Name = "Variable Get";

export default function Content({
	store,
	controller,
	node,
	state,
}: ContentProps) {
	const { edgeState, dispatchEdge } = React.useContext(EdgeContext);
	const { nodeState } = React.useContext(NodeContext);

	const [variableName, setVariableName] = useNodeState(
		node.id,
		"variableName",
		Object.keys(store)[0]
	);

	const handleOnChange = (e: any) => {
		let port = node.ports[0];
		const newType = JStoOxenodeType[typeof store[e.target.value]];

		if (!port.edgeIds) return;

		if (port.type !== newType) {
			port.edgeIds.forEach((edgeId: string) => {
				const edge = edgeState[edgeId];
				if (edge) {
					// Disconnect where the edge comes from
					disconnectEdge(nodeState, edge, "from");

					// Disconnect where the edge is going
					disconnectEdge(nodeState, edge, "to");

					// Remove edge
					dispatchEdge({ type: "REMOVE_EDGE", payload: edge.id });
				}
			});
		}

		port.type = newType;

		node.ports[0] = port;

		controller.update(node);
	};

	React.useEffect(() => {
		handleOnChange({
			target: { value: state.variableName || Object.keys(store)[0] },
		});
	}, []);

	return (
		<>
			<h3>get</h3>
			<Select
				onChange={handleOnChange}
				value={state.name || Object.keys(store)[0]}
			>
				{Object.entries(store).map(([name], i) => (
					<option key={i} value={name}>
						{name}
					</option>
				))}
			</Select>
		</>
	);
}

export const ports = [
	port
		.output()
		.type([])
		.onFetch(({ store, state: { variableName } }: onFetchProps) =>
			variableName ? store[variableName] : Object.values(store)[0]
		),
];
