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
                            disabled: "disabled"
                            
                        },
                        {
                            label: "Semestre",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "1er semestre",
                            disabled: "disabled"
                        },
                        {
                          label: "Prioridad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3.7",
                          disabled: "disabled"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-3","col-md-3"]}
                      properties={[
                        
                        {
                            label: "Cantidad de asignaturas reportadas",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "2",
                            //disabled: "disabled"
                          },
                        {
                          label: "Tipo de causal",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1",
                          disabled: "disabled"
                        },
                        
                        {
                            label: "Reiteraciones de la causal",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "1",
                            disabled: "disabled"
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
                          disabled: "disabled"
                        },
                        {
                          label: "Fecha",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "19/06/2020",
                          disabled: "disabled"
                        },
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control"
                            rows="10" cols='80'  /> 
                            
                      </label>   
                    </form>
                        <br />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Actualizar registro
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