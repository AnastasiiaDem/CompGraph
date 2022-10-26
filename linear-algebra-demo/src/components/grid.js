import React from 'react'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'
import { Vector } from 'linear-algebra/vector'
import Line from './grid-axis'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MARGIN = 10

const getSide = ({ width, height }) => Math.min(width, height) - MARGIN * 2

class Grid extends React.Component {
  lineLen
  x1
  y1
  x2
  y2

  render() {
    const { size, children } = this.props
    const side = getSide(size)
    const middle = side / 2
    const stepLen = this.getStepLen()
    const steps = new Array(Math.floor(middle / stepLen))
      .fill(0)
      .reduce(
        (acc, _, i) => [...acc, stepLen * (i + 1), -stepLen * (i + 1)],
        []
      )

    const XLines = () =>
      steps.map((step, i) => (
        <Line
          key={i}
          start={new Vector(middle + step, 0)}
          end={new Vector(middle + step, side)}
        />
      ))
    const YLines = () =>
      steps.map((step, i) => (
        <Line
          key={i}
          start={new Vector(0, middle + step)}
          end={new Vector(side, middle + step)}
        />
      ))

    const parts = [
      { id: 'AB', length: 10 },
      { id: 'BC', length: 30.1 },
      { id: 'CD', length: 20 },
      { id: 'DE', length: 30.1 },
      { id: 'EF', length: 10 }
    ]

    const Layout = props => {
      let arr = props.parts.map(part => {
        if (part.id === 'AB') {
          this.x1 = middle + stepLen
          this.y1 = middle - stepLen
          this.x2 = middle + stepLen
          this.y2 = middle - stepLen - part.length
        } else if (part.id === 'BC') {
          this.x1 = this.x2
          this.y1 = this.y2
          this.x2 = middle + stepLen + 22.5
          this.y2 = middle - stepLen - 30
        } else if (part.id === 'CD') {
          this.x1 = this.x2
          this.y1 = this.y2
          this.y2 = this.y2 - 20
        } else if (part.id === 'DE') {
          this.x1 = this.x2
          this.y1 = this.y2
          this.x2 = middle + stepLen
          this.y2 = middle - stepLen - 70
        } else if (part.id === 'EF') {
          this.x1 = this.x2
          this.y1 = this.y2
          this.y2 = this.y2 - 10
        }
        return { x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 }
      })

      return arr.map((a, i) => (
        <Line
          key={i}
          layout
          start={new Vector(a.x1, a.y1)}
          end={new Vector(a.x2, a.y2)}
        />
      ))
    }

    return (
      <Container>
        <svg width={side} height={side}>
          <g>
            <Layout parts={parts} />
            <Line
              main
              start={new Vector(middle, 0)}
              end={new Vector(middle, side)}
            />
            <Line
              main
              start={new Vector(0, middle)}
              end={new Vector(side, middle)}
            />
            <XLines />
            <YLines />
          </g>
          {children}
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
      const middle = getSide(size) / 2
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

export default withSize({ monitorHeight: true })(Grid)
