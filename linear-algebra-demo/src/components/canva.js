import React from 'react'
import { withSize } from 'react-sizeme'

class Canvas extends React.Component {
  step = 10
  width = 0
  height = 0
  steps = 0

  componentDidMount() {
    this.updateFigure()
  }

  updateFigure() {
    let canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.moveTo(Number(this.step), this.height - Number(this.step))
      ctx.lineTo(Number(this.step), this.height - Number(this.step) - 10)
      ctx.lineTo(Number(this.step) + 10, this.height - Number(this.step) - 10)
      ctx.lineTo(Number(this.step) + 10, this.height - Number(this.step) - 10)
      ctx.stroke()
    }
  }

  render() {
    const { size } = this.props
    this.height = 500
    this.step = this.props.step
    this.steps = new Array(Math.floor(this.height / this.step))
      .fill(0)
      .reduce((acc, _, i) => [...acc, this.step * (i + 1)], [])

    if (!!document.getElementById('canvas')) {
      this.updateFigure()
    }

    return <canvas id="canvas" width={500} height={500} />
  }
}

export default Canvas
