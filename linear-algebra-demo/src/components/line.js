import React from 'react'
import styled from 'styled-components'

const Line = styled.line`
  stroke-width: ${p => (p.main ? '3px' : p.layout ? '1.5px' : '0.1px')};
  stroke: ${p =>
    p.main
      ? p.theme.color.mainText
      : p.layout
      ? '#09227a8c'
      : p.theme.color.secondaryText};
`

export default ({ start, end, main = false, layout = false }) => {
  return (
    <Line
      main={main}
      layout={layout}
      x1={start.components[0]}
      y1={start.components[1]}
      x2={end.components[0]}
      y2={end.components[1]}
    />
  )
}
