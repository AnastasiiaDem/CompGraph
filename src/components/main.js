import React from 'react'
import '../style.css'
import Transformation from './transformation'

// const Container = styled.div`
//   width: 100%;
//   height: 570px;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding: 20px;
//   flex-direction: row;
//   position: relative;
// `

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coordinates: [
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
      ],
      step: 10,
      deg: 0,
      dotX: 72.5,
      dotY: 50,
      radius: 15,
      length: {
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
      },
      resetEuclid: false,
      affine: {
        Xx: 1,
        Xy: 0,
        Yx: 0,
        Yy: 1,
        Ox: 0,
        Oy: 0
      },
      setAffine: false,
      resetAffine: false,
      projective: {
        Xx: 800,
        Xy: 0,
        wX: 1,
        Yx: 0,
        Yy: 700,
        wY: 1,
        Ox: 0,
        Oy: 0,
        wO: 500
      },
      setProjective: false,
      resetProjective: false
    }
  }

  updateData = (event, id = '') => {
    const side = event.target.id
    const value = event.target.value

    if (!!id && id === 'coordinates') {
      this.setState({
        coordinates: event
      })
      this.state['coordinates'] = event
    } else {
      this.setState({
        side: Number(value)
      })
      this.state[side] = Number(value)
    }
  }

  render() {
    return (
      <>
        <Transformation state={this.state} />
      </>
    )
  }
}

export default Main
