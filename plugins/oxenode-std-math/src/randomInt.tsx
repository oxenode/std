import { ContentProps, onFetchProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "random int number";

export default function Content({ nodeId }: ContentProps) {
  const [min, setMin] = useNodeState(nodeId, 'min', 0);
  const [max, setMax] = useNodeState(nodeId, 'max', 9);

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
          onChange={e => setMin(e.target.value)}
          style={{
            maxWidth: "16em",
            width: "3em",
          }}
        />
        <NumberInput
          value={max}
          onChange={e => setMax(e.target.value)}
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
    .onFetch(({ cache, setCache, state }: onFetchProps) => {
      // If initial state
      if (typeof cache === "object") {
        const rand =
          Math.round(Math.random() * (Number(state.max) - Number(state.min)) +
          Number(state.min));

        setCache(rand);

        return rand;
      } else {
        return cache;
      }
    }),
];
