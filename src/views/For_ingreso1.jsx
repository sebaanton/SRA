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

class For_ingreso1 extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Ingreso del alumno por causal"
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
                          defaultValue: "123456789",
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "usuario@mail.udp.cl",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Juan",                         
                        },
                        {
                          label: "Apellido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Perez", 
                        },
                        {
                          label: "Año de Nacimiento",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "05/05/1970", 
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3",  "col-md-3"]}
                      properties={[
                        
                        {
                          label: "Teléfono 1",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "+56997856443",
                        },
                        {
                          label: "Teléfono 2",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "0222879654",
                        },
                        {
                          label: "Año de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "2016",
                        },
                        {
                          label: "Semestre de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1er semestre",
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
                          placeholder: "UDP, industrias",
                        },
                        {
                          label: "Copia del registro ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "(link al registro)",
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Fecha del registro",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "07/07/2020",
                        },
                        {
                          label: "Estado actual",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Rehabilitado",
                          disabled: "disabled",
                          defaultValue: "En causal",
                        },

                        {
                          label: "Tipo de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Rehabilitado",
                          disabled: "disabled",
                          defaultValue: "Causal",
                        },
                      ]}

                      
                    />

                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Ramos que motivan la causal",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Calculo II,Algebra",

                        },
                        {
                          label: "Número de excepción",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1",

                        },
                      ]}
                    />
                   <form>
                      <label>
                        Condiciones impuestas por la carrera <br />
                        <textarea  className="form-control"
                            rows="10" cols='80'  /> 
                            
                      </label>   
                    </form>
                    <br />

                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control"
                            rows="5" cols='80'  /> 
                            
                      </label>   
                    </form>
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

export default For_ingreso1;
  