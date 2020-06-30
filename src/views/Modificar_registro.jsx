import React, { Component } from "react";
import {
  Grid,
  Row,
  Col, Form} from "react-bootstrap";
import { SelectPicker } from 'rsuite';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios";
import { Redirect } from "react-router-dom";


class Modificar_registro extends Component {
  state = {
    reporte: [],
    fecha: "",
    alumno: [],
    cantidad: "",
    observacion: "",
    redirect: null
  };

  componentDidMount(){
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const id = currenturl.slice(32,largo)
    axios.get(`http://localhost:8000/reporte/${id}`).then(res2 => {
      this.setState({
        reporte: res2.data,
        fecha: res2.data.fecha.slice(0,10),
        cantidad: res2.data.asignaturas_reportadas,
        observacion: res2.data.observacion
      });
      axios.get(`http://localhost:8000/alumno/${res2.data.alumno}`).then(res3 => {
        this.setState({
          alumno: res3.data,
        });
      });
    });
  }

  handleChangeCantidad(event){
    this.setState( {
      cantidad: event.target.value,
    });
  }
  handleChangeObservacion(event){
    this.setState( {
      observacion: event.target.value,
    });
  }

  onSubmit(event){
    event.preventDefault();
    axios.put(`http://localhost:8000/reporte/${this.state.reporte.id}/`, {
                                                                          tipo_ingreso: this.state.reporte.tipo_ingreso,
                                                                          asignaturas_reportadas: this.state.cantidad,
                                                                          observacion: this.state.observacion,
                                                                          alumno: this.state.reporte.alumno
                                                                          }).then(data =>{
      this.props.history.goBack()                                                          
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title={`Modificar Registro RSA ${this.state.alumno.nombre}`}
                content={
                  <form onSubmit={this.onSubmit.bind(this)}>
                  <form>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3"]}
                      properties={[
                        
                        {
                            label: "Año",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: this.state.reporte.año,
                            defaultValue: this.state.reporte.año,
                            readonly: "readonly"
                            //minlength:"4",
                            //maxlength:"4", 
                            //pattern: "[1][9][6-9][0-9]|[2][0-2][0-9][0-9]",
                            //required:"required",
                            //disabled: "disabled"
                        },
                        {
                            label: "Semestre",
                            type: "selectpicker",
                            bsClass: "form-control",
                            placeholder: this.state.reporte.semestre,
                            defaultValue: this.state.reporte.semestre,
                            readonly: "readonly"
                            //minlength:"1",
                            //maxlength:"1", 
                            //pattern: "[1|2]",
                            //required:"required",
                            //disabled: "disabled"
                        },
                        {
                          label: "Prioridad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.reporte.prioridad,
                          defaultValue: this.state.reporte.prioridad,
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
                            placeholder: this.state.reporte.asignaturas_reportadas,
                            defaultValue: this.state.reporte.asignaturas_reportadas,
                            minlength:"1",
                            maxlength:"2", 
                            pattern: "[0-9]+",
                            onChange: this.handleChangeCantidad.bind(this)
                            //disabled: "disabled"
                          },
                        {
                          label: "Tipo de causal",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.reporte.tipo_causal,
                          defaultValue: this.state.reporte.tipo_causal,
                          readonly: "readonly"
                          //minlength:"1",
                          //maxlength:"1", 
                          //pattern: "[1|2|3]",
                          //disabled: "disabled"
                        },
                        
                        {
                            label: "Reiteraciones de la causal",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: this.state.reporte.reiteraciones_causal,
                            defaultValue: this.state.reporte.reiteraciones_causal,
                            readonly: "readonly"
                            //minlength:"1",
                            //maxlength:"2", 
                            //pattern: "[0-9]+",
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
                          placeholder: this.state.reporte.tipo_ingreso,
                          defaultValue: this.state.reporte.tipo_ingreso,
                          readonly: "readonly"
                          //minlength:"9",
                          //maxlength:"20", 
                          //pattern:"[En] [cC][aA][uU][sS][aA][lL]|[eE][Nn] [oO][bB][sS][eE][rR][vV][aA][cC][iI][oO][nN]|[rR][eE][cC][uU][pP][eE][rR][aA][Dd][oO]|[sS][uU][sS][pP][eE][nN][cC][iI][oO][Nn]|[eE][lL][iI][Mm][Aa][cC][iI][oO][nN]|[Rr][eE][nN][uU][Nn][cC][Ii][aA] [Cc][aA][Mm][Bb][iI][Oo] [dD][eE] [Cc][aA][Rr][rR][eE][rR][aA]",
                          //onChange: this.handleChangeTipo.bind(this)
                          //disabled: "disabled"
                        },
                        {
                          label: "Fecha",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: this.state.fecha,
                          defaultValue: this.state.fecha,
                          readonly: "readonly"
                          //disabled: "disabled"
                        },
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control" placeholder={`${this.state.reporte.observacion}`} onChange= {this.handleChangeObservacion.bind(this)}
                            rows="10" cols='80'  /> 
                            
                      </label>   
                    </form>
                        <br />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Actualizar registro
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

export default Modificar_registro;