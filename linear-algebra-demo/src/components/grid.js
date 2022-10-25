import React from 'react'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'
import { Vector } from 'linear-algebra/vector'
import GridLine from './grid-axis'

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
        <GridLine
          key={i}
          start={new Vector(middle + step, 0)}
          end={new Vector(middle + step, side)}
        />
      ))
    const YLines = () =>
      steps.map((step, i) => (
        <GridLine
          key={i}
          start={new Vector(0, middle + step)}
          end={new Vector(side, middle + step)}
        />
      ))

    return (
      <Container>
        <svg width={side} height={side}>
          <g>
            <GridLine
              main
              start={new Vector(middle, 0)}
              end={new Vector(middle, side)}
            />
            <GridLine
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
