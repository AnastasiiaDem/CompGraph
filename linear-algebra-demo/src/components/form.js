import React from 'react'

export default class Form extends React.Component {
  step

  constructor(props) {
    super(props)
    this.state = { step: 10 }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ step: event.target.value })
    this.state.step = event.target.value
    this.step = event.target.value
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '300px',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <form
          onChange={e => {
            this.props.updateData(this.step)
            e.preventDefault()
          }}
        >
          <label style={{ width: 60 }}>px/cm:&nbsp;</label>
          <input
            type="number"
            value={this.state.step}
            onChange={this.handleChange}
            style={{ width: 50 }}
            min={10}
          />
        </form>
      </div>
    )
  }
}
