import React, { Component } from "react";
import {
  Grid,
  Row,
  Col, Form} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


class Modificar_registro extends Component {
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
                            minlength:"4",
                            maxlength:"4", 
                            pattern: "[1][9][6-9][0-9]|[2][0-2][0-9][0-9]",
                            //required:"required",
                            //disabled: "disabled"
                            
                        },
                        {
                            label: "Semestre",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "1er semestre",
                            minlength:"1",
                            maxlength:"1", 
                            pattern: "[1|2]",
                            //required:"required",
                            //disabled: "disabled"
                        },
                        {
                          label: "Prioridad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3.7",
                          defaultValue: "3.7",
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
                            minlength:"1",
                            maxlength:"2", 
                            pattern: "[0-9]+",
                            //disabled: "disabled"
                          },
                        {
                          label: "Tipo de causal",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1",
                          minlength:"1",
                          maxlength:"1", 
                          pattern: "[1|2|3]",
                          //disabled: "disabled"
                        },
                        
                        {
                            label: "Reiteraciones de la causal",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "1",
                            minlength:"1",
                            maxlength:"2", 
                            pattern: "[0-9]+",
                            //disabled: "disabled"
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
                          minlength:"9",
                          maxlength:"20", 
                          pattern:"[En] [cC][aA][uU][sS][aA][lL]|[eE][Nn] [oO][bB][sS][eE][rR][vV][aA][cC][iI][oO][nN]|[rR][eE][cC][uU][pP][eE][rR][aA][Dd][oO]|[sS][uU][sS][pP][eE][nN][cC][iI][oO][Nn]|[eE][lL][iI][Mm][Aa][cC][iI][oO][nN]|[Rr][eE][nN][uU][Nn][cC][Ii][aA] [Cc][aA][Mm][Bb][iI][Oo] [dD][eE] [Cc][aA][Rr][rR][eE][rR][aA]",
                          //disabled: "disabled"
                        },
                        {
                          label: "Fecha",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "19/06/2020",
                          readonly: "readonly"
                          //disabled: "disabled"
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

export default Modificar_registro;