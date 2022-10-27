import React from 'react'
import Grid from './grid'
import styled from 'styled-components'
import Canvas from './canva'

const Container = styled.div`
  width: 100%;
  height: 500px;
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
    this.step = this.props.step

    return (
      <Container>
        <Grid
          updateProject={project => this.setState({ project })}
          step={this.step}
        >
          <Canvas
            updateProject={project => this.setState({ project })}
            step={this.step}
          />
        </Grid>
      </Container>
    )
  }
}

export default CoordinatePlane
