import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Static = true;

export const Name = "String";

export default function Content({ nodeId }: ContentProps) {
	const [text, setText] = useNodeState(nodeId, 'text', '');
  
  return (
		<>
			<h3>String</h3>
			<Textarea
				value={text}
        onChange={e => setText(e.target.value)}
				language="handlebars"
			/>
		</>
	);
}

export const ports = [
	port
		.output()
		.type("string")
		.onFetch(({ state }: onFetchProps) => state.text),
];
