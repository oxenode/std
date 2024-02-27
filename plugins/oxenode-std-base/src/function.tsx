import {
	ContentProps,
	onFetchProps,
	port,
	useNodeState,
} from "@oxenode/core";
import { ErrorMessage, Textarea } from "@oxenode/ui";

export const Name = "Function JS";

export default function Content({ nodeId }: ContentProps) {
	const [code, setCode] = useNodeState(
		nodeId,
		"code",
		"return 'Hello';"
	);

	return (
		<>
			<h2>JS</h2>
			<span>Arguments do not work</span>
			<Textarea
				value={code}
				onChange={(e) => setCode(e.target.value)}
				language="javascript"
			/>
			<br/>
			<ErrorMessage nodeId={nodeId}/>
		</>
	);
}

const AsyncFunction: FunctionConstructor = Object.getPrototypeOf(
	async function () {}
).constructor;

export const ports = [
	port
		.output()
		.type("function")
		.label("function")
		.onFetch(({
			node,
			state: { code },
			inputs: { args },
			controller
		}: onFetchProps) => {
			args = args || {};

			let functionScript;
			try {
				const argDeconstruct = `\nconst {${Object.keys(args).join(',')}} = args;\n`;
				functionScript = AsyncFunction('args', argDeconstruct + code);
			} catch(e) {
				node.State.err = e.toString();
				controller.update(node);
				return () => {};
			}
		
			return functionScript;
		}),
];
