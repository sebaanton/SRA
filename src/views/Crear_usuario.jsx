/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios";

class Crear_usuario extends Component {
  state = {
    realizacion: "",
    nombre:"",
    email:"",
    jornada:"",
    rut:"",
    telefono:"",
  }


  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const urls = currenturl.slice(19,largo)
    const reunionRUT = this.props.match.params.reunionRUT;
    
  }

  onNombreChange(event){
    this.setState({
      nombre: event.target.value,
    });
  }


  onEmailChange(event){
    this.setState({
      email: event.target.value
    });
  }

  onJornadaChange(event){
    this.setState({
      jornada: event.target.value
    });
  }

  onRutChange(event){
    this.setState({
      rut: event.target.value
    });
  }

  onTelefonoChange(event){
    this.setState({
      telefono: event.target.value
    });
  }

  onRealizacionChange(event){
    var y = document.getElementById("Realizada");
    var x = document.getElementById("Realizada2");

    if(event.target.value.toLowerCase() == "coordinador" || event.target.value.toLowerCase() == "administrador"){
      x.style.display= "block";
    }
    else if(event.target.value.toLowerCase() == "profesor" ){
      y.style.display = "block";
    }
     else {
      y.style.display = "none";
      x.style.display = "none";
    }
    this.setState({
      realizacion: event.target.value
    });
  }


  onSubmit(event){
    var password;
    password= this.state.nombre.split(" ")[0] + this.state.nombre.split(" ")[1];
    console.log(password)
    console.log(this.state.rut)
    console.log(this.state.nombre)
    console.log(this.state.telefono)
    console.log(localStorage.getItem('userID'))
    console.log(this.state.email)


    if(this.state.realizacion.toLowerCase() == "profesor"){
      axios.post(`http://localhost:8000/profesor/`, {nombre:this.state.nombre, telefono:this.state.telefono, jornada: this.state.jornada, admin:localStorage.getItem('userID'), email:this.state.email ,password: password}).then(respuesta=>{
      this.props.history.push("notifications")
      });
    } else if(this.state.realizacion.toLowerCase() == "administrador"){
      axios.post(`http://localhost:8000/administrador/`, { rut: this.state.rut, nombre:this.state.nombre, telefono: this.state.telefono, email: this.state.email,password: password}).then(respuesta=>{
        this.props.history.push("notifications")
        });
    } else if (this.state.realizacion.toLowerCase() == "coordinador"){
      axios.post(`http://localhost:8000/coordinador/`, { rut: this.state.rut, nombre: this.state.nombre, telefono: this.state.telefono, admin:localStorage.getItem('userID'), email:this.state.email, password:password}).then(respuesta=>{
        this.props.history.push("notifications")
        });
    }
    
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Crear Usuario"
                content={
                  <form>

                    <FormInputs
                      ncols={["col-md-6", "col-md-4"]}
                      properties={[
                        {
                          label: "Nombre y Apellido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nombre",
                          minlength:"3",
                          maxlength:"25",
                          pattern: "[a-zA-Z]+",
                          required:"required",
                          onChange: this.onNombreChange.bind(this),
                          //defaultValue: "Mike"
                        },
                        {
                          label: "Telefono",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "87654321",
                          minlength:"8",
                          maxlength:"8",
                          pattern: "[0-9]+",
                          required:"required",
                          onChange: this.onTelefonoChange.bind(this),
                        },
                      ]}
                    />
                                        <FormInputs
                      ncols={["col-md-6", "col-md-4"]}
                      properties={[
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          minlength:"15",
                          maxlength:"50",
                          pattern: "[a-zA-z0-9.]+@mail.udp.cl",
                          required:"required",
                          onChange: this.onEmailChange.bind(this),
                        },
                        {
                          label: "Tipo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          minlength:"8",
                          maxlength:"50",
                          pattern: "[Aa][dD][Mm][iI][Nn][iI][sS][tT][rR][aA][dD][oO][rR]|[Cc][oO][oO][rR][dD][Ii][nN][aA][Dd][Oo][rR]|[Pp][rR][oO][Ff][eE][sS][oO][rR]",
                          required:"required",
                          onChange: this.onRealizacionChange.bind(this),
                          //defaultValue: "123456789"
                        },
                        
                      ]}
                    />
                    <div id="Realizada" style={{display:"none"}}>
                    <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                        {
                          label: "Jornada",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cantidad de horas, ej: 6",
                          minlength:"1",
                          maxlength:"2",
                          pattern: "[0-9]+",
                          required:"required",
                          onChange: this.onJornadaChange.bind(this),
                          //defaultValue: "123456789"
                        },                        
                      ]}
                    />
                    </div>

                    <div id="Realizada2" style={{display:"none"}}>
                    <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "RUT",
                          minlength:"9",
                          maxlength:"10",
                          pattern: "[^a-zA-Z][0-9]{7,8}+-[0-9|Kk]",
                          required:"required",
                          //defaultValue: "123456789"
                          onChange: this.onRutChange.bind(this),
                        },
                        
                      ]}
                    />
                    </div>
                
                    <Button bsStyle="info" pullRight fill onClick={this.onSubmit.bind(this)}>
                      Crear
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Crear_usuario;
