import { ContentProps, useNodeState, TPort } from "@oxenode/core";
import { Textarea } from "@oxenode/ui";

export const Name = "Comment";

export default function Content({ nodeId }: ContentProps) {
	const [comment, setComment] = useNodeState(nodeId, "comment", "");

	return (
		<Textarea
			value={comment}
			onChange={(e) => setComment(e.target.value)}
			language="markdown"
		/>
	);
}

export const ports: TPort[] = [];