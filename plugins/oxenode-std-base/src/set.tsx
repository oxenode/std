import React from "react";
import {
	ContentProps,
	TriggerProps,
	JStoOxenodeType,
	port,
	EdgeContext,
	NodeContext,
	disconnectEdge,
	useNodeState,
} from "@oxenode/core";

import { Select } from "@oxenode/ui";

export const Name = "Variable Set";

export default function Content({
	store,
	state,
	node,
	controller,
}: ContentProps) {
	const { edgeState, dispatchEdge } = React.useContext(EdgeContext);
	const { nodeState } = React.useContext(NodeContext);

	const [variableName, setVariableName] = useNodeState(
		node.id,
		"variableName",
		Object.keys(store)[0]
	);

	const handleOnChange = (e: any) => {
		node.ports = node.ports.map((port) => {
			// Change all ports to the new type
			if (port.label === "value") {
				const newType = JStoOxenodeType[typeof store[e.target.value]];
				if (!port.edgeIds) return port;

				// If types are different, disconnect all edges.
				if (port.type !== newType) {
					port.edgeIds.forEach((edgeId: string) => {
						const edge = edgeState[edgeId];
						if (edge) {
							// Disconnect where the edge comes from
							disconnectEdge(nodeState, edge, "from");

							// Disconnect where the edge is going
							disconnectEdge(nodeState, edge, "to");

							// Remove edge
							dispatchEdge({
								type: "REMOVE_EDGE",
								payload: edgeId,
							});
						}
					});
				}

				port.type = newType;
			}
			return port;
		});

		controller.update(node);
	};

	React.useEffect(
		() =>
			handleOnChange({
				target: { value: state.variableName || Object.keys(store)[0] },
			}),
		[]
	);

	return (
		<>
			<h3>set</h3>
			<Select
				value={variableName}
				onChange={(e) => setVariableName(e.target.value)}
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

export async function Trigger({
	controller,
	store,
	state: { variableName },
	inputs: { value },
}: TriggerProps) {
	if (value !== undefined) {
		if (variableName !== 0) {
			// Hackish trick to trigger re-render of variable in side panel
			store[variableName] = value;

			controller.setStoreItem({ name: variableName, value });
		}
	}

	return controller.trigger(0);
}

export const ports = [
	port.input().type("trigger"),
	port.input().type([]).label("value"),

	port.output().type("trigger"),
];
