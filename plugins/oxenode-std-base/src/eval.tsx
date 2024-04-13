import {
	ContentProps,
	onFetchProps,
	TriggerProps,
	port,
	useNodeState,
} from "@oxenode/core";
import { ErrorMessage, Textarea } from "@oxenode/ui";

export const Name = "eval js";

export default function Content({ nodeId }: ContentProps) {
	const [code, setCode] = useNodeState(
		nodeId,
		"code",
		"alert(`Hello world`)"
	);

	return (
		<>
			<h2>eval</h2>
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

export async function Trigger({
	node,
	state: { code },
	inputs: { args },
	controller,
}: TriggerProps) {
	args = args || {};

	console.log('hit')

	let functionScript, ret: any;
	// Create the function
	try {
		// Desconstruct arguments from the 'arg' object
		const argDeconstruct = `let {${Object.keys(args).join(',')}} = args;\n`;
		functionScript = AsyncFunction('args', argDeconstruct + code);
	} catch(e) {
		node.State.err = e.toString();
		console.log(functionScript);
		controller.update(node);
		return controller.trigger(0);
	}

	console.log(functionScript);
	// Set the function in cache
	controller.setCache("function", functionScript);

	// Run the function
	try {
		ret = functionScript(args || {});
	} catch (e) {
		node.State.err = e.toString();
		controller.update(node);
		return controller.trigger(0);
	}

	// Run if it is a promise, then trigger next node
	if (ret instanceof Promise) {
		return new Promise((r: any) => {
			ret.then((value: any) => {
				node.State.err = undefined;

				// Trigger next node
				controller.update(node);
				controller.setCache("return", value);
				controller.trigger(0);
				r();
			})
			.catch((e: any) => {
				node.State.err = e.toString();
				
				// Trigger next node
				controller.update(node);
				controller.trigger(0);
			});
		});
	} else {
		node.State.err = undefined;

		// Trigger next node
		controller.update(node);
		controller.setCache("return", ret);
		return controller.trigger(0);
	}
}

export const ports = [
	port.input().type("trigger"),
	port.input().type("data").label("args"),
	port.output().type("trigger"),
	port
		.output()
		.type("data")
		.label("return")
		.onFetch(({ cache }: onFetchProps) => cache),
	port
		.output()
		.type("function")
		.label("function")
		.onFetch(({ cache }: onFetchProps) => cache),
];
