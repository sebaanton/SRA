import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";



export class Tasks extends Component{
	
constructor(props){
	super(props);
	this.state={
		checked: false
	}
}


handleCheckedChange(event){
	this.setState( {
		value: event.target.value,
	} )
	
}

render() {
	return(

	<div>
	<Col md={6} mdOffset={0.5} >
		<input 
			type="radio"
			name="name"
			value="opt_1"
			checked={this.state.value === "opt_1"}
			onChange={this.handleCheckedChange.bind(this)}
		/> Apellido <br />
		<input 
			type="radio"
			name="name"
			value="opt_2"
			checked={this.state.value === "opt_2"}
			onChange={this.handleCheckedChange.bind(this)}
		/> Rut <br />
		<input 
			type="radio"
			name="name"
			value="opt_3"
			checked={this.state.value === "opt_3"}
			onChange={this.handleCheckedChange.bind(this)}
		/> Cantidad de asignaturas reprobadas <br />
		<input 
			type="radio"
			name="name"
			value="opt_4"
			checked={this.state.value === "opt_4"}
			onChange={this.handleCheckedChange.bind(this)}
		/> Periodo <br />
		<input 
			type="radio"
			name="name"
			value="opt_5"
			checked={this.state.value === "opt_5"}
			onChange={this.handleCheckedChange.bind(this)}
		/> Asignatura reportada <br />


	</Col>
	{localStorage.setItem('atributo',this.state.value)}
		</div>

		

		
)
}
}

export default Tasks;