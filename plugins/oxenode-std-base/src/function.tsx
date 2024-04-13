import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { ErrorMessage, Textarea } from "@oxenode/ui";

export const Name = "Function JS";

export default function Content({ nodeId }: ContentProps) {
	const [code, setCode] = useNodeState(nodeId, "code", "return 'Hello';");

	return (
		<>
			<h3>JS Function</h3>
			<Textarea
				value={code}
				onChange={(e) => setCode(e.target.value)}
				language="javascript"
			/>
			<br />
			<ErrorMessage nodeId={nodeId} />
		</>
	);
}

const AsyncFunction: FunctionConstructor = Object.getPrototypeOf(
	async function () {}
).constructor;

export const ports = [
	port.input().type("data").label("args"),
	port
		.output()
		.type("function")
		.label("function")
		.onFetch(
			({
				node,
				state: { code },
				inputs: { args },
				controller,
			}: onFetchProps) => {
				args = args || {};

				node.State.err = undefined;

				let functionScript;
				try {
					const argDeconstruct = `let {${Object.keys(args).join(
						","
					)}} = args;\n`;
					functionScript = AsyncFunction(
						"args",
						argDeconstruct + code
					);
				} catch (e) {
					node.State.err = e.toString();
					controller.update(node);
					return () => {};
				}

				controller.update(node);
				return functionScript;
			}
		),
];
