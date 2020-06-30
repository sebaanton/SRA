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
import avatar from "assets/img/faces/face-3.jpg";

class Crear_contacto extends Component {
  state = {
    contacto: [],
    reporte: [],
    medio_contacto: "",
    nombre_contacto: "",
    fecha: "",
    hora: "",
    interes: "",
    autogestion: ""
  };

  
  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const contactoID = currenturl.slice(26,largo)
    const contactoRUT = this.props.match.params.contactoRUT;
    var autog = "no"
    var inter = "no"
    axios.get(`http://localhost:8000/contacto/${contactoID}`).then(res => {
      if(res.data.autogestion){
        autog = "si"
      }
      if(res.data.interes){
        inter = "si"
      }
      this.setState({
        contacto: res.data,
        medio_contacto: res.data.medio_contacto,
        nombre_contacto: res.data.nombre_contacto,
        fecha: new Date(res.data.fecha).toISOString().split('T')[0],
        hora: res.data.hora.toString().slice(0,2) + ":" + res.data.hora.toString().slice(2,4),
        interes: inter,
        autogestion: autog
        //rut: res.data.rut,
      });
      axios.get(`http://localhost:8000/reporte/${res.data.reporte}`).then(res => {
        this.setState({
          reporte: res.data,
          //rut: res.data.rut,
        });
      });
    });
  }

  onMedio_contactoChange(event){
    this.setState({
      medio_contacto: event.target.value
    });
  }

  onNombre_contactoChange(event){
    this.setState({
      nombre_contacto: event.target.value
    });
  }

  onFechaChange(event){
    this.setState({
      fecha: event.target.value
    });
  }

  onHoraChange(event){
    this.setState({
      hora: event.target.value
    });
  }

  onInteresChange(event){
    this.setState({
      interes: event.target.value
    });
  }

  onAutogestionChange(event){
    this.setState({
      autogestion: event.target.value
    });
  }

  onSubmit(event){
    var i;
    var hora;
    var interes;
    var autogestion;
    var fechaUTC;
    hora = (this.state.hora.split(":"))[0] + (this.state.hora.split(":"))[1];
    if(this.state.interes == "si"){
      interes = 1;
    } else {
      interes = 0;
    }
    if(this.state.autogestion == "si"){
      autogestion = 1;
    } else {
      autogestion = 0;
    }
    axios.get(`http://localhost:8000/contacto/`).then(data2 =>{
      fechaUTC = this.state.fecha + "T04:00:00Z";
      console.log(this.state.nombre_contacto)
      axios.put(`http://localhost:8000/contacto/${this.state.contacto.id}/`, {id: this.state.contacto.id,
                                                                              reporte: this.state.contacto.reporte,
                                                                              medio_contacto: this.state.medio_contacto,
                                                                              nombre_contacto: this.state.nombre_contacto,
                                                                              fecha: fechaUTC,
                                                                              hora: hora,
                                                                              interes: interes.toString(),
                                                                              autogestion: autogestion.toString(),
                                                                            }).then(data =>{
        this.props.history.goBack()  
      });                        
    });                  
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Modificar contacto"
                content={
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.reporte.alumno,
                          defaultValue: this.state.reporte.alumno,
                          readOnly: "readOnly"
                          //disabled: "disabled"
                        },
                        {
                          label: "Medio de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.contacto.medio_contacto,
                          defaultValue: this.state.contacto.medio_contacto,
                          onChange: this.onMedio_contactoChange.bind(this)
                          //disabled: "disabled"
                        },
                        {
                          label: "Nombre de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.contacto.nombre_contacto,
                          defaultValue: this.state.contacto.nombre_contacto,
                          onChange: this.onNombre_contactoChange.bind(this)
                          //disabled: "disabled"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-3",  "col-md-3", "col-md-2"]}
                      properties={[
                        {
                          label: "Fecha de contacto",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: this.state.fecha,
                          defaultValue: this.state.fecha,
                          onChange: this.onFechaChange.bind(this)
                          //placeholder: "usuario@mail.udp.cl",
                          //disabled: "disabled"
                        },
                        {
                          label: "Hora de contacto",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: this.state.hora,
                          defaultValue: this.state.hora,
                          onChange: this.onHoraChange.bind(this)
                          //Disabled: "disabled"
                        },
                        {
                          label: "¿Manifiesta interés?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.interes,
                          defaultValue: this.state.interes,
                          onChange: this.onInteresChange.bind(this)
                          //disabled: "disabled"
                        },
                        {
                          label: "¿Autogestión?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.autogestion,
                          defaultValue: this.state.autogestion,
                          onChange: this.onAutogestionChange.bind(this)
                          //disabled: "disabled"
                        },
                        
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill onClick={this.onSubmit.bind(this)}>
                      Guardar
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

export default Crear_contacto;