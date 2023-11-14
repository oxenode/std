import { ContentProps, onFetchProps, port } from '@oxenode/core'
import { TextInput } from '@oxenode/ui'

export const Name = "get"

const spanStyle = {
    fontSize: '44px',
    padding: '0 0.7rem'
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
        <TextInput
            style={{
                fontSize: '32px',
                maxWidth: '14rem',
                margin: 0
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