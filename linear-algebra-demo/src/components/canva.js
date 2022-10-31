import React from 'react'
import Line from './line'
import { Vector } from 'linear-algebra/vector'
import { THEME as theme } from '../constants/theme'

class Canvas extends React.Component {
  step = 10
  radius = 15
  coordinates = []

  render() {
    this.step = Number(this.props.state.step) + 30
    this.radius = Number(this.props.state.radius)

    if (!this.coordinates.length) {
      this.coordinates = [
        { id: 'A', x: this.step, y: this.step },
        {
          id: 'X',
          x: this.step + this.props.state.length.XA,
          y: this.step + this.props.state.length.KX - 10
        },
        { id: 'K', x: this.step + 45, y: this.step + 10 },
        { id: 'B', x: this.step, y: this.step + this.props.state.length.AB },
        { id: 'C', x: this.step + 22.5, y: this.step + 30 },
        {
          id: 'D',
          x: this.step + 22.5,
          y: this.step + 30 + this.props.state.length.CD
        },
        { id: 'E', x: this.step, y: this.step + 70 },
        {
          id: 'F',
          x: this.step,
          y: this.step + 70 + this.props.state.length.EF
        },
        {
          id: 'G',
          x: this.step + this.props.state.length.FG,
          y: this.step + 70 + this.props.state.length.GH
        },
        {
          id: 'H',
          x: this.step + 45,
          y: this.step + this.props.state.length.IJ + 10
        },
        {
          id: 'O',
          x: this.step + 80,
          y: this.step + this.props.state.length.MN + 10
        },
        {
          id: 'P',
          x: this.step + 80,
          y: this.step + 70 + this.props.state.length.OP
        },
        {
          id: 'Q',
          x: this.step + 80 + this.props.state.length.PQ,
          y: this.step + 70 + this.props.state.length.QR
        },
        { id: 'R', x: this.step + 125, y: this.step + 70 },
        {
          id: 'S',
          x: this.step + 102.5,
          y: this.step + 30 + this.props.state.length.ST
        },
        { id: 'T', x: this.step + 102.5, y: this.step + 30 },
        {
          id: 'U',
          x: this.step + 125,
          y: this.step + this.props.state.length.UV
        },
        { id: 'V', x: this.step + 125, y: this.step },
        {
          id: 'W',
          x: this.step + 125 - this.props.state.length.VW,
          y: this.step + this.props.state.length.WL - 10
        },
        { id: 'L', x: this.step + 80, y: this.step + 10 },
        {
          id: 'I',
          x: this.step + 35,
          y: this.step + 10 + this.props.state.length.IJ
        },
        { id: 'J', x: this.step + 35, y: this.step + 10 },
        {
          id: 'M',
          x: this.step + 35 + this.props.state.length.JM,
          y: this.step + 10
        },
        {
          id: 'N',
          x: this.step + 35 + this.props.state.length.NI,
          y: this.step + 10 + this.props.state.length.MN
        },
        {
          id: 'Z',
          x:
            this.props.state.setAffine === 'true'
              ? this.props.state.affine.Ox + 30
              : this.props.state.affine.Ox + 102.5,
          y:
            this.props.state.setAffine === 'true'
              ? this.props.state.affine.Oy + 30
              : this.props.state.affine.Oy + 80
        }
      ]
      this.props.state.coordinates = this.coordinates
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
            stroke={theme.color.green}
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
