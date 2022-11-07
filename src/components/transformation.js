import React from 'react'
import '../style.css'
import Grid from './grid'
import styled from 'styled-components'
import Form from './form'

const Container = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  flex-direction: row;
  position: relative;
`

class Transformation extends React.Component {
  transformMatrix = []
  newPos = []
  res = []
  calculate = false
  coordinates = []
  setAxis = false
  defC = [
    { id: 'A', x: 20, y: 20 },
    { id: 'X', x: 65, y: 20 },
    { id: 'K', x: 65, y: 30 },
    { id: 'B', x: 20, y: 30 },
    { id: 'C', x: 42.5, y: 50 },
    { id: 'D', x: 42.5, y: 70 },
    { id: 'E', x: 20, y: 90 },
    { id: 'F', x: 20, y: 100 },
    { id: 'G', x: 65, y: 100 },
    { id: 'H', x: 65, y: 90 },
    { id: 'O', x: 100, y: 90 },
    { id: 'P', x: 100, y: 100 },
    { id: 'Q', x: 145, y: 100 },
    { id: 'R', x: 145, y: 90 },
    { id: 'S', x: 122.5, y: 70 },
    { id: 'T', x: 122.5, y: 50 },
    { id: 'U', x: 145, y: 30 },
    { id: 'V', x: 145, y: 20 },
    { id: 'W', x: 100, y: 20 },
    { id: 'L', x: 100, y: 30 },
    { id: 'I', x: 55, y: 90 },
    { id: 'J', x: 55, y: 30 },
    { id: 'M', x: 110, y: 30 },
    { id: 'N', x: 110, y: 90 },
    { id: 'Z', x: 82.5, y: 60 },
    { id: 'Y', x: 10, y: 10 },
    { id: 'Y1', x: 10, y: 480 },
    { id: 'Y2', x: 610, y: 10 }
  ]
  length = {
    AB: 10,
    BC: 30.1,
    CD: 20,
    DE: 30.1,
    EF: 10,
    FG: 45,
    GH: 10,
    HI: 10,
    IJ: 60,
    JK: 10,
    KX: 10,
    XA: 45,
    KL: 35,
    LM: 10,
    JM: 55,
    MN: 60,
    NO: 10,
    NI: 55,
    OH: 35,
    OP: 10,
    PQ: 45,
    QR: 10,
    RS: 30.1,
    ST: 20,
    TU: 30.1,
    UV: 10,
    VW: 45,
    WL: 10,
    LK: 35
  }
  defaultCoordinates = [
    { id: 'A', x: 20, y: 20 },
    { id: 'X', x: 65, y: 20 },
    { id: 'K', x: 65, y: 30 },
    { id: 'B', x: 20, y: 30 },
    { id: 'C', x: 42.5, y: 50 },
    { id: 'D', x: 42.5, y: 70 },
    { id: 'E', x: 20, y: 90 },
    { id: 'F', x: 20, y: 100 },
    { id: 'G', x: 65, y: 100 },
    { id: 'H', x: 65, y: 90 },
    { id: 'O', x: 100, y: 90 },
    { id: 'P', x: 100, y: 100 },
    { id: 'Q', x: 145, y: 100 },
    { id: 'R', x: 145, y: 90 },
    { id: 'S', x: 122.5, y: 70 },
    { id: 'T', x: 122.5, y: 50 },
    { id: 'U', x: 145, y: 30 },
    { id: 'V', x: 145, y: 20 },
    { id: 'W', x: 100, y: 20 },
    { id: 'L', x: 100, y: 30 },
    { id: 'I', x: 55, y: 90 },
    { id: 'J', x: 55, y: 30 },
    { id: 'M', x: 110, y: 30 },
    { id: 'N', x: 110, y: 90 },
    { id: 'Z', x: 82.5, y: 60 },
    { id: 'Y', x: 10, y: 10 },
    { id: 'Y1', x: 10, y: 480 },
    { id: 'Y2', x: 610, y: 10 }
  ]

  constructor(props) {
    super(props)
  }

  updateData = (event, id = '') => {
    if (id === 'resetEuclid') {
      this.setState(event)
      for (let key in event) {
        this.props.state[key] = event[key]
      }
      for (let key in event.coordinates) {
        this.props.state.coordinates[key] = event.coordinates[key]
      }
      for (let key in event.length) {
        this.props.state.length[key] = event.length[key]
      }
      this.setAxis = false
      this.transformMatrix = this.setRotationMatrix()
    } else if (id === 'resetAffine') {
      this.setState(event)
      for (let key in event) {
        this.props.state[key] = event[key]
      }
      for (let key in event.affine) {
        this.props.state.affine[key] = event.affine[key]
      }
      for (let key in event.coordinates) {
        this.props.state.coordinates[key] = event.coordinates[key]
      }
      this.calculate = true
      this.transformMatrix = this.setAffineMatrix()
    } else if (id === 'resetProjective') {
      this.setState(event)
      for (let key in event) {
        this.props.state[key] = event[key]
      }
      for (let key in event.affine) {
        this.props.state.projective[key] = event.projective[key]
      }
      for (let key in event.coordinates) {
        this.props.state.coordinates[key] = event.coordinates[key]
      }
      this.calculate = false
    } else {
      const side = event.target.id
      const value = event.target.value
      const className = event.target.className
      this.calculate = false
      if (!!id && id === 'scale') {
        this.calculate = true
        this.setState({
          side: Number(value)
        })
        this.props.state[side] = Number(value)
        this.transformMatrix = this.setScaleMatrix()
        this.props.state.coordinates = [
          {
            id: 'A',
            x: this.defC.find(p => p.id === 'A').x,
            y: this.defC.find(p => p.id === 'A').y
          },
          {
            id: 'X',
            x:
              this.defC.find(p => p.id === 'X').x -
              this.length.XA +
              this.props.state.length.XA,
            y:
              this.defC.find(p => p.id === 'X').y -
              this.length.KX +
              this.props.state.length.KX
          },
          {
            id: 'K',
            x: this.defC.find(p => p.id === 'K').x,
            y: this.defC.find(p => p.id === 'K').y
          },
          {
            id: 'B',
            x: this.defC.find(p => p.id === 'B').x,
            y:
              this.defC.find(p => p.id === 'B').y -
              this.length.AB +
              this.props.state.length.AB
          },
          {
            id: 'C',
            x: this.defC.find(p => p.id === 'C').x,
            y: this.defC.find(p => p.id === 'C').y
          },
          {
            id: 'D',
            x: this.defC.find(p => p.id === 'D').x,
            y:
              this.defC.find(p => p.id === 'D').y -
              this.length.CD +
              this.props.state.length.CD
          },
          {
            id: 'E',
            x: this.defC.find(p => p.id === 'E').x,
            y: this.defC.find(p => p.id === 'E').y
          },
          {
            id: 'F',
            x: this.defC.find(p => p.id === 'F').x,
            y:
              this.defC.find(p => p.id === 'F').y -
              this.length.EF +
              this.props.state.length.EF
          },
          {
            id: 'G',
            x:
              this.defC.find(p => p.id === 'G').x -
              this.length.FG +
              this.props.state.length.FG,
            y:
              this.defC.find(p => p.id === 'G').y -
              this.length.GH +
              this.props.state.length.GH
          },
          {
            id: 'H',
            x: this.defC.find(p => p.id === 'H').x,
            y:
              this.defC.find(p => p.id === 'H').y -
              this.length.IJ +
              this.props.state.length.IJ
          },
          {
            id: 'O',
            x: this.defC.find(p => p.id === 'O').x,
            y:
              this.defC.find(p => p.id === 'O').y -
              this.length.MN +
              this.props.state.length.MN
          },
          {
            id: 'P',
            x: this.defC.find(p => p.id === 'P').x,
            y:
              this.defC.find(p => p.id === 'P').y -
              this.length.OP +
              this.props.state.length.OP
          },
          {
            id: 'Q',
            x:
              this.defC.find(p => p.id === 'Q').x -
              this.length.PQ +
              this.props.state.length.PQ,
            y:
              this.defC.find(p => p.id === 'Q').y -
              this.length.QR +
              this.props.state.length.QR
          },
          {
            id: 'R',
            x: this.defC.find(p => p.id === 'R').x,
            y: this.defC.find(p => p.id === 'R').y
          },
          {
            id: 'S',
            x: this.defC.find(p => p.id === 'S').x,
            y:
              this.defC.find(p => p.id === 'S').y -
              this.length.ST +
              this.props.state.length.ST
          },
          {
            id: 'T',
            x: this.defC.find(p => p.id === 'T').x,
            y: this.defC.find(p => p.id === 'T').y
          },
          {
            id: 'U',
            x: this.defC.find(p => p.id === 'U').x,
            y:
              this.defC.find(p => p.id === 'U').y -
              this.length.UV +
              this.props.state.length.UV
          },
          {
            id: 'V',
            x: this.defC.find(p => p.id === 'V').x,
            y: this.defC.find(p => p.id === 'V').y
          },
          {
            id: 'W',
            x:
              this.defC.find(p => p.id === 'W').x -
              this.length.VW +
              this.props.state.length.VW,
            y:
              this.defC.find(p => p.id === 'W').y -
              this.length.WL +
              this.props.state.length.WL
          },
          {
            id: 'L',
            x: this.defC.find(p => p.id === 'L').x,
            y: this.defC.find(p => p.id === 'L').y
          },
          {
            id: 'I',
            x: this.defC.find(p => p.id === 'I').x,
            y:
              this.defC.find(p => p.id === 'I').y -
              this.length.IJ +
              this.props.state.length.IJ
          },
          {
            id: 'J',
            x: this.defC.find(p => p.id === 'J').x,
            y: this.defC.find(p => p.id === 'J').y
          },
          {
            id: 'M',
            x:
              this.defC.find(p => p.id === 'M').x -
              this.length.JM +
              this.props.state.length.JM,
            y: this.defC.find(p => p.id === 'M').y
          },
          {
            id: 'N',
            x:
              this.defC.find(p => p.id === 'N').x -
              this.length.NI +
              this.props.state.length.NI,
            y:
              this.defC.find(p => p.id === 'N').y -
              this.length.MN +
              this.props.state.length.MN
          },
          {
            id: 'Z',
            x: this.defC.find(p => p.id === 'Z').x,
            y: this.defC.find(p => p.id === 'Z').y
          },
          {
            id: 'Y',
            x: this.defC.find(p => p.id === 'Y').x,
            y: this.defC.find(p => p.id === 'Y').y
          },
          {
            id: 'Y1',
            x: this.defC.find(p => p.id === 'Y1').x,
            y: this.defC.find(p => p.id === 'Y1').y
          },
          {
            id: 'Y2',
            x: this.defC.find(p => p.id === 'Y2').x,
            y: this.defC.find(p => p.id === 'Y2').y
          }
        ]
      } else if (!!id && id === 'length') {
        this.setState({
          length: { side: Number(value) }
        })
        this.props.state.length[side] = Number(value)
      } else if (!!id && id === 'dot') {
        this.setState({
          side: Number(value)
        })
        this.props.state[side] = Number(value)
      } else if (!!id && id === 'deg') {
        this.calculate = true
        this.setState({
          id: this.props.state.deg
        })
        this.props.state[id] = this.props.state.deg
        // this.rotate();
        this.transformMatrix = this.setRotationMatrix()
      } else if (className === 'affine' || id === 'setAffine') {
        this.setState({
          affine: { side: Number(value) }
        })
        this.props.state.affine[side] = Number(value)
        if (id === 'setAffine') {
          this.setAxis = true
          this.calculate = true
          this.props.state.setAffine = true
          this.transformMatrix = this.setAffineMatrix()
          this.props.state.coordinates = this.defaultCoordinates
        }
      } else if (id === 'setProjective') {
        this.setState({
          projective: { side: Number(value) }
        })
        this.props.state.projective[side] = Number(value)
        if (id === 'setProjective') {
          this.setAxis = true
          this.calculate = true
          this.props.state.setProjective = true
          this.transformMatrix = this.setProjectiveMatrix()
          this.props.state.coordinates = this.defaultCoordinates
        }
      } else if (side === 'dotY' || side === 'dotX') {
        this.setState({
          side: Number(value)
        })
        this.props.state[side] = Number(value)
      } else {
        this.setState({
          side: Number(value)
        })
        this.props.state[side] = Number(value)
      }
    }
  }

  setScaleMatrix() {
    const S = this.props.state.step / 10

    return [[S, 0, 0], [0, S, 0], [0, 0, 1]]
  }

  setRotationMatrix() {
    const angle = -((Number(this.props.state.deg) * Math.PI) / 180)
    const dotX = Number(this.props.state.dotX) * (this.props.state.step / 10)
    const dotY = Number(this.props.state.dotY) * (this.props.state.step / 10)

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
      const X = p.x
      const Y = p.y

      this.newPos[0] =
        Math.cos(angle) * (X - dotX) - Math.sin(angle) * (Y - dotY) + dotX
      this.newPos[1] =
        Math.sin(angle) * (X - dotX) + Math.cos(angle) * (Y - dotY) + dotY

      return { id: p.id, x: this.newPos[0], y: this.newPos[1] }
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

  setProjectiveMatrix() {
    const Xx = this.props.state.projective.Xx
    const Xy = this.props.state.projective.Xy
    const wX = this.props.state.projective.wX
    const Yx = this.props.state.projective.Yx
    const Yy = this.props.state.projective.Yy
    const wY = this.props.state.projective.wY
    const Ox = this.props.state.projective.Ox
    const Oy = this.props.state.projective.Oy
    const wO = this.props.state.projective.wO

    return [
      [Xx * wX, Xy * wX, wX],
      [Yx * wY, Yy * wY, wY],
      [Ox * wO, Oy * wO, wO]
    ]
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
    if (!!this.transformMatrix.length && this.calculate) {
      for (let key in this.props.state.coordinates) {
        if (this.setAxis) {
          this.coordinates[key] = this.props.state.coordinates[key]
        } else {
          if (key !== '25' && key !== '26' && key !== '27') {
            this.coordinates[key] = this.props.state.coordinates[key]
          }
        }
      }

      this.res = this.coordinates.map(p => {
        const X = p.x - 10
        const Y = p.y - 10

        const point = [X, Y, 1]

        this.matrixMultiplication(point, this.transformMatrix)
        
        return { id: p.id, x: (this.props.state.setProjective) ? (this.newPos[0] / 100) + 10 : this.newPos[0] + 10, y: (this.props.state.setProjective) ? (this.newPos[1] / 100) + 10 : this.newPos[1] + 10 }
      })
      this.props.state.coordinates = this.res
      if (this.setAxis === false) {
        this.props.state.coordinates.push(
          { id: 'Y', x: 10, y: 10 },
          { id: 'Y1', x: 10, y: 480 },
          { id: 'Y2', x: 610, y: 10 }
        )
      }
    }
  
    return (
      <Container>
        <Grid state={this.props.state} />
        <Form updateData={this.updateData} state={this.props.state} />
      </Container>
    )
  }
}

export default Transformation
