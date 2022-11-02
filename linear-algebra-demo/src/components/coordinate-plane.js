import React from 'react'
import Grid from './grid'
import styled from 'styled-components'
import Canvas from './canva'

const Container = styled.div`
  width: 610px;
  height: 700px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  position: relative;
`

class CoordinatePlane extends React.Component {
  step = 10

  constructor(props) {
    super(props)
    this.state = {
      project: undefined
    }
  }

  render() {
    return (
      <Container>
        <Grid state={this.props.state}>
          <Canvas state={this.props.state} />
        </Grid>
      </Container>
    )
  }
}

export default CoordinatePlane
