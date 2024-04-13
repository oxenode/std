import { ContentProps, port, useNodeState } from "@oxenode/core";
import { NumberInput } from "@oxenode/ui";

export const Name = "Plotter";

export default function Content({ nodeId }: ContentProps) {
  const [values, setValues] = useNodeState<number[]>(nodeId, 'values', []);
  const [max, setMax] = useNodeState<number>(nodeId, 'max', 0);
  const [min, setMin] = useNodeState<number>(nodeId, 'min', 0);


  return (
    <>
      <h2>Plotter</h2>
      <div style={{
        display: 'flex'
      }}>
        <input
          type="number"
          className="inline"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />

        <input
          type="number"
          className="inline"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
        />
      </div>
      <svg width="200px" height="200px">
        <rect width="200px" height="200px" x="0" y="0" rx="0" ry="0" fill="var(--dark-2)" />
        
        <polyline 
          points={values ? values.map((value, i) => {

            const x = i * (200 / values.length);
            const y = 200 - (200 / (max - min) * (value - min));

            return `${x} ${y}`
          }).join(' ') : '0 50 200 50'}
          stroke="var(--blue)" 
          fill="transparent" 
          stroke-width="1"
        />
      </svg>
      <button onClick={() => setValues([])}>Clear</button>
    </>
  );
}
const BUFFER_SIZE = 64;
export async function Trigger({ node, inputs, controller }: any) {

  if (inputs.value > node.State.max) {
    node.State.max = inputs.value;
  }

  if (inputs.value <= node.State.min) {
    node.State.min = inputs.value;
  }
  if (node.State.values.length > BUFFER_SIZE) {
    node.State.values.shift();
  }
  node.State.values.push(inputs.value);
  controller.update(node);

  return controller.trigger(0);
}

export const ports = [
  port.input().type('trigger'),
  port.input().type(['number']).label("value"),
  port.output().type('trigger')
];
