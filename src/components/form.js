import React from 'react'
import '../style.css'

export default class Form extends React.Component {
  dotX = 72.5
  dotY = 50
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
  defaultLength = {
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

  constructor(props) {
    super(props)

    this.state = {
      coordinates: this.defaultCoordinates,
      step: 10,
      deg: 0,
      dotX: 72.5,
      dotY: 50,
      radius: 15,
      length: this.defaultLength,
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
        Xx: 250,
        Xy: 0,
        wX: 1,
        Yx: 0,
        Yy: 250,
        wY: 1,
        Ox: 0,
        Oy: 0,
        wO: 500
      },
      setProjective: false,
      resetProjective: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const id = event.target.id
    const className = event.target.className
    let value = event.target.value
    if (className === 'affine') {
      this.setState({
        affine: { id: Number(value) }
      })
      this.props.state.affine[id] = Number(value)
    } else if (className === 'projective') {
      this.setState({
        projective: { id: Number(value) }
      })
      this.props.state.projective[id] = Number(value)
    } else if (id === 'resetEuclid') {
      this.setState({
        coordinates: this.defaultCoordinates,
        step: this.state.step,
        deg: this.state.deg,
        dotX: this.state.dotX,
        dotY: this.state.dotY,
        radius: this.state.radius,
        length: this.defaultLength,
        resetEuclid: true
      })
      this.props.state.coordinates = this.defaultCoordinates
      this.props.state.step = this.state.step
      this.props.state.deg = this.state.deg
      this.props.state.dotX = this.state.dotX
      this.props.state.dotY = this.state.dotY
      this.props.state.radius = this.state.radius
      this.props.state.length = this.defaultLength
      this.props.state.resetEuclid = true
      this.props.updateData(this.props.state, 'resetEuclid')
    } else if (id === 'resetAffine') {
      this.setState({
        length: this.defaultLength,
        coordinates: this.defaultCoordinates,
        affine: {
          Xx: 1,
          Xy: 0,
          Yx: 0,
          Yy: 1,
          Ox: 0,
          Oy: 0
        },
        setAffine: false,
        resetAffine: true
      })
      this.props.state.coordinates = this.defaultCoordinates
      this.props.state.affine = {
        Xx: 1,
        Xy: 0,
        Yx: 0,
        Yy: 1,
        Ox: 0,
        Oy: 0
      }
      this.props.state.length = this.defaultLength
      this.props.state.setAffine = false
      this.props.state.resetAffine = true
      this.props.updateData(this.props.state, 'resetAffine')
    } else if (id === 'resetProjective') {
      this.setState({
        length: this.defaultLength,
        coordinates: this.defaultCoordinates,
        projective: {
          Xx: 250,
          Xy: 0,
          wX: 1,
          Yx: 0,
          Yy: 250,
          wY: 1,
          Ox: 0,
          Oy: 0,
          wO: 500
        },
        setProjective: false,
        resetProjective: true
      })
      this.props.state.coordinates = this.defaultCoordinates
      this.props.state.projective = {
        Xx: 250,
        Xy: 0,
        wX: 1,
        Yx: 0,
        Yy: 250,
        wY: 1,
        Ox: 0,
        Oy: 0,
        wO: 500
      }
      this.props.state.length = this.defaultLength
      this.props.state.setProjective = false
      this.props.state.resetProjective = true
      this.props.updateData(this.props.state, 'resetProjective')
    } else if (className === 'length') {
      this.setState({
        length: { id: Number(value) }
      })
      this.props.state.length[id] = Number(value)
    } else if (id === 'dotY' || id === 'dotX') {
      this.setState({
        id: Number(value)
      })
      this.props.state[id] = Number(value)
    } else {
      this.setState({
        id: Number(value)
      })
      this.props.state[id] = Number(value)
    }
  }

  render() {
    this.dotX = this.props.state.dotX
    this.dotY = this.props.state.dotY
    this.setAffine = this.props.state.setAffine

    return (
      <div className="scrollbar">
        <form
          className="pxForm"
          onChange={e => {
            this.props.updateData(e, 'scale')
            e.preventDefault()
          }}
        >
          <p style={{ width: '30px' }}>px:</p>
          <input
            id="step"
            type="number"
            value={this.props.state.step || ''}
            onChange={this.handleChange}
            min={1}
          />
        </form>

        <div className="block">
          <p style={{ width: 60, fontWeight: 'bold' }}>Length</p>
          <form
            onChange={e => {
              this.props.updateData(e, 'length')
              e.preventDefault()
            }}
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <div className="form-input">
              <p>AB:</p>
              <input
                id="AB"
                className="length"
                type="number"
                value={this.props.state.length.AB || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>AX:</p>
              <input
                id="XA"
                type="number"
                className="length"
                value={this.props.state.length.XA || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>XK:</p>
              <input
                id="KX"
                type="number"
                className="length"
                value={this.props.state.length.KX || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>BC:</p>
              <input
                id="BC"
                type="number"
                className="length"
                value={this.props.state.length.BC || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>CD:</p>
              <input
                id="CD"
                type="number"
                className="length"
                value={this.props.state.length.CD || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>DE:</p>
              <input
                id="DE"
                type="number"
                className="length"
                value={this.props.state.length.DE || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>EF:</p>
              <input
                id="EF"
                type="number"
                className="length"
                value={this.props.state.length.EF || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>FG:</p>
              <input
                id="FG"
                type="number"
                className="length"
                value={this.props.state.length.FG || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>GH:</p>
              <input
                id="GH"
                type="number"
                className="length"
                value={this.props.state.length.GH || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>

            <div className="form-input">
              <p>OP:</p>
              <input
                id="OP"
                type="number"
                className="length"
                value={this.props.state.length.OP || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>PQ:</p>
              <input
                id="PQ"
                type="number"
                className="length"
                value={this.props.state.length.PQ || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>QR:</p>
              <input
                id="QR"
                type="number"
                className="length"
                value={this.props.state.length.QR || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>RS:</p>
              <input
                id="RS"
                type="number"
                className="length"
                value={this.props.state.length.RS || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>ST:</p>
              <input
                id="ST"
                type="number"
                className="length"
                value={this.props.state.length.ST || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>TU:</p>
              <input
                id="TU"
                type="number"
                className="length"
                value={this.props.state.length.TU || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>UV:</p>
              <input
                id="UV"
                type="number"
                className="length"
                value={this.props.state.length.UV || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>VW:</p>
              <input
                id="VW"
                type="number"
                className="length"
                value={this.props.state.length.VW || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>WL:</p>
              <input
                id="WL"
                type="number"
                className="length"
                value={this.props.state.length.WL || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>IJ:</p>
              <input
                id="IJ"
                type="number"
                className="length"
                value={this.props.state.length.IJ || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>JM:</p>
              <input
                id="JM"
                type="number"
                className="length"
                value={this.props.state.length.JM || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>MN:</p>
              <input
                id="MN"
                type="number"
                className="length"
                value={this.props.state.length.MN || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
            <div className="form-input">
              <p>IN:</p>
              <input
                id="NI"
                type="number"
                className="length"
                value={this.props.state.length.NI || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
          </form>

          <p style={{ width: 60, fontWeight: 'bold', marginTop: '20px' }}>
            Radius
          </p>
          <form
            onChange={e => {
              this.props.updateData(e, 'radius')
              e.preventDefault()
            }}
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <div className="form-input">
              <p style={{ width: '25%' }}>Z:</p>
              <input
                id="radius"
                type="number"
                value={this.props.state.radius || ''}
                onChange={this.handleChange}
                min={1}
              />
            </div>
          </form>

          <p style={{ width: 60, fontWeight: 'bold', marginTop: '20px' }}>
            Rotation
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            <form
              onChange={e => {
                this.props.updateData(e, 'dot')
                e.preventDefault()
              }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <div className="form-input">
                <p style={{ width: '25%' }}>x:</p>
                <input
                  id="dotX"
                  type="number"
                  value={this.dotX}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-input">
                <p style={{ width: '25%' }}>y:</p>
                <input
                  id="dotY"
                  type="number"
                  value={this.dotY}
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <form
              onSubmit={e => {
                this.props.updateData(e, 'deg')
                e.preventDefault()
              }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <div className="form-input" style={{ width: '110px' }}>
                <p style={{ width: '50%' }}>angle:</p>
                <input
                  id="deg"
                  type="number"
                  value={this.props.state.deg}
                  onChange={this.handleChange}
                />
              </div>
              <button id="setRotation" className="true" type="submit">
                apply
              </button>
            </form>
          </div>
          <button
            id="resetEuclid"
            onClick={this.handleChange}
            className="false"
          >
            reset Euclidean transformations
          </button>
        </div>

        <div className="block">
          <p style={{ fontWeight: 'bold', marginTop: '20px' }}>
            Affine transformation
          </p>
          <form
            onSubmit={e => {
              this.props.updateData(e, 'setAffine')
              e.preventDefault()
            }}
            style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '260px' }}
          >
            <div className="form-input">
              <p>Xx:</p>
              <input
                id="Xx"
                type="number"
                value={this.props.state.affine.Xx}
                onChange={this.handleChange}
                className="affine"
                min={1}
              />
            </div>
            <div className="form-input">
              <p>Xy:</p>
              <input
                id="Xy"
                type="number"
                value={this.props.state.affine.Xy}
                onChange={this.handleChange}
                className="affine"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Yx:</p>
              <input
                id="Yx"
                type="number"
                value={this.props.state.affine.Yx}
                onChange={this.handleChange}
                className="affine"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Yy:</p>
              <input
                id="Yy"
                type="number"
                value={this.props.state.affine.Yy}
                onChange={this.handleChange}
                className="affine"
                min={1}
              />
            </div>
            <div className="form-input">
              <p>Ox:</p>
              <input
                id="Ox"
                type="number"
                value={this.props.state.affine.Ox}
                onChange={this.handleChange}
                className="affine"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Oy:</p>
              <input
                id="Oy"
                type="number"
                value={this.props.state.affine.Oy}
                onChange={this.handleChange}
                className="affine"
                min={0}
              />
            </div>
            <button
              id="setAffine"
              className="true"
              type="submit"
              style={{ transform: 'translate(50%, -145%)' }}
            >
              apply
            </button>
          </form>
          <button
            id="resetAffine"
            onClick={this.handleChange}
            className="false"
          >
            reset Affine transformations
          </button>
        </div>

        <div className="block">
          <p style={{ fontWeight: 'bold' }}>Projective transformation</p>
          <form
            onSubmit={e => {
              this.props.updateData(e, 'setProjective')
              e.preventDefault()
            }}
            style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '355px' }}
          >
            <div className="form-input">
              <p>Xx:</p>
              <input
                id="Xx"
                type="number"
                value={this.props.state.projective.Xx}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Xy:</p>
              <input
                id="Xy"
                type="number"
                value={this.props.state.projective.Xy}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>wX:</p>
              <input
                id="wX"
                type="number"
                value={this.props.state.projective.wX}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Yx:</p>
              <input
                id="Yx"
                type="number"
                value={this.props.state.projective.Yx}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Yy:</p>
              <input
                id="Yy"
                type="number"
                value={this.props.state.projective.Yy}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>wY:</p>
              <input
                id="wY"
                type="number"
                value={this.props.state.projective.wY}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Ox:</p>
              <input
                id="Ox"
                type="number"
                value={this.props.state.projective.Ox}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>Oy:</p>
              <input
                id="Oy"
                type="number"
                value={this.props.state.projective.Oy}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <div className="form-input">
              <p>wO:</p>
              <input
                id="wO"
                type="number"
                value={this.props.state.projective.wO}
                onChange={this.handleChange}
                className="projective"
                min={0}
              />
            </div>
            <button
              id="setProjective"
              className="true"
              type="submit"
              style={{ transform: 'translate(50%, -145%)' }}
            >
              apply
            </button>
          </form>
          <button
            id="resetProjective"
            onClick={this.handleChange}
            className="false"
          >
            reset Projective transformations
          </button>
        </div>
      </div>
    )
  }
}
