import React from 'react'
import '../style.css'
import Grid from './grid'
import Canvas from './canva'
import styled from 'styled-components'
import Form from './form'

const Container = styled.div`
  width: 100%;
  height: 570px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  flex-direction: row;
  position: relative;
`

class Transformation extends React.Component {
  transformMatrix = []
  transfornMatrix = []
  newPos = []
  res = []
  calculate = false

  constructor(props) {
    super(props)
  }

  updateData = (event, id = '') => {
    const side = event.target.id
    const value = event.target.value
    const className = event.target.className
    debugger
    if (!!id && id === 'scale') {
      this.setState({
        side: Number(value)
      })
      this.props.state[side] = Number(value)
      this.transfornMatrix = this.setScaleMatrix()
    } else if (!!id && id === 'length') {
      this.setState({
        side: Number(value)
      })
      this.props.state[side] = Number(value)
    } else if (!!id && id === 'dot') {
      this.calculate = false
      this.setState({
        side: Number(value)
      })
      this.props.state[side] = Number(value)
    } else if (!!id && id === 'rotation') {
      this.calculate = true
      this.setState({
        side: Number(value)
      })
      this.props.state[side] = Number(value)
      // this.rotate();
      this.transformMatrix = this.setRotationMatrix()
    } else if (className === 'affine' || id === 'setAffine') {
      this.setState({
        affine: { side: Number(value) }
      })
      this.props.state.affine[side] = Number(value)
      if (id === 'setAffine') {
        this.calculate = true
        this.transformMatrix = this.setAffineMatrix()
      }
    } else {
      this.setState({
        side: Number(value)
      })
      this.props.state[side] = Number(value)
    }
  }

  setScaleMatrix() {
    const S = this.props.state.step / 10

    return [[S, 0, 0], [0, S, 0], [0, 0, 1]]
  }

  setRotationMatrix() {
    const angle = -((Number(this.props.state.deg) * Math.PI) / 180)
    const dotX = Number(this.props.state.dotX)
    const dotY = Number(this.props.state.dotY)

    return [
      [Math.cos(angle), Math.sin(angle), 0],
      [-1 * Math.sin(angle), Math.cos(angle), 0],
      [
        -1 * dotX * (Math.cos(angle) - 1) + dotY * Math.sin(angle),
        -1 * dotX * Math.sin(angle) - dotY * (Math.cos(angle) - 1),
        1
      ]
    ]
  }

  rotate() {
    const angle = -((Number(this.props.state.deg) * Math.PI) / 180)
    const dotX = Number(this.props.state.dotX)
    const dotY = Number(this.props.state.dotY)
    this.res = this.props.state.coordinates.map(p => {
      const X = p.x - 30
      const Y = p.y - 30

      this.newPos[0] =
        Math.cos(angle) * (X - dotX) - Math.sin(angle) * (Y - dotY) + dotX
      this.newPos[1] =
        Math.sin(angle) * (X - dotX) + Math.cos(angle) * (Y - dotY) + dotY

      return { id: p.id, x: this.newPos[0] + 30, y: this.newPos[1] + 30 }
    })

    this.props.state.coordinates = this.res
  }

  setAffineMatrix() {
    const Xx = this.props.state.affine.Xx
    const Xy = this.props.state.affine.Xy
    const Yx = this.props.state.affine.Yx
    const Yy = this.props.state.affine.Yy
    const Ox = this.props.state.affine.Ox
    const Oy = this.props.state.affine.Oy

    return [[Xx, Xy, 0], [Yx, Yy, 0], [Ox, Oy, 1]]
  }

  matrixMultiplication(point, transformMatrix) {
    if (point.length !== transformMatrix[0].length) {
      throw new Error(
        'The number of columns of the first matrix is not equal to the number of rows of the second matrix.'
      )
    }

    const columns = transformMatrix[0].map((_, i) =>
      transformMatrix.map(r => r[i])
    )

    this.newPos = columns.map(column => {
      return point
        .map((element, i) => {
          return element * column[i]
        })
        .reduce((acc, value) => {
          return acc + value
        }, 0)
    })
  }

  render() {
    if (!!this.transformMatrix.length) {
      debugger
      this.res = this.props.state.coordinates.map(p => {
        const X = p.x - 30
        const Y = p.y - 30

        const point = [X, Y, 1]

        this.matrixMultiplication(point, this.transformMatrix)

        return { id: p.id, x: this.newPos[0] + 30, y: this.newPos[1] + 30 }
      })

      this.props.state.coordinates = this.res
    }

    return (
      <Container>
        <Grid state={this.props.state}>
          <Canvas state={this.props.state} />
        </Grid>
        <Form updateData={this.updateData} state={this.props.state} />
      </Container>
    )
  }
}

export default Transformation
