import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "random int number";

export default function Content({ nodeId }: ContentProps) {
  const [min, setMin] = useNodeState<number>(nodeId, 'min', 0);
  const [max, setMax] = useNodeState<number>(nodeId, 'max', 9);

  return (
    <>
      <h3>Random Int</h3>
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
          Math.round(Math.random() * (state.max - state.min) + state.min);

          controller.setCache(rand);

        return rand;
      } else {
        return cache;
      }
    }),
];
