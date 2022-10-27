import React from 'react'
import styled from 'styled-components'
import Form from './form'
import CoordinatePlane from './coordinate-plane'

const Container = styled.div`
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  flex-direction: row;
  position: relative;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 10
    }
  }

  updateData = value => {
    this.setState({ step: value })
    this.state.step = value
  }

  render() {
    return (
      <Container>
        <CoordinatePlane step={this.state.step} />
        <Form updateData={this.updateData} />
      </Container>
    )
  }
}

export default Main
