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
			<h2>JS</h2>
			<Textarea
				value={code}
				onChange={(e) => setCode(e.target.value)}
				language="javascript"
			/>
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

	const functionScript = AsyncFunction(...Object.keys(args), code);

	let ret: any;
	try {
		ret = functionScript(...Object.values(args));
	} catch (e) {
		node.State.err = e;
		controller.update(node);
	}

	if (ret instanceof Promise) {
		return new Promise((r: any) => {
			ret.then((value: any) => {
				controller.setCache("return", value);
				controller.trigger(0);

				r();
			});
		});
	} else {
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
];
