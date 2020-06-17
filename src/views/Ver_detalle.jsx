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

class Ver_detalle extends Component {
  state = {
    alumno: {},
    rut:[]
  };

  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const urls = currenturl.slice(19,largo)
    const alumnoRUT = this.props.match.params.alumnoRUT;
    

    axios.get(`http://127.0.0.1:8000/alumno/${urls}`).then(res => {
      this.setState({
        alumno: res.data,
        rut: res.data.rut
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
                title="Detalle del Alumno"
                content={
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-5", "col-md-7"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          defaultValue: `${this.state.rut}`,
                          disabled: "disabled"
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.correo}`,
                          disabled: "disabled"
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
                          placeholder: `${this.state.alumno.nombre}`,
                          disabled: "disabled"
                        },
                        {
                          label: "Año de Nacimiento",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.año_nacimiento}`, 
                          disabled: "disabled"
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-3"]}
                      properties={[
                        
                        {
                          label: "Teléfonos",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.telefono}`,
                          disabled: "disabled"
                        },
                        {
                          label: "Año de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.año_ingreso}`,
                          disabled: "disabled"
                        },
                        {
                          label: "Semestre de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.semestre_ingreso}`,
                          disabled: "disabled"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-7", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Universidad o carrera de origen (si corresponde)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.carrera_origen}`,
                          disabled: "disabled"
                        },
                        {
                          label: "Copia del registro ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.copia_registro}`,
                          disabled: "disabled"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Fecha del registro",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.fecha_registro}`,
                          disabled: "disabled"
                        },
                        {
                          label: "Estado actual",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: `${this.state.alumno.estado_actual}`,
                          disabled: "disabled"
                        },
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
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

export default Ver_detalle;
  
