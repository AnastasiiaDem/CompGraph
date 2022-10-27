import React from 'react'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'
import { Vector } from 'linear-algebra/vector'
import Line from './line'
// import Line from './line'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

class Grid extends React.Component {
  x1
  y1
  x2
  y2

  render() {
    const { size, children } = this.props
    const side = 500
    const stepLen = this.getStepLen()
    const steps = new Array(Math.floor(side / stepLen))
      .fill(0)
      .reduce((acc, _, i) => [...acc, stepLen * (i + 1)], [])

    const XLines = () =>
      steps.map((step, i) => (
        <Line
          key={i}
          start={new Vector(step, 0)}
          end={new Vector(step, side)}
        />
      ))
    const YLines = () =>
      steps.map((step, i) => (
        <Line
          key={i}
          start={new Vector(0, side - step)}
          end={new Vector(side, side - step)}
        />
      ))

    // const parts = [
    //   { id: 'AB', length: 10 },
    //   { id: 'BC', length: 30.1 },
    //   { id: 'CD', length: 20 },
    //   { id: 'DE', length: 30.1 },
    //   { id: 'EF', length: 10 },
    //   { id: 'FG', length: 45 },
    //   { id: 'GH', length: 10 },
    //
    //   { id: 'HI', length: 10 },
    //   { id: 'IJ', length: 60 },
    //   { id: 'JK', length: 10 },
    //   { id: 'KL', length: 35 },
    //   { id: 'LM', length: 10 },
    //   { id: 'MN', length: 60 },
    //   { id: 'NO', length: 10 },
    //   { id: 'OP', length: 10 },
    //   { id: 'PQ', length: 45 },
    //   { id: 'QR', length: 30.1 },
    //   { id: 'RS', length: 30.1 },
    //   { id: 'ST', length: 20 },
    //   { id: 'TU', length: 30.1 },
    //   { id: 'UV', length: 10 },
    //   { id: 'VW', length: 45 },
    //   { id: 'WL', length: 10 },
    //   { id: 'LK', length: 35 },
    //   { id: 'KX', length: 10 },
    //   { id: 'XA', length: 45 },
    //   { id: 'HO', length: 35 },
    //   { id: 'Y', length: Math.PI * 30 },
    //
    // ]
    // const Layout = props => {
    //   let arr = props.parts.map(part => {
    //     if (part.id === 'AB') {
    //       this.x1 = stepLen
    //       this.y1 = side - stepLen
    //       this.x2 = stepLen
    //       this.y2 = side - stepLen - part.length
    //     } else if (part.id === 'BC') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.x2 = stepLen + 22.5
    //       this.y2 = side - stepLen - 30
    //     } else if (part.id === 'CD') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.y2 = this.y2 - 20
    //     } else if (part.id === 'DE') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.x2 = stepLen
    //       this.y2 = this.y2 - 20
    //     } else if (part.id === 'EF') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.y2 = this.y2 - 10
    //     } else if (part.id === 'FG') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.x2 = stepLen + part.length
    //     }else if (part.id === 'GH') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.y2 = side - stepLen - 70
    //     } else if (part.id === 'HI') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.x2 = this.x2 - part.length
    //     }else if (part.id === 'IJ') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.y2 = side - stepLen - 10
    //     } else if (part.id === 'JK') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.x2 = this.x2 + part.length
    //     } else if (part.id === 'KL') {
    //       this.x1 = stepLen
    //       this.y1 = side - stepLen
    //       this.x2 = stepLen
    //       this.y2 = side - stepLen - part.length
    //     } else if (part.id === 'LM') {
    //       this.x1 = this.x2
    //       this.y1 = this.y2
    //       this.x2 = stepLen + 22.5
    //       this.y2 = side - stepLen - 30
    //     }
    //
    //     // else if (part.id === 'CD') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.y2 = this.y2 - 20
    //     // } else if (part.id === 'DE') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.x2 = stepLen
    //     //   this.y2 = this.y2 - 20
    //     // } else if (part.id === 'EF') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.y2 = this.y2 - 10
    //     // } else if (part.id === 'FG') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.x2 = stepLen + part.length
    //     // }else if (part.id === 'GH') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.y2 = side - stepLen - 70
    //     // } else if (part.id === 'HI') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.x2 = this.x2 - part.length
    //     // }else if (part.id === 'IJ') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.y2 = side - stepLen - 10
    //     // } else if (part.id === 'JK') {
    //     //   this.x1 = this.x2
    //     //   this.y1 = this.y2
    //     //   this.x2 = this.x2 + part.length
    //     // }
    //     return { x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 }
    //   })
    //
    //   return arr.map((a, i) => (
    //     <Line
    //       key={i}
    //       layout
    //       start={new Vector(a.x1, a.y1)}
    //       end={new Vector(a.x2, a.y2)}
    //     />
    //   ))
    // }

    return (
      <Container>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 2,
            height: '500px',
            width: '500px'
          }}
        >
          {children}
        </div>
        <svg width={side} height={side}>
          <g>
            {/*<Layout parts={parts} />*/}
            <Line main OY start={new Vector(0, 0)} end={new Vector(0, side)} />
            <Line main OY start={new Vector(0, 0)} end={new Vector(0, side)} />
            <Line
              main
              OX
              start={new Vector(0, side)}
              end={new Vector(side, side)}
            />
            <XLines />
            <YLines />
          </g>
        </svg>
      </Container>
    )
  }

  getStepLen() {
    return this.props.step
  }

  updateProject = size => {
    const step = this.getStepLen()
    this.props.updateProject(vector => {
      const scaled = vector.scaleBy(step)
      const withNegatedY = new Vector(
        scaled.components[0],
        -scaled.components[1]
      )
      const middle = 500 / 2
      return withNegatedY.add(new Vector(middle, middle))
    })
  }

  componentWillReceiveProps({ size, cells }) {
    if (this.props.updateProject) {
      const newStepLen = this.getStepLen(size, cells)
      const oldStepLen = this.getStepLen(this.props.size, cells)
      if (newStepLen !== oldStepLen) {
        this.updateProject(size, cells)
      }
    }
  }

  componentDidMount() {
    if (this.props.updateProject) {
      this.updateProject(this.props.size)
    }
  }
}

export default Grid
