import React from 'react'
import styled from 'styled-components'
import { Vector } from 'linear-algebra/vector'
import Line from './line'
import { THEME as theme } from '../constants/theme'

const Container = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`

class Grid extends React.Component {
  deg = 0
  dotX = 72.5
  dotY = 50
  height = 500
  width = 630

  render() {
    const { children } = this.props
    if (this.getStepLen() > 0) {
      this.stepLen = this.getStepLen()
    }
    this.deg = Number(this.props.state.deg)
    this.dotX = Number(this.props.state.dotX)
    this.dotY = Number(this.props.state.dotY)

    const shift =
      this.props.state.step > 20
        ? this.props.state.step >= 30
          ? `${30}`
          : `${Number(this.props.state.step.toString()[0]) + 1}0`
        : this.props.state.step < 10
        ? `${30}`
        : `${this.props.state.step + 10}`

    const scale = `translate(${shift}px, ${shift}px) scale(${this.props.state
      .step / 10}) translate(-${shift}px, -${shift}px)`

    const steps = new Array(Math.floor(this.width / this.stepLen))
      .fill(0)
      .reduce((acc, _, i) => [...acc, this.stepLen * (i + 1)], [])

    const XLines = () =>
      steps.map((step, i) => (
        <Line
          key={i}
          start={new Vector(step + 30, 0)}
          end={new Vector(step + 30, this.height)}
        />
      ))
    const YLines = () =>
      steps.map((step, i) => (
        <Line
          key={i}
          start={new Vector(30, this.height - step)}
          end={new Vector(this.width, this.height - step)}
        />
      ))

    return (
      <Container>
        <svg
          width={this.width}
          height={this.height + 30}
          style={{ position: 'relative' }}
        >
          <g>
            <Line
              main
              OY
              start={new Vector(30, 0)}
              end={new Vector(30, this.height + 30)}
            />
            <Line
              main
              OX
              start={new Vector(0, this.height)}
              end={new Vector(this.width, this.height)}
            />
            <XLines />
            <YLines />
          </g>
        </svg>
        <svg
          width={this.width}
          height={this.height + 30}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            transform: 'scaleY(-1)'
          }}
        >
          <g style={{ transform: scale }}>{children}</g>
        </svg>
        <svg
          width={this.width}
          height={this.height + 30}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            transform: 'scaleY(-1)'
          }}
        >
          <g style={{ transform: scale }}>
            <circle
              cx={30 + this.dotX}
              cy={30 + this.dotY}
              r="2px"
              strokeWidth="0"
              fill={theme.color.red}
            />
          </g>
        </svg>
        {/*<p className="mark line" style={{bottom: '193.8px', left: '38.6px'}}>|</p>*/}
        {/*<p className="mark" style={{bottom: '182.5px', left: '32.5px'}}>10</p>*/}
        {/*<p className="mark line" style={{bottom: '203.5px', left: '29.8px', transform: "rotate(90deg)"}}>|</p>*/}
        {/*<p className="mark" style={{bottom: '202.5px', left: '10.8px'}}>10</p>*/}
        {/*<p className="mark" style={{bottom: '185.5px', left: '19.6px'}}>0</p>*/}
        {/*<p className="mark arrow" style={{top: '-15.3px', left: '23px'}}>▲</p>*/}
        {/*<p className="mark arrow" style={{bottom: '190.3px', right: '-11.6px', transform: "rotate(90deg)"}}>▲</p>*/}
        {/*<p className="mark" style={{top: '-3px', left: '20px'}}>y</p>*/}
        {/*<p className="mark" style={{bottom: '187.3px', right: '3px'}}>x</p>*/}
      </Container>
    )
  }

  getStepLen() {
    return this.props.state.step
  }
}

export default Grid
