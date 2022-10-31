import React from 'react'
import styled from 'styled-components'
import Form from './form'
import CoordinatePlane from './coordinate-plane'
import '../style.css'
import Transformation from './transformation'
import Euclid from './euclid'

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
      coordinates: [],
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
      setAffine: false,
      setProjective: false,
      affine: {
        Xx: 2,
        Xy: 2,
        Yx: 0,
        Yy: 3,
        Ox: 0,
        Oy: 0
      },
      projective: {
        Xx: 0,
        Xy: 0,
        wX: 0,
        Yx: 0,
        Yy: 0,
        wY: 0,
        Ox: 0,
        Oy: 0,
        wO: 0
      }
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
