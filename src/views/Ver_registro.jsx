import React, { Component } from "react";
import {
  Grid,
  Row,
  Col, Form} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


class Ver_registro extends Component {
  constructor(props) {
    super(props);
    this.state = {      value: 'Observaciones.'    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Registro RSA Nombre_alumno"
                content={
                  <form>

                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3"]}
                      properties={[
                        
                        {
                            label: "Año",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "2020",
                            defaultValue: "2020",
                            readonly: "readonly"
                            
                        },
                        {
                            label: "Semestre",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "1er semestre",
                            readonly: "readonly"
                        },
                        {
                          label: "Prioridad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3.7",
                          readonly: "readonly"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-2","col-md-4"]}
                      properties={[
                        
                        {
                            label: "Cantidad de asignaturas reportadas",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "2",
                            readonly: "readonly"
                          },
                        {
                          label: "Tipo de causal",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1",
                          readonly: "readonly"
                        },
                        
                        {
                            label: "Reiteraciones de la causal",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "1",
                            readonly: "readonly"
                          },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      properties={[
                        
                        {
                          label: "Tipo de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Reportado",
                          readonly: "readonly"
                        },
                        {
                          label: "Fecha",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "19/06/2020",
                          readonly: "readonly"
                        },
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control"
                            rows="10" cols='80' readonly /> 
                            
                      </label>   
                    </form>
                        <br />

                    <Button bsStyle="info" pullRight fill type="submit" href="Modificar_registro" >
                      Modificar registro
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

export default Ver_registro;