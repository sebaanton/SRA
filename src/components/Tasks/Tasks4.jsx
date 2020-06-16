import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";

export class Tasks extends Component{
	
constructor(){
	super();

	this.state={
		checked: false
	}
}
handleCheckedChange(event){
	this.setState( {
		value: event.target.value
	} )
}

render() {
	return(
	//<p> status: {this.state.value} </p>
	<div>
	<Col md={10} mdOffset={0.5}>
		<input 
			type="radio"
			name="name"
			value="opt_1"
			checked={this.state.value === "opt_1"}
			onChange={this.handleCheckedChange.bind(this)}

		/> Ingreso por causal <br />
		<input 
			type="radio"
			name="name"
			value="opt_2"
			checked={this.state.value === "opt_2"}
			onChange={this.handleCheckedChange.bind(this)}
		/> Ingreso por reporte de profesor o alumno (autogestión) <br />
	</Col>
	</div>
	
)
}
}

export default Tasks;