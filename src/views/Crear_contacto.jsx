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
    reportes: [],
    rut: "",
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
    const urls = currenturl.slice(19,largo)
    const contactoRUT = this.props.match.params.contactoRUT;
    

    axios.get(`http://localhost:8000/reporte/`).then(res => {
      this.setState({
        reportes: res.data,
        //rut: res.data.rut,
      });
    });
  }

  onRutChange(event){
    this.setState({
      rut: event.target.value
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
    event.preventDefault();
    var i;
    var reporte;
    var hora;
    var interes;
    var autogestion;
    var existe = false;
    var fechaUTC;
    for(i=this.state.reportes.length-1;i>=0;i--){
      if(this.state.rut == this.state.reportes[i].alumno){
        reporte = this.state.reportes[i].id;
        break;
      }
    }
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
      for(i=0;i<data2.data.length;i++){
        if(data2.data[i].reporte == reporte){
          existe = true;
        }
      }
      if(existe == false){
        fechaUTC = this.state.fecha + "T04:00:00Z";
        axios.post(`http://localhost:8000/contacto/`, { reporte: reporte,
                                                        medio_contacto: this.state.medio_contacto,
                                                        nombre_contacto: this.state.nombre_contacto,
                                                        fecha: fechaUTC,
                                                        hora: hora,
                                                        interes: interes.toString(),
                                                        autogestion: autogestion.toString(),
                                                      }).then(data =>{
          alert("Contacto creado correctamente") 
          this.props.history.push(`Ver_flujo/${reporte}`)
        });                        
      } else {
        alert("Contacto ya realizado")
      }
    });                  
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Crear contacto"
                content={
                  <form onSubmit={this.onSubmit.bind(this)}>
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          minlength:"9",
                          maxlength:"10",
                          required:"required",
                          pattern: "[^a-zA-Z][0-9]{7,8}+-[0-9|Kk]",
                          onChange: this.onRutChange.bind(this)
                          //disabled: "disabled"
                        },
                        {
                          label: "Medio de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Correo",
                          maxlength:"30",
                          required:"required",
                          pattern: "[a-zA-Z ]+",
                          onChange: this.onMedio_contactoChange.bind(this)
                          //disabled: "disabled"
                        },
                        {
                          label: "Nombre de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1er contacto",
                          maxlength:"30",
                          required:"required",
                          pattern: "[a-zA-Z0-9 ]+",
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
                          onChange: this.onFechaChange.bind(this),
                          required:"required",
                          //placeholder: "usuario@mail.udp.cl",
                          //disabled: "disabled"
                        },
                        {
                          label: "Hora de contacto",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: "19:30",
                          minlength:"5",
                          maxlength:"5",
                          pattern: "[0-1][0-9][:][0-5][0-9]|[2][0-3][:][0-5][0-9]",
                          required:"required",
                          onChange: this.onHoraChange.bind(this)
                          //Disabled: "disabled"
                        },
                        {
                          label: "¿Manifiesta interés?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "si",
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][iI]|[nN][oO]",
                          required:"required",
                          onChange: this.onInteresChange.bind(this)
                          //disabled: "disabled"
                        },
                        {
                          label: "¿Autogestión?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "no",
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][iI]|[nN][oO]",
                          required:"required",
                          onChange: this.onAutogestionChange.bind(this)
                          //disabled: "disabled"
                        },
                        
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Guardar
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

export default Crear_contacto;
  
