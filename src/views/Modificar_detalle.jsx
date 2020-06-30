import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios";

class Modificar_detalle extends Component {
  state = {
    alumno: [],
    date: "",
    nombre: "",
    correo: "",
    año_nacimiento: "",
    año_ingreso: "",
    semestre_ingreso: "",
    telefono: "",
    carrera_origen: "",
    estado_actual: "",
    copia_registro: null,
  };

  
  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const urls = currenturl.slice(31,largo)
    const alumnoRUT = this.props.match.params.alumnoRUT;
    

    axios.get(`http://localhost:8000/alumno/${urls}`).then(res => {
      this.setState({
        alumno: res.data,
        date: new Date(res.data.fecha_registro).toISOString().split('T')[0],
        nombre: res.data.nombre,
        correo: res.data.correo,
        año_nacimiento: res.data.año_nacimiento,
        año_ingreso: res.data.año_ingreso,
        semestre_ingreso: res.data.semestre_ingreso,
        telefono: res.data.telefono,
        carrera_origen: res.data.carrera_origen,
        estado_actual: res.data.estado_actual,
        copia_registro: res.data.copia_registro
        //rut: res.data.rut,
      });

    });
  }

  onCorreoChange(event){
    this.setState({
      correo: event.target.value
    });
  }
  onNombreChange(event){
    this.setState({
      nombre: event.target.value
    });
  }
  onAño_nacimientoChange(event){
    this.setState({
      año_nacimiento: event.target.value
    });
  }
  onAño_ingresoChange(event){
    this.setState({
      año_ingreso: event.target.value
    });
  }
  onSemestre_ingresoChange(event){
    this.setState({
      semestre_ingreso: event.target.value
    });
  }
  onTelefonoChange(event){
    this.setState({
      telefono: event.target.value
    });
  }
  onCarrera_origenChange(event){
    this.setState({
      carrera_origen: event.target.value
    });
  }
  onEstado_actualChange(event){
    this.setState({
      estado_actual: event.target.value
    });
  }
  onFileChange(event){
    this.setState({
      copia_registro: event.target.files[0]
    });
  }
  onSubmit(event){
    var formData = new FormData();
    formData.append('rut', this.state.alumno.rut);
    formData.append('nombre', this.state.nombre);
    formData.append('correo', this.state.correo);
    formData.append('año_nacimiento', this.state.año_nacimiento);
    formData.append('año_ingreso', this.state.año_ingreso);
    formData.append('semestre_ingreso', this.state.semestre_ingreso);
    formData.append('telefono', this.state.telefono);
    formData.append('carrera_origen', this.state.carrera_origen);
    formData.append('estado_actual', this.state.estado_actual);
    formData.append('coordinador', localStorage.getItem('userID'));
    formData.append('copia_registro', this.state.copia_registro);
    axios.put(`http://localhost:8000/alumno/${this.state.alumno.rut}/`, formData).then(data =>{
      this.props.history.goBack()                                                          
    });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Modificar detalle alumno"
                content={
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-5", "col-md-7"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1234567898",
                          value: `${this.state.alumno.rut}`,
                          readonly: "readonly"
                          
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.correo,
                          defaultValue: this.state.alumno.correo,
                          onChange: this.onCorreoChange.bind(this),
                          minlength:"15",
                          maxlength:"50",
                          pattern: "[a-zA-z0-9.]+@mail.udp.cl",
                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-8", "col-md-4"]}
                      properties={[
                        {
                          label: "Nombre y Apellido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.nombre,
                          defaultValue: this.state.alumno.nombre,
                          onChange: this.onNombreChange.bind(this),
                          minlength:"3",
                          maxlength:"50",
                          pattern: "[a-zA-Z]+",
                          minlength:"4",
                          maxlength:"4", 
                          pattern: "[1][9][6-9][0-9]|[2][0-2][0-9][0-9]",
                          
                        },
                        {
                          label: "Año de Nacimiento",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.año_nacimiento,
                          defaultValue: this.state.alumno.año_nacimiento, 
                          minlength:"4",
                          maxlength:"4", 
                          pattern: "[1][9][6-9][0-9]|[2][0-2][0-9][0-9]",
                          value: `${this.state.alumno.año_nacimiento}`,
                          onChange: this.onAño_nacimientoChange.bind(this),              
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-3"]}
                      properties={[
                        
                        {
                          label: "Teléfono",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.telefono,
                          defaultValue: this.state.alumno.telefono,
                          onChange: this.onTelefonoChange.bind(this),
                          minlength:"11",
                          maxlength:"11", 
                          pattern: "56[0-9]{9}",
                          
                        },
                        {
                          label: "Año de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.año_ingreso,
                          defaultValue: this.state.alumno.año_ingreso,
                          onChange: this.onAño_ingresoChange.bind(this),
                          minlength:"4",
                          maxlength:"4", 
                          pattern: "[1][9][6-9][0-9]|[2][0-2][0-9][0-9]",
                          
                        },
                        {
                          label: "Semestre de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.semestre_ingreso,
                          defaultValue: this.state.alumno.semestre_ingreso,
                          onChange: this.onSemestre_ingresoChange.bind(this),
                          minlength:"1",
                          maxlength:"1", 
                          pattern: "[1|2]",
                          
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-7"]}
                      properties={[
                        
                        {
                          label: "Universidad o carrera de origen (si corresponde)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.carrera_origen,
                          defaultValue: this.state.alumno.carrera_origen,
                          onChange: this.onCarrera_origenChange.bind(this),
                          minlength:"11",
                          maxlength:"30",
                          pattern: "[a-zA-Z,']+",
                          
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Fecha del registro",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "07/07/2020",
                          value: this.state.date,
                          readonly:"readonly"
                          
                        },
                        {
                          label: "Estado actual",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.alumno.estado_actual,
                          defaultValue: this.state.alumno.estado_actual,
                          onChange: this.onEstado_actualChange.bind(this),
                          minlength:"9",
                          maxlength:"20", 
                          pattern:"[En] [cC][aA][uU][sS][aA][lL]|[eE][Nn] [oO][bB][sS][eE][rR][vV][aA][cC][iI][oO][nN]|[rR][eE][cC][uU][pP][eE][rR][aA][Dd][oO]|[sS][uU][sS][pP][eE][nN][cC][iI][oO][Nn]|[eE][lL][iI][Mm][Aa][cC][iI][oO][nN]|[Rr][eE][nN][uU][Nn][cC][Ii][aA] [Cc][aA][Mm][Bb][iI][Oo] [dD][eE] [Cc][aA][Rr][rR][eE][rR][aA]",
                        },
                      ]}
                    />
                    <form>
                      <input type="file" onChange={this.onFileChange.bind(this)} /> 
                    </form>
                    <Button bsStyle="info" pullRight fill onClick={this.onSubmit.bind(this)}>
                      Actualizar perfil
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

export default Modificar_detalle;
  
