import React from 'react'
import Grid from './grid'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
`

class CoordinatePlane extends React.Component {
  step = 20

  constructor(props) {
    super(props)
    this.state = {
      project: undefined
    }
  }

  render() {
    this.step = Number(this.props.step)
    const { project } = this.state
    const renderGridContent = undefined
    const Content = () => {
      if (project && renderGridContent) {
        return renderGridContent({ project })
      }
      return null
    }

    return (
      <Container>
        <Grid
          updateProject={project => this.setState({ project })}
          step={this.step}
        >
          <Content />
        </Grid>
      </Container>
    )
  }
}

export default CoordinatePlane
