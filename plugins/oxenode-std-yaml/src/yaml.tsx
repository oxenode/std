import * as yaml from "js-yaml";

import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Name = "YAML";

export default function Content({ nodeId }: ContentProps) {
	const [source, setSource] = useNodeState(
		nodeId,
		"source",
		"name: 'James'\nlastname: 'Smith'"
	);

	return (
		<>
			<h2>YAML</h2>
			<Textarea
				value={source}
        onChange={e => setSource(e.target.value)}
				language="yaml"
			/>
		</>
	);
}

export const ports = [
	port
		.output()
		.type("data")
		.onFetch(({ state: { source } }: onFetchProps) => {
			try {
				return yaml.load(source) || {};
			} catch (e) {
				return { error: "parsing" };
			}
		}),
];
