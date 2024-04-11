import {
	ContentProps,
	onFetchProps,
	TriggerProps,
	port
} from "@oxenode/core";
import { ErrorMessage } from "@oxenode/ui";

export const Name = "Function Call JS";

export default function Content({ nodeId }: ContentProps) {
	return (
		<>
			<h3>JS Function Call</h3>
			<ErrorMessage nodeId={nodeId}/>
		</>
	);
}

export async function Trigger({
	node,
	inputs,
	controller,
}: TriggerProps) {
	let args = inputs.args || {};
	let ret: any;
	try {
		ret = inputs.function(args);
	} catch (e) {
		node.State.err = e.toString();
		controller.update(node);
		return controller.trigger(0);
	}

	if (ret instanceof Promise) {
		return new Promise((r: any) => {
			ret.then((value: any) => {
				node.State.err = undefined;
				controller.update(node);
				controller.setCache("return", value);
				controller.trigger(0);

				r();
			})
			.catch((e: any) => {
				node.State.err = e.toString();
				controller.update(node);
				controller.trigger(0);
			});
		});
	} else {
		node.State.err = undefined;
		controller.update(node);

		controller.setCache("return", ret);
		return controller.trigger(0);
	}
}

export const ports = [
	port.input().type("trigger"),
	port.input().type("function").label("function"),
	port.input().type("data").label("args"),
	port.output().type("trigger"),
	port
		.output()
		.type("data")
		.label("return")
		.onFetch(({ cache }: onFetchProps) => cache)
];
