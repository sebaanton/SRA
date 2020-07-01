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

class Modificar_usuario extends Component {
  state = {
    realizacion: "",
    nombre:"",
    email:"",
    jornada:"",
    rut:"",
    telefono:"",
    id:"",
    password:"",
    admin:"",
  }


  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    var tipo = currenturl.slice(25,29);
    var id2 = currenturl.slice(29,largo)
    //nombre1 = nombre1.split("%20")[0]+ " "+ nombre1.split("%20")[1];
    const reunionRUT = this.props.match.params.reunionRUT;
    //console.log(largo)
    console.log(id2)
    console.log(tipo)

    if(tipo=="admi"){
      var x = document.getElementById("Realizada2");
      tipo="administrador";
      axios.get(`http://localhost:8000/administrador/${id2}`).then(res =>{
        this.setState({
          nombre: res.data.nombre,
          email: res.data.email,
          rut: res.data.rut,
          telefono: res.data.telefono,
          realizacion: tipo,
          id:id2,
          password:res.data.password,
          admin:localStorage.getItem('userID'),
        }, function(){
          console.log(res.data)
        });
      
    })
    x.style.display= "block";
    }
    else if(tipo=="coor"){
      var x = document.getElementById("Realizada2");
      tipo="coordinador";
      axios.get(`http://localhost:8000/coordinador/${id2}`).then(res2 =>{
        this.setState({
          nombre: res2.data.nombre,
          email: res2.data.email,
          rut: res2.data.rut,
          telefono: res2.data.telefono,
          realizacion: tipo,
          id:id2,
          password:res2.data.password,
          admin:localStorage.getItem('userID'),
        }, function(){
          //console.log(this.state.rut)
        });
      
    })
    x.style.display= "block";

    }
    else if(tipo=="prof"){
      var y = document.getElementById("Realizada");
      tipo="profesor";
      axios.get(`http://localhost:8000/profesor/${id2}`).then(res3 =>{
        this.setState({
          nombre: res3.data.nombre,
          email: res3.data.email,
          jornada: res3.data.jornada,
          telefono: res3.data.telefono,
          realizacion: tipo,
          id:id2,
          password:res3.data.password,
          admin:localStorage.getItem('userID'),
        }, function(){
          //console.log(this.state.rut)
        });
      
    })
    y.style.display = "block";

    }

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
    event.preventDefault();
    console.log(this.state.realizacion)
    console.log(this.state.rut)
    console.log(this.state.nombre)
    console.log(this.state.email)
    console.log(this.state.telefono)
    console.log(this.state.jornada)
    console.log(this.state.id)
    console.log(this.state.password)
    console.log(this.state.admin)
    if(this.state.realizacion=="coordinador"){
      var formData_coordinador = new FormData();
      formData_coordinador.append('nombre', this.state.nombre);
      formData_coordinador.append('email', this.state.email);
      formData_coordinador.append('telefono', this.state.telefono);
      formData_coordinador.append('password', this.state.password);
      formData_coordinador.append('admin', this.state.admin);
      axios.put(`http://localhost:8000/coordinador/${this.state.id}/`, formData_coordinador).then(data => {///////////////////////
        alert("Se ha modificado correctamente")
      this.props.history.goBack()
    });

    }
    else if(this.state.realizacion=="administrador"){
      var formData_administrador = new FormData();
      formData_administrador.append('nombre', this.state.nombre);
      formData_administrador.append('email', this.state.email);
      formData_administrador.append('telefono', this.state.telefono);
      formData_administrador.append('password', this.state.password);
      axios.put(`http://localhost:8000/administrador/${this.state.id}/`, formData_administrador).then(data => {///////////////////////
        alert("Se ha modificado correctamente")
      this.props.history.goBack()
    });
  }
    else if(this.state.realizacion=="profesor"){
      var formData_profesor = new FormData();
      formData_profesor.append('jornada', this.state.jornada);
      formData_profesor.append('nombre', this.state.nombre);
      formData_profesor.append('email', this.state.email);
      formData_profesor.append('telefono', this.state.telefono);
      formData_profesor.append('password', this.state.password);
      formData_profesor.append('admin', this.state.admin);
      axios.put(`http://localhost:8000/profesor/${this.state.id}/`, formData_profesor).then(data => {///////////////////////
        alert("Se ha modificado correctamente")
      this.props.history.goBack()
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
                title="Modificar Usuario"
                content={
                  <form onSubmit={this.onSubmit.bind(this)}>
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
                          pattern: "[a-zA-Z ]+",
                          required:"required",
                          onChange: this.onNombreChange.bind(this),
                          defaultValue: this.state.nombre,
                          //defaultValue: "Mike"
                        },
                        {
                          label: "Telefono",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "87654321",
                          minlength:"9",
                          maxlength:"9",
                          pattern: "[0-9]{9}",
                          required:"required",
                          onChange: this.onTelefonoChange.bind(this),
                          defaultValue: this.state.telefono,
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
                          defaultValue: this.state.email,

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
                          //onChange: this.onRealizacionChange.bind(this),
                          defaultValue: this.state.realizacion,
                          readonly:"readonly",
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
                          onChange: this.onJornadaChange.bind(this),
                          defaultValue: this.state.jornada,
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
                          readonly:"readonly",
                          //defaultValue: "123456789"
                          onChange: this.onRutChange.bind(this),
                          defaultValue: this.state.rut,
                        },
                        
                      ]}
                    />
                    </div>
                
                    <Button bsStyle="info" pullRight fill type='submit'>
                      Modificar
                    </Button>
                    <div className="clearfix" />
                  </form>
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

export default Modificar_usuario;
