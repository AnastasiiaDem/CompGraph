import React from 'react'
import Line from './line'
import { Vector } from 'linear-algebra/vector'
import { THEME as theme } from '../constants/theme'

class Canvas extends React.Component {
  step = 10
  radius = 15
  deg = 0
  coordinates = [
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
  update = false
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

  render() {
    this.step = 10
    this.radius =
      Number(this.props.state.radius) * (Number(this.props.state.step) / 10)
    if (
      JSON.stringify(this.length) !== JSON.stringify(this.props.state.length)
    ) {
      this.update = true
    }

    if (this.props.state.resetEuclid || this.props.state.resetAffine) {
      this.update = true
      for (let key in this.props.state.length) {
        this.length[key] = this.props.state.length[key]
      }
    }

    if (this.update) {
      this.coordinates = [
        {
          id: 'A',
          x: this.props.state.coordinates.find(p => p.id === 'A').x,
          y: this.props.state.coordinates.find(p => p.id === 'A').y
        },
        {
          id: 'X',
          x:
            this.props.state.coordinates.find(p => p.id === 'X').x -
            this.length.XA +
            this.props.state.length.XA,
          y:
            this.props.state.coordinates.find(p => p.id === 'X').y -
            this.length.KX +
            this.props.state.length.KX
        },
        {
          id: 'K',
          x: this.props.state.coordinates.find(p => p.id === 'K').x,
          y: this.props.state.coordinates.find(p => p.id === 'K').y
        },
        {
          id: 'B',
          x: this.props.state.coordinates.find(p => p.id === 'B').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'B').y -
            this.length.AB +
            this.props.state.length.AB
        },
        {
          id: 'C',
          x: this.props.state.coordinates.find(p => p.id === 'C').x,
          y: this.props.state.coordinates.find(p => p.id === 'C').y
        },
        {
          id: 'D',
          x: this.props.state.coordinates.find(p => p.id === 'D').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'D').y -
            this.length.CD +
            this.props.state.length.CD
        },
        {
          id: 'E',
          x: this.props.state.coordinates.find(p => p.id === 'E').x,
          y: this.props.state.coordinates.find(p => p.id === 'E').y
        },
        {
          id: 'F',
          x: this.props.state.coordinates.find(p => p.id === 'F').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'F').y -
            this.length.EF +
            this.props.state.length.EF
        },
        {
          id: 'G',
          x:
            this.props.state.coordinates.find(p => p.id === 'G').x -
            this.length.FG +
            this.props.state.length.FG,
          y:
            this.props.state.coordinates.find(p => p.id === 'G').y -
            this.length.GH +
            this.props.state.length.GH
        },
        {
          id: 'H',
          x: this.props.state.coordinates.find(p => p.id === 'H').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'H').y -
            this.length.IJ +
            this.props.state.length.IJ
        },
        {
          id: 'O',
          x: this.props.state.coordinates.find(p => p.id === 'O').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'O').y -
            this.length.MN +
            this.props.state.length.MN
        },
        {
          id: 'P',
          x: this.props.state.coordinates.find(p => p.id === 'P').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'P').y -
            this.length.OP +
            this.props.state.length.OP
        },
        {
          id: 'Q',
          x:
            this.props.state.coordinates.find(p => p.id === 'Q').x -
            this.length.PQ +
            this.props.state.length.PQ,
          y:
            this.props.state.coordinates.find(p => p.id === 'Q').y -
            this.length.QR +
            this.props.state.length.QR
        },
        {
          id: 'R',
          x: this.props.state.coordinates.find(p => p.id === 'R').x,
          y: this.props.state.coordinates.find(p => p.id === 'R').y
        },
        {
          id: 'S',
          x: this.props.state.coordinates.find(p => p.id === 'S').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'S').y -
            this.length.ST +
            this.props.state.length.ST
        },
        {
          id: 'T',
          x: this.props.state.coordinates.find(p => p.id === 'T').x,
          y: this.props.state.coordinates.find(p => p.id === 'T').y
        },
        {
          id: 'U',
          x: this.props.state.coordinates.find(p => p.id === 'U').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'U').y -
            this.length.UV +
            this.props.state.length.UV
        },
        {
          id: 'V',
          x: this.props.state.coordinates.find(p => p.id === 'V').x,
          y: this.props.state.coordinates.find(p => p.id === 'V').y
        },
        {
          id: 'W',
          x:
            this.props.state.coordinates.find(p => p.id === 'W').x -
            this.length.VW +
            this.props.state.length.VW,
          y:
            this.props.state.coordinates.find(p => p.id === 'W').y -
            this.length.WL +
            this.props.state.length.WL
        },
        {
          id: 'L',
          x: this.props.state.coordinates.find(p => p.id === 'L').x,
          y: this.props.state.coordinates.find(p => p.id === 'L').y
        },
        {
          id: 'I',
          x: this.props.state.coordinates.find(p => p.id === 'I').x,
          y:
            this.props.state.coordinates.find(p => p.id === 'I').y -
            this.length.IJ +
            this.props.state.length.IJ
        },
        {
          id: 'J',
          x: this.props.state.coordinates.find(p => p.id === 'J').x,
          y: this.props.state.coordinates.find(p => p.id === 'J').y
        },
        {
          id: 'M',
          x:
            this.props.state.coordinates.find(p => p.id === 'M').x -
            this.length.JM +
            this.props.state.length.JM,
          y: this.props.state.coordinates.find(p => p.id === 'M').y
        },
        {
          id: 'N',
          x:
            this.props.state.coordinates.find(p => p.id === 'N').x -
            this.length.NI +
            this.props.state.length.NI,
          y:
            this.props.state.coordinates.find(p => p.id === 'N').y -
            this.length.MN +
            this.props.state.length.MN
        },
        {
          id: 'Z',
          x:
            this.props.state.coordinates.find(p => p.id === 'A').x +
            this.props.state.coordinates.find(p => p.id === 'Z').x -
            10 -
            this.props.state.step -
            this.props.state.affine.Ox,
          y:
            this.props.state.coordinates.find(p => p.id === 'A').y +
            this.props.state.coordinates.find(p => p.id === 'Z').y -
            10 -
            this.props.state.step -
            this.props.state.affine.Oy
        },
        {
          id: 'Y',
          x: this.props.state.coordinates.find(p => p.id === 'Y').x,
          y: this.props.state.coordinates.find(p => p.id === 'Y').y
        },
        {
          id: 'Y1',
          x: this.props.state.coordinates.find(p => p.id === 'Y1').x,
          y: this.props.state.coordinates.find(p => p.id === 'Y1').y
        },
        {
          id: 'Y2',
          x: this.props.state.coordinates.find(p => p.id === 'Y2').x,
          y: this.props.state.coordinates.find(p => p.id === 'Y2').y
        }
      ]
      this.props.state.coordinates = this.coordinates
      for (let key in this.props.state.length) {
        this.length[key] = this.props.state.length[key]
      }
      this.update = false
    }

    const Layout = props => {
      this.coordinates = this.props.state.coordinates
      return (
        <>
          <Line
            id="AB"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'A').x,
                this.coordinates.find(p => p.id === 'A').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'B').x,
                this.coordinates.find(p => p.id === 'B').y
              )
            }
          />
          <Line
            id="AX"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'A').x,
                this.coordinates.find(p => p.id === 'A').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'X').x,
                this.coordinates.find(p => p.id === 'X').y
              )
            }
          />
          <Line
            id="XK"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'X').x,
                this.coordinates.find(p => p.id === 'X').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'K').x,
                this.coordinates.find(p => p.id === 'K').y
              )
            }
          />
          <Line
            id="BC"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'B').x,
                this.coordinates.find(p => p.id === 'B').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'C').x,
                this.coordinates.find(p => p.id === 'C').y
              )
            }
          />
          <Line
            id="CD"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'C').x,
                this.coordinates.find(p => p.id === 'C').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'D').x,
                this.coordinates.find(p => p.id === 'D').y
              )
            }
          />
          <Line
            id="DE"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'D').x,
                this.coordinates.find(p => p.id === 'D').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'E').x,
                this.coordinates.find(p => p.id === 'E').y
              )
            }
          />
          <Line
            id="EF"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'E').x,
                this.coordinates.find(p => p.id === 'E').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'F').x,
                this.coordinates.find(p => p.id === 'F').y
              )
            }
          />
          <Line
            id="FG"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'F').x,
                this.coordinates.find(p => p.id === 'F').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'G').x,
                this.coordinates.find(p => p.id === 'G').y
              )
            }
          />
          <Line
            id="GH"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'G').x,
                this.coordinates.find(p => p.id === 'G').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'H').x,
                this.coordinates.find(p => p.id === 'H').y
              )
            }
          />
          <Line
            id="OP"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'O').x,
                this.coordinates.find(p => p.id === 'O').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'P').x,
                this.coordinates.find(p => p.id === 'P').y
              )
            }
          />
          <Line
            id="PQ"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'P').x,
                this.coordinates.find(p => p.id === 'P').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'Q').x,
                this.coordinates.find(p => p.id === 'Q').y
              )
            }
          />
          <Line
            id="QR"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'Q').x,
                this.coordinates.find(p => p.id === 'Q').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'R').x,
                this.coordinates.find(p => p.id === 'R').y
              )
            }
          />
          <Line
            id="RS"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'R').x,
                this.coordinates.find(p => p.id === 'R').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'S').x,
                this.coordinates.find(p => p.id === 'S').y
              )
            }
          />
          <Line
            id="ST"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'S').x,
                this.coordinates.find(p => p.id === 'S').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'T').x,
                this.coordinates.find(p => p.id === 'T').y
              )
            }
          />
          <Line
            id="TU"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'T').x,
                this.coordinates.find(p => p.id === 'T').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'U').x,
                this.coordinates.find(p => p.id === 'U').y
              )
            }
          />
          <Line
            id="UV"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'U').x,
                this.coordinates.find(p => p.id === 'U').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'V').x,
                this.coordinates.find(p => p.id === 'V').y
              )
            }
          />
          <Line
            id="VW"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'V').x,
                this.coordinates.find(p => p.id === 'V').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'W').x,
                this.coordinates.find(p => p.id === 'W').y
              )
            }
          />
          <Line
            id="WL"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'W').x,
                this.coordinates.find(p => p.id === 'W').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'L').x,
                this.coordinates.find(p => p.id === 'L').y
              )
            }
          />
          <Line
            id="IJ"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'I').x,
                this.coordinates.find(p => p.id === 'I').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'J').x,
                this.coordinates.find(p => p.id === 'J').y
              )
            }
          />
          <Line
            id="JM"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'J').x,
                this.coordinates.find(p => p.id === 'J').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'M').x,
                this.coordinates.find(p => p.id === 'M').y
              )
            }
          />
          <Line
            id="MN"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'M').x,
                this.coordinates.find(p => p.id === 'M').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'N').x,
                this.coordinates.find(p => p.id === 'N').y
              )
            }
          />
          <Line
            id="NI"
            layout
            start={
              new Vector(
                this.coordinates.find(p => p.id === 'N').x,
                this.coordinates.find(p => p.id === 'N').y
              )
            }
            end={
              new Vector(
                this.coordinates.find(p => p.id === 'I').x,
                this.coordinates.find(p => p.id === 'I').y
              )
            }
          />
          <circle
            cx={this.coordinates.find(p => p.id === 'Z').x}
            cy={this.coordinates.find(p => p.id === 'Z').y}
            r={this.radius}
            fill="none"
            strokeWidth="1.5px"
            stroke={'#09227a8c'}
          />
        </>
      )
    }

    return (
      <>
        <Layout />
      </>
    )
  }
}

export default Canvas
