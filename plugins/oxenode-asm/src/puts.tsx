import { ExternProps, port } from "@oxenode/core";

export const Static = true;

/**
 * Node's Name
 */
export const Name = "Print";

/**
 * Node's React Component
 */
export default function Content({}) {
	return <>
		<h1>Print</h1>
		<span>x86_64 write syscall</span>
	</>;
}

/**
 * Node's Ports
 */
export const ports = [
	port.input().type("trigger"),
	port.input().type("string").label("buffer"),
	port.output().type("trigger"),
];

export const extern = {
	'x86_64': ({ $, inputs: { buffer } }: ExternProps) => [
		$("mov", "rax", "1"),
		$("mov", "rdi", "1"),
		$("mov", "rsi", buffer),
		$("mov", "rdx", buffer + "_len"),
		$("syscall"),
	],
};
