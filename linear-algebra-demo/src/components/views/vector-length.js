// import React from 'react'
// import {withTheme} from 'styled-components'
// import {Vector} from 'linear-algebra/vector'
//
// import CoordinatePlane from '../coordinate-plane'
// import Arrow from '../arrow'
// import Form from "../form";
// import views from "./index";
// import {THEME as theme} from "../../constants/theme";
//
//
// class VectorLength extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       step: 20
//     }
//   }
//
//   updateData = value => {
//     this.setState({step: value})
//     this.state.step = value
//   }
//
//     one = new Vector(0, 1)
//     oneColor = theme.color.green
//
//     other = new Vector(2, 1)
//     otherColor = theme.color.red
//
//     renderGridContent = ({project}) => (<>
//       <Arrow project={project} vector={this.one} color={this.oneColor}/>
//       <Arrow project={project} vector={this.other} color={this.otherColor}/>
//     </>)
//
//   render() {
//     return (
//       <>
//         <Form updateData={this.updateData}/>
//         <CoordinatePlane renderGridContent={this.renderGridContent} step={this.state.step}/>
//       </>
//     )
//   }
// }
//
// export default withTheme(VectorLength)
