import React from 'react'
import '../style.css'

export default class Form extends React.Component {
  dotX = 72.5
  dotY = 50

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const id = event.target.id
    const className = event.target.className
    let value = event.target.value
    debugger
    if (className === 'affine') {
      this.setState({
        affine: { id: Number(value) }
      })
      this.props.state.affine[id] = Number(value)
      this.props.updateData(event)
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
          style={{
            alignSelf: 'center',
            marginTop: 0,
            display: 'flex',
            flexDirection: 'row'
          }}
          onChange={e => {
            this.props.updateData(e, 'scale')
            e.preventDefault()
          }}
        >
          <p style={{ width: '30px' }}>px:</p>
          <input
            id="step"
            type="number"
            value={this.props.state.step}
            onChange={this.handleChange}
            min={5}
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
                type="number"
                value={this.props.state.length.AB}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>AX:</p>
              <input
                id="XA"
                type="number"
                value={this.props.state.length.XA}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>XK:</p>
              <input
                id="KX"
                type="number"
                value={this.props.state.length.KX}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>BC:</p>
              <input
                id="BC"
                type="number"
                value={this.props.state.length.BC}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>CD:</p>
              <input
                id="CD"
                type="number"
                value={this.props.state.length.CD}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>DE:</p>
              <input
                id="DE"
                type="number"
                value={this.props.state.length.DE}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>EF:</p>
              <input
                id="EF"
                type="number"
                value={this.props.state.length.EF}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>FG:</p>
              <input
                id="FG"
                type="number"
                value={this.props.state.length.FG}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>GH:</p>
              <input
                id="GH"
                type="number"
                value={this.props.state.length.GH}
                onChange={this.handleChange}
                min={5}
              />
            </div>

            <div className="form-input">
              <p>OP:</p>
              <input
                id="OP"
                type="number"
                value={this.props.state.length.OP}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>PQ:</p>
              <input
                id="PQ"
                type="number"
                value={this.props.state.length.PQ}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>QR:</p>
              <input
                id="QR"
                type="number"
                value={this.props.state.length.QR}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>RS:</p>
              <input
                id="RS"
                type="number"
                value={this.props.state.length.RS}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>ST:</p>
              <input
                id="ST"
                type="number"
                value={this.props.state.length.ST}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>TU:</p>
              <input
                id="TU"
                type="number"
                value={this.props.state.length.TU}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>UV:</p>
              <input
                id="UV"
                type="number"
                value={this.props.state.length.UV}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>VW:</p>
              <input
                id="VW"
                type="number"
                value={this.props.state.length.VW}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>WL:</p>
              <input
                id="WL"
                type="number"
                value={this.props.state.length.WL}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>IJ:</p>
              <input
                id="IJ"
                type="number"
                value={this.props.state.length.IJ}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>JM:</p>
              <input
                id="JM"
                type="number"
                value={this.props.state.length.JM}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>MN:</p>
              <input
                id="MN"
                type="number"
                value={this.props.state.length.MN}
                onChange={this.handleChange}
                min={5}
              />
            </div>
            <div className="form-input">
              <p>IN:</p>
              <input
                id="NI"
                type="number"
                value={this.props.state.length.NI}
                onChange={this.handleChange}
                min={5}
              />
            </div>
          </form>
        </div>

        <div className="block">
          <p style={{ width: 60, fontWeight: 'bold' }}>Radius</p>
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
                value={this.props.state.radius}
                onChange={this.handleChange}
                min={5}
              />
            </div>
          </form>
        </div>

        <div className="block">
          <p style={{ width: 60, fontWeight: 'bold' }}>Rotation</p>
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
                this.props.updateData(e, 'rotation')
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
              <button id="setRotation" className="submit" type="submit">
                apply
              </button>
            </form>
          </div>
        </div>

        <div className="block">
          <p style={{ fontWeight: 'bold' }}>Affine transformation</p>
          <form
            onSubmit={e => {
              this.props.updateData(e, 'setAffine')
              e.preventDefault()
            }}
            style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '200px' }}
          >
            <div className="form-input">
              <p>Xx:</p>
              <input
                id="Xx"
                type="number"
                value={this.props.state.affine.Xx}
                onChange={this.handleChange}
                className="affine"
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
              />
            </div>
            <button id="setAffine" className="submit" type="submit">
              apply
            </button>
          </form>
        </div>

        {/*<div className="block">
          <p style={{fontWeight: 'bold'}}>Projective transformation
            <button id='setProjective' onClick={this.handleChange} className="true">set</button>
            <button id='setProjective' onClick={this.handleChange} className="false">reset</button>
          </p>
          <form
            onChange={e => {
              this.props.updateData(e, 'projection')
              e.preventDefault()
            }}
            style={{display: 'flex', flexWrap: 'wrap', maxWidth: '300px'}}>
            <div className="form-input">
              <p>Xx:</p>
              <input
                id="Xxp"
                type="number"
                value={this.props.state.Xxp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>Xy:</p>
              <input
                id="Xyp"
                type="number"
                value={this.props.state.Xyp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>wX:</p>
              <input
                id="wX"
                type="number"
                value={this.props.state.wX}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>Yx:</p>
              <input
                id="Yxp"
                type="number"
                value={this.props.state.Yxp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>Yy:</p>
              <input
                id="Yyp"
                type="number"
                value={this.props.state.Yyp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>wY:</p>
              <input
                id="wY"
                type="number"
                value={this.props.state.wY}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>Ox:</p>
              <input
                id="Oxp"
                type="number"
                value={this.props.state.Oxp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>Oy:</p>
              <input
                id="Oyp"
                type="number"
                value={this.props.state.Oyp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <p>wO:</p>
              <input
                id="wO"
                type="number"
                value={this.props.state.wO}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>*/}
      </div>
    )
  }
}
