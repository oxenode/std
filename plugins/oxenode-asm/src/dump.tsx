import { port, ExternProps } from "@oxenode/core";

export const Static = true;

/**
 * Node's Name
 */
export const Name = "dump";

/**
 * Node's React Component
 */
export default function Content({}) {
	return <h1>dump</h1>;
}

/**
 * Node's Ports
 */
export const ports = [
	port.input().type("trigger"),
	port.input().type("number").label("value"),
	port.output().type("trigger"),
];

export const extern = {
	'x86_64': ({ $, inputs: { value } }: ExternProps) => [
		$('mov', 'rdi', [value]),
		$('call', 'dump')
	]
};
