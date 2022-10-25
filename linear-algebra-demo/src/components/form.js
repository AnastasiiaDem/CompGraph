import React from 'react'

export default class Form extends React.Component {
  step

  constructor(props) {
    super(props)
    this.state = { step: 20 }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ step: event.target.value })
    this.state.step = event.target.value
    this.step = event.target.value
  }

  render() {
    return (
      <form
        style={{ display: 'flex', 'flex-direction': 'row' }}
        onChange={e => {
          this.props.updateData(this.step)
          e.preventDefault()
        }}
      >
        <label style={{ width: 60 }}>px/cm :</label>
        <input
          type="number"
          value={this.state.step}
          onChange={this.handleChange}
          style={{ width: 50 }}
          min={10}
        />
      </form>
    )
  }
}
