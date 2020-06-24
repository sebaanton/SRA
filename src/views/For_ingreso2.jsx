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
import avatar from "assets/img/faces/face-3.jpg";
const Nombre = "Juan"



class For_ingreso2 extends Component {
  



  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Ingreso de alumno autoconsulta/reporte profesor"
                content={
                  <form action="/send.php" >
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-3"]}
                      properties={[
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Juan",  
                          minlength:"3",
                          maxlength:"25",
                          pattern: "[a-zA-Z]+",
                          required:"required",
                          title:"Letras de la A a la Z (mayúsculas o minúsculas)"                      
                        },
                        {
                          label: "Apellido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Perez",
                          minlength:"3",
                          maxlength:"25",
                          pattern: "[a-zA-Z]+",
                          required:"required",
                          title:"Letras de la A a la Z (mayúsculas o minúsculas)" 
                        },
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          minlength:"9",
                          maxlength:"10",
                          pattern: "[^a-zA-Z][0-9]{7,8}+-[0-9|Kk]",
                          required:"required",
                          title:"Números enteros de 0 al 9 y la letra k en su ́ultima posición (mayúscula o minúscula)" 
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Calificación Estimada",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3.1",
                          minlength:"3",
                          maxlength:"3",
                          pattern: "[0-6][.][0-9]|[7][.][0]",
                          required:"required",
                          title:"Números decimales entre 1.0 y 7.0"
                        },
                        {
                          label: "Porcentaje de Asistencia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "10%",
                          minlength:"1",
                          maxlength:"3",
                          pattern: "[0-9]|[0-9][0-9]|[1][0][0]",
                          required:"required",
                          title:"Números entero entre 0 y 100" 
                        },
                        {
                          label: "Interés Percibido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Alto-Medio-Bajo",
                          minlength:"4",
                          maxlength:"5",
                          pattern: "[aA][lL][tT][oO]|[mM][eE][dD][iI][oO]|[bB][aA][jJ][oO]",
                          required:"required",
                          title:"Números decimales entre 1.0 y 7.0" 
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3","col-md-5"]}
                      properties={[
                        {
                          label: "Tipo de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Reportado",
                          defaultValue: "Reportado",
                          minlength:"9",
                          maxlength:"12",
                          pattern: "[aA][uU][tT][oO]|[Cc][Oo][nN][Ss][Uu][lL][tT][aA]|[Rr][eE][Pp][oO][rR][tT][aA][dD][oO]",
                          required:"required",
                          title:"Reportado o autoconsulta (en mayúscula o minúscula)"
                          //Value: tipo_ingreso,
                          //onChange: handleChangeTipo_ingreso
                        },

                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "usuario@mail.udp.cl",
                          defaultValue: "",
                          //Value: email,
                          minlength:"15",
                          maxlength:"50",
                          pattern: "[a-zA-z0-9.]+@mail.udp.cl",
                          required:"required",
                          title:"El correo debe ser el institucional",
                          //onChange: handleChangeEmail
                        }
                      ]}
                    />
                  <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control"
                            rows="5" cols='80'  /> 
                            
                      </label>   
                    </form>
                    <br />
                    <br />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Ingresar Datos
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

export default For_ingreso2;
  