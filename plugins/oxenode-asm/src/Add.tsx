import { ExternProps, port } from "@oxenode/core";

export const Static = true;

/**
 * Node's Name
 */
export const Name = "Add";

/**
 * Node's React Component
 */
export default function Content({}) {
	return <h1>Add</h1>;
}

/**
 * Node's Ports
 */
export const ports = [
	port.input().type("trigger"),
	port.input().type("number").label("a"),
	port.input().type("number").label("b"),
	port.output().type("trigger"),
	port.output().type("number").label("result"),
];

export const extern = {
	'x86_64': ({ $, inputs: { a, b }, outputs: { result } }: ExternProps) => [
		$("mov", "rax", [a]),
		$("add", "rax", [b]),
		result
			? $("mov", [result], "rax") 				// Move to destination
			: "; unused result, can be found in `rax`", // Write comment
	],
};
