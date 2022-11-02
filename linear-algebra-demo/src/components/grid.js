import React from 'react'
import styled from 'styled-components'
import { Vector } from 'linear-algebra/vector'
import Line from './line'
import { THEME as theme } from '../constants/theme'

const Container = styled.div`
  width: 610px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  margin: 20px 0 0 30px;
`

class Grid extends React.Component {
  deg = 0
  dotX = 72.5
  dotY = 50
  height = 480
  width = 610
  didMount = false
  step = 10
  radius = 15
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

  draw() {
    let canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d')
      console.log(ctx)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (this.didMount === false) {
        ctx.transform(1, 0, 0, -1, 0, canvas.height)
      }

      let i = 1
      // vertical
      for (
        let x = this.props.state.affine.Ox;
        x < this.width;
        x += this.props.state.step * this.props.state.affine.Xx
      ) {
        ctx.beginPath()
        ctx.moveTo(x + 10, 10)
        ctx.lineTo(
          this.props.state.coordinates.find(p => p.id === 'Y1').x +
            x -
            this.props.state.affine.Ox,
          this.props.state.coordinates.find(p => p.id === 'Y1').y
        )
        if (x === this.props.state.affine.Ox) {
          ctx.strokeStyle = 'rgba(57,57,66,0.61)'
          ctx.lineWidth = 2
          ctx.stroke()
        } else {
          ctx.strokeStyle = 'rgba(65,64,64,0.35)'
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
        i++
      }

      i = 1
      // horizontal
      for (
        let y = this.props.state.affine.Oy;
        y < this.height;
        y += this.props.state.step * this.props.state.affine.Yy
      ) {
        ctx.beginPath()
        ctx.moveTo(10, 10 + y)
        ctx.lineTo(
          this.props.state.coordinates.find(p => p.id === 'Y2').x +
            this.props.state.affine.Ox,
          this.props.state.coordinates.find(p => p.id === 'Y2').y +
            y -
            this.props.state.affine.Oy
        )
        if (y === this.props.state.affine.Oy) {
          ctx.strokeStyle = 'rgba(57,57,66,0.61)'
          ctx.lineWidth = 2
          ctx.stroke()
        } else {
          ctx.strokeStyle = 'rgba(65,64,64,0.35)'
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
        i++
      }

      ctx.beginPath()
      ctx.moveTo(
        this.coordinates.find(p => p.id === 'A').x,
        this.coordinates.find(p => p.id === 'A').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'B').x,
        this.coordinates.find(p => p.id === 'B').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'C').x,
        this.coordinates.find(p => p.id === 'C').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'D').x,
        this.coordinates.find(p => p.id === 'D').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'E').x,
        this.coordinates.find(p => p.id === 'E').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'F').x,
        this.coordinates.find(p => p.id === 'F').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'G').x,
        this.coordinates.find(p => p.id === 'G').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'H').x,
        this.coordinates.find(p => p.id === 'H').y
      )
      ctx.moveTo(
        this.coordinates.find(p => p.id === 'A').x,
        this.coordinates.find(p => p.id === 'A').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'X').x,
        this.coordinates.find(p => p.id === 'X').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'K').x,
        this.coordinates.find(p => p.id === 'K').y
      )
      ctx.moveTo(
        this.coordinates.find(p => p.id === 'O').x,
        this.coordinates.find(p => p.id === 'O').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'P').x,
        this.coordinates.find(p => p.id === 'P').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'Q').x,
        this.coordinates.find(p => p.id === 'Q').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'R').x,
        this.coordinates.find(p => p.id === 'R').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'S').x,
        this.coordinates.find(p => p.id === 'S').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'T').x,
        this.coordinates.find(p => p.id === 'T').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'U').x,
        this.coordinates.find(p => p.id === 'U').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'V').x,
        this.coordinates.find(p => p.id === 'V').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'W').x,
        this.coordinates.find(p => p.id === 'W').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'L').x,
        this.coordinates.find(p => p.id === 'L').y
      )
      ctx.moveTo(
        this.coordinates.find(p => p.id === 'I').x,
        this.coordinates.find(p => p.id === 'I').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'J').x,
        this.coordinates.find(p => p.id === 'J').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'M').x,
        this.coordinates.find(p => p.id === 'M').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'N').x,
        this.coordinates.find(p => p.id === 'N').y
      )
      ctx.lineTo(
        this.coordinates.find(p => p.id === 'I').x,
        this.coordinates.find(p => p.id === 'I').y
      )
      ctx.moveTo(
        this.coordinates.find(p => p.id === 'Z').x + this.radius,
        this.coordinates.find(p => p.id === 'Z').y
      )
      ctx.arc(
        this.coordinates.find(p => p.id === 'Z').x,
        this.coordinates.find(p => p.id === 'Z').y,
        this.radius,
        0,
        2 * Math.PI
      )
      ctx.strokeStyle = '#09227a8c'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.moveTo(
        this.dotX *
          ((this.props.state.step * this.props.state.affine.Xx) / 10) +
          10,
        this.dotY *
          ((this.props.state.step * this.props.state.affine.Yy) / 10) +
          10
      )
      ctx.arc(
        this.dotX *
          ((this.props.state.step * this.props.state.affine.Xx) / 10) +
          10,
        this.dotY *
          ((this.props.state.step * this.props.state.affine.Yy) / 10) +
          10,
        1,
        0,
        2 * Math.PI
      )
      ctx.strokeStyle = '#f1c40f'
      ctx.fillStyle = '#f1c40f'
      ctx.fill()
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(
        this.props.state.coordinates.find(p => p.id === 'Y').x,
        this.props.state.coordinates.find(p => p.id === 'Y').y
      )
      ctx.arc(
        this.props.state.coordinates.find(p => p.id === 'Y').x,
        this.props.state.coordinates.find(p => p.id === 'Y').y,
        1,
        0,
        2 * Math.PI
      )
      ctx.strokeStyle = 'green'
      ctx.fillStyle = 'green'
      ctx.fill()
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(
        this.props.state.coordinates.find(p => p.id === 'Y1').x,
        this.props.state.coordinates.find(p => p.id === 'Y1').y
      )
      ctx.arc(
        this.props.state.coordinates.find(p => p.id === 'Y1').x,
        this.props.state.coordinates.find(p => p.id === 'Y1').y,
        1,
        0,
        2 * Math.PI
      )
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'red'
      ctx.fill()
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(
        this.props.state.coordinates.find(p => p.id === 'Y2').x,
        this.props.state.coordinates.find(p => p.id === 'Y2').y
      )
      ctx.arc(
        this.props.state.coordinates.find(p => p.id === 'Y2').x,
        this.props.state.coordinates.find(p => p.id === 'Y2').y,
        1,
        0,
        2 * Math.PI
      )
      ctx.strokeStyle = 'purple'
      ctx.fillStyle = 'purple'
      ctx.fill()
      ctx.stroke()
    }
  }

  setPoints() {
    this.step = 10
    this.radius = Number(this.props.state.radius)
    // if (JSON.stringify(this.length) !== JSON.stringify(this.props.state.length)) {
    //   this.update = true;
    // }
    //
    // if (this.props.state.resetEuclid || this.props.state.resetAffine) {
    //   this.update = true;
    //   for (let key in this.props.state.length) {
    //     this.length[key] = this.props.state.length[key];
    //   }
    // }
    //
    // if (this.update) {

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
    //   this.update = false;
    // }
  }

  componentDidMount() {
    this.draw()
    this.didMount = true
  }

  render() {
    const { children } = this.props
    if (this.getStepLen() > 0) {
      this.stepLen = this.getStepLen()
    }
    this.deg = Number(this.props.state.deg)
    this.dotX = Number(this.props.state.dotX)
    this.dotY = Number(this.props.state.dotY)

    this.setPoints()

    const scale = `scale(${this.props.state.step / 10})`

    const steps = new Array(Math.floor(this.width / this.stepLen))
      .fill(0)
      .reduce((acc, _, i) => [...acc, this.stepLen * (i + 1)], [])

    // const XLines = () =>
    //   steps.map((step, i) => (
    //     <Line
    //       key={i}
    //       start={new Vector(step * this.props.state.affine.Xx, 0)}
    //       end={new Vector(step * this.props.state.affine.Xx, this.height)}
    //     />
    //   ))
    // const YLines = () =>
    //   steps.map((step, i) => (
    //     <Line
    //       key={i}
    //       start={new Vector(0, this.height - step * this.props.state.affine.Yy)}
    //       end={new Vector(this.width, this.height - step * this.props.state.affine.Yy)}
    //     />
    //   ))

    if (this.didMount) {
      this.draw()
    }

    return (
      <Container>
        <canvas id="canvas" width="610px" height="480px" />
      </Container>
      /*<Container>
        <svg
          width={this.width}
          height={this.height}
          style={{ position: 'relative' }}
        >
          <g>
            <Line
              main
              OY
              start={new Vector(this.props.state.affine.Ox * this.props.state.step * this.props.state.affine.Xx, this.height)}
              end={new Vector(this.props.state.affine.Ox * this.props.state.step * this.props.state.affine.Xx, 0)}
            />
            <Line
              main
              OX
              start={new Vector(0, this.height - this.props.state.affine.Oy * this.props.state.step * this.props.state.affine.Yy)}
              end={new Vector(this.width, this.height - this.props.state.affine.Oy * this.props.state.step * this.props.state.affine.Yy)}
            />
            <XLines />
            <YLines />
          </g>
        </svg>
        <svg
          width={this.width}
          height={this.height}
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
          height={this.height}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            transform: 'scaleY(-1)'
          }}
        >
          <g style={{ transform: scale }}>
            <circle
              cx={this.dotX}
              cy={this.dotY}
              r="2px"
              strokeWidth="0"
              fill={theme.color.yellow}
            />
          </g>
        </svg>
        
        <svg
          width={this.width}
          height={this.height}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            transform: 'scaleY(-1)'
          }}
        >
          <g style={{ transform: scale }}>
            <circle
              cx={this.props.state.coordinates.find(p => p.id === 'Y').x}
              cy={this.props.state.coordinates.find(p => p.id === 'Y').y}
              r="2px"
              strokeWidth="0"
              fill={theme.color.red}
            />
          </g>
        </svg>
        
        <svg
          width={this.width}
          height={this.height}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            transform: 'scaleY(-1)'
          }}
        >
          <g style={{ transform: scale }}>
            <circle
              cx={this.props.state.coordinates.find(p => p.id === 'Y1').x}
              cy={this.props.state.coordinates.find(p => p.id === 'Y1').y}
              r="2px"
              strokeWidth="0"
              fill={theme.color.green}
            />
          </g>
        </svg>
        
        <svg
          width={this.width}
          height={this.height}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            transform: 'scaleY(-1)'
          }}
        >
          <g style={{ transform: scale }}>
            <circle
              cx={this.props.state.coordinates.find(p => p.id === 'Y2').x}
              cy={this.props.state.coordinates.find(p => p.id === 'Y2').y}
              r="2px"
              strokeWidth="0"
              fill={theme.color.purple}
            />
          </g>
        </svg>
        
        <p className="mark" style={{bottom: '45px', left: '-10px'}}>0</p>
        <p className="mark arrow" style={{top: '-15.3px', left: '-6px'}}>▲</p>
        <p className="mark arrow" style={{bottom: '51px', right: '-11.6px', transform: "rotate(90deg)"}}>▲</p>
        <p className="mark" style={{top: '-3px', left: '-8px'}}>y</p>
        <p className="mark" style={{bottom: '49px', right: '3px'}}>x</p>
      </Container>*/
    )
  }

  getStepLen() {
    return this.props.state.step
  }
}

export default Grid
