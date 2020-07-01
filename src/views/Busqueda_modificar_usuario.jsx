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
import { Grid, Row, Col, Alert, Table } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks3.jsx";
import { thArray3 } from "variables/Variables.jsx";
import Ver_detalle from "views/Ver_detalle";
import axios from "axios";

class Busqueda_modificar_usuario extends Component {
  state = {
    alumno:[],
    alumnoDisplay:[],
    administrador:[],
    administradorDisplay:[],
    profesorDisplay:[],
    profesor:[],
    coordinador:[],
    coordinadorDisplay:[],
    checked: false,
    parameter: "",
  };

  componentDidMount(){

      axios.get("http://localhost:8000/profesor/").then(res3 => {
        this.setState({
          profesor: res3.data,
          profesorDisplay: res3.data,
         
        });
      
      });
      
      axios.get("http://localhost:8000/coordinador/").then(res4 => {
        this.setState({
          coordinador: res4.data,
          coordinadorDisplay: res4.data
        });
      });


      axios.get("http://localhost:8000/administrador/").then(res5 => {
        this.setState({
          administrador: res5.data,
          administradorDisplay: res5.data
        });
      });
      }
      
  handleCheckedChange(event){
    this.setState( {
      value: event.target.value,
    });
  }
  handleChangeParameter(event){
    this.setState( {
      parameter: event.target.value,
    });
  }

  handleEliminarProfesor(event){
    //console.log(event.target.value)event.target.value
    axios.delete(`http://localhost:8000/profesor/${event.target.value.toString()}/`);   
    alert("Se ha eliminado correctamente") 
    //axios.delete(`http://localhost:8000/profesor/${id3}`, { headers: { "Authorization": localStorage.getItem('userID')} }); 
  }
  

  handleEliminarCoord(event){
    //console.log(event.target.value)event.target.value
    axios.delete(`http://localhost:8000/coordinador/${event.target.value.toString()}/`);   
    alert("Se ha eliminado correctamente") 
    //axios.delete(`http://localhost:8000/profesor/${id3}`, { headers: { "Authorization": localStorage.getItem('userID')} }); 
  }

  handleEliminarAdmin(event){
    //console.log(event.target.value)event.target.value
    axios.delete(`http://localhost:8000/administrador/${event.target.value.toString()}/`);  
    alert("Se ha eliminado correctamente") 
    //axios.delete(`http://localhost:8000/profesor/${id3}`, { headers: { "Authorization": localStorage.getItem('userID')} }); 
  }

  onSearch(event){
    //var alum = [];
    var admin= [];
    var profe=[];
    var coord=[];
    var i;
    this.setState({
      //alumnoDisplay: [],
      profesorDisplay:[],
      administradorDisplay:[],
      coordinadorDisplay:[],
    });
    if(this.state.value == "opt_1"){
      if(this.state.parameter.toLowerCase() == "profesor"){
        for(i=0; i< this.state.profesor.length;i++){
            profe.push(this.state.profesor[i]);
        }
      }
      else if(this.state.parameter.toLowerCase() == "coordinador"){
        for(i=0; i< this.state.coordinador.length;i++){
            coord.push(this.state.coordinador[i]);
        }
      }
      if(this.state.parameter.toLowerCase() == "administrador"){
        for(i=0; i< this.state.administrador.length;i++){
            admin.push(this.state.administrador[i]);
        }
      }
      this.setState( {
        //alumnoDisplay: alum,
        profesorDisplay:profe,
        administradorDisplay:admin,
        coordinadorDisplay:coord,
      });
    }
    if(this.state.value == "opt_2"){
      for(i=0; i< this.state.coordinador.length;i++){
        if(this.state.coordinador[i].nombre == this.state.parameter){
          coord.push(this.state.coordinador[i]);
        }
      }
      for(i=0; i< this.state.administrador.length;i++){
        if(this.state.administrador[i].nombre == this.state.parameter){
          admin.push(this.state.administrador[i]);
        }
      }
      for(i=0; i< this.state.profesor.length;i++){
        if(this.state.profesor[i].nombre == this.state.parameter){
          profe.push(this.state.profesor[i]);
        }
      }
      this.setState( {
        profesorDisplay:profe,
        administradorDisplay:admin,
        coordinadorDisplay:coord,
      });
    }
    if(this.state.value == "opt_3"){
      for(i=0; i< this.state.profesor.length;i++){
        if(this.state.profesor[i].email == this.state.parameter){
          profe.push(this.state.profesor[i]);
        }
      }
      for(i=0; i< this.state.coordinador.length;i++){
        if(this.state.coordinador[i].email == this.state.parameter){
          coord.push(this.state.coordinador[i]);
        }
      }
      for(i=0; i< this.state.administrador.length;i++){
        if(this.state.administrador[i].email == this.state.parameter){
          admin.push(this.state.administrador[i]);
        }
      }
      this.setState( {
        profesorDisplay:profe,
        administradorDisplay:admin,
        coordinadorDisplay:coord,
      });
    }
  }
  
  render() 
  
  
  {	
    return (

      <div className="content">
              <div className="card">
              <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
            
              <Card 
                content={
                  
                  <form>
                    <h3>Busqueda Usuario</h3>
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "Juanito Perez",
                          value: this.state.parameter,
                          onChange: this.handleChangeParameter.bind(this)
                        }
                      ]}
                    />

                   <Button bsStyle="info" pullRight fill onClick={this.onSearch.bind(this)}>
                      Buscar
                    </Button>   

                <h3>Atributos</h3>
                  <div className="table-full-width">
                    <table className="table">
                    <div>
                    <Col md={6} mdOffset={0.5}>
                      <input 
                        type="radio"
                        name="name"
                        value="opt_1"
                        checked={this.state.value === "opt_1"}
                        onChange={this.handleCheckedChange.bind(this)}

                      /> Tipo <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_2"
                        checked={this.state.value === "opt_2"}
                        onChange={this.handleCheckedChange.bind(this)}
                      /> Nombre y apellido <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_3"
                        checked={this.state.value === "opt_3"}
                        onChange={this.handleCheckedChange.bind(this)}
                      /> Correo <br />
                    </Col>
                    </div>
                
                    </table>
                  </div>
              
                    
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
        </div>
        <Grid fluid>

          <Row>
            <Col md={12}>
              <Card
                //title="Listado de alumnos"
                //ctTableFullWidth
                //ctTableResponsive
                content={
                
          
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray3.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.administradorDisplay.map((prop, key) => {
                        return (
                          
                          <tr>
                            <td>administrador</td>
                            <td key={key}>{prop.nombre}</td>
                            <td key={key}>{prop.email}</td>
                            <td key={key}>{prop.telefono}</td>
                            <td>
                              <p><a href={`Modificar_usuario/admi${prop.rut}`}>Modificar</a></p>
                              <Button bsStyle="info" pullLeft  value={prop.rut} onClick={this.handleEliminarAdmin.bind(this)}>
                                    Eliminar
                            </Button> 
                            </td>
                          </tr>
                        );
                      })}

                        {this.state.coordinadorDisplay.map((prop, key) => {
                        return (
                          
                          <tr>
                            <td>coordinador</td>
                            <td key={key}>{prop.nombre}</td>
                            <td key={key}>{prop.email}</td>
                            <td key={key}>{prop.telefono}</td>
                            <td>
                              <p><a href={`Modificar_usuario/coor${prop.rut}`}>Modificar</a></p>
                              <Button bsStyle="info" pullLeft  value={prop.rut} onClick={this.handleEliminarCoord.bind(this)}>
                                    Eliminar
                            </Button> 
                            </td>
                          </tr>
                        );
                      })}
                      {this.state.profesorDisplay.map((prop, key) => {
                        return (
                          
                          <tr>
                            <td>profesor</td>
                            <td key={key}>{prop.nombre}</td>
                            <td key={key}>{prop.email}</td>
                            <td key={key}>{prop.telefono}</td>
                            <td>
                              <p><a href={`Modificar_usuario/prof${prop.id}`}>Modificar</a></p>

                            <Button bsStyle="info" pullLeft  value={prop.id} onClick={this.handleEliminarProfesor.bind(this)}>
                                    Eliminar
                            </Button> 
                              
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Busqueda_modificar_usuario;
