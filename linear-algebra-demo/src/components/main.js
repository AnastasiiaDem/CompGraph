import React from 'react'
import styled from 'styled-components'
import Form from './form'
import GridExample from './coordinate-plane'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  flex-direction: row;
  position: relative;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 20
    }
  }

  updateData = value => {
    this.setState({ step: value })
    this.state.step = value
  }

  render() {
    return (
      <Container>
        <Form updateData={this.updateData} />
        <GridExample step={this.state.step} />
      </Container>
    )
  }
}

export default Main
