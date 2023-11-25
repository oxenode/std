import { ContentProps, onFetchProps, port } from '@oxenode/core'
import { Textarea } from '@oxenode/ui'

export const Name = "get object property"

const spanStyle = {
    fontSize: '28px',
    padding: '0 0.4rem'
}

export default function Content({ nodeId }: ContentProps) {
    return <div style={{
        display:'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        margin: 0
    }}>
        <span style={spanStyle}>&#123;&#123;</span>
        <Textarea
            style={{
                maxWidth: '13rem',
                fontSize: '18px',
                margin: 0,
                padding: '0.1rem'
            }}
            nodeId={nodeId}
            name='value'
        />
        <span style={spanStyle}>&#125;&#125;</span>
    </div>
}

export const ports = [
  port.input().type("data"),
  port
    .output()
    .type(["string", "number", "data"])
    .onFetch(({ state, inputs }: onFetchProps) => inputs[0][state.value]),
];