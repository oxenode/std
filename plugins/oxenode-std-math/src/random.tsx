import { ContentProps, FetchProps, port } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "random number";

export default function Content({ nodeId }: ContentProps) {
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
          name="min"
          nodeId={nodeId}
          value="1"
          style={{
            maxWidth: "16em",
            width: "3em",
          }}
        />
        <NumberInput
          name="max"
          nodeId={nodeId}
          value="9"
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
    .onFetch(({ cache, setCache, state }: FetchProps) => {
      // If initial state
      if (typeof cache === "object") {
        const rand =
          Math.random() * (Number(state.max) - Number(state.min)) +
          Number(state.min);
        setCache(rand);

        return rand;
      } else {
        return cache;
      }
    }),
];
