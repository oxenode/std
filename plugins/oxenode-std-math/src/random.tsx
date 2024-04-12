import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "random number";

export default function Content({ nodeId }: ContentProps) {
  const [min, setMin] = useNodeState(nodeId, 'min', 0);
  const [max, setMax] = useNodeState(nodeId, 'max', 9);

  return (
    <>
      <h3>Random</h3>
      <form
        style={{
          display: "flex",
          gap: "0.5em",
        }}
      >
        <NumberInput
          value={min}
          onChange={e => setMin(Number(e.target.value))}
          style={{
            maxWidth: "16em",
            width: "3em",
          }}
        />
        <NumberInput
          value={max}
          onChange={e => setMax(Number(e.target.value))}
          style={{
            maxWidth: "16em",
            width: "3em",
          }}
        />
      </form>
    </>
  );
}

export const ports = [
  port
    .output()
    .type("number")

    // TODO: CACHE SHOULD BE UNDEFINED IF NOT SET. IT SHOULD NOT BE ({})
    .onFetch(({ cache, controller, state }: onFetchProps) => {
      // If initial state
      if (typeof cache === "object") {
        const rand =
          Math.random() * (state.max - state.min) + state.min;
        
        controller.setCache(rand);

        return rand;
      } else {
        return cache;
      }
    }),
];
