import React, { Component } from "react";
import {
  Grid,
  Row,
  Col, Form} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios";


class Ver_registro extends Component {
  state = {
    reporte: [],
    fecha: "",
    alumno: [],
    calificacion: "",
    asistencia: "",
    interes: ""
  };

  componentDidMount(){
    const currenturl = window.location.pathname
    const largo = currenturl.length
    var asig = []
    var i
    var calif = 0
    var asis = 0
    var inter = 0
    var interTex = ""
    const id = currenturl.slice(26,largo)
    axios.get(`http://localhost:8000/reporte/${id}`).then(res2 => {
      this.setState({
        reporte: res2.data,
        fecha: res2.data.fecha.slice(0,10)
      });
      axios.get(`http://localhost:8000/alumno/${res2.data.alumno}`).then(res3 => {
        this.setState({
          alumno: res3.data,
        });
      });
      axios.get(`http://localhost:8000/asignatura_reportada/`).then(res4 => {
        for (i=0; i<res4.data.length;i++){
          if (res4.data[i].reporte == id){
            asig.push(res4.data[i])
          }
        }
        if (asig.length > 0){
          for (i=0; i<asig.length; i++){
            calif = calif + asig[i].notas_ponderadas
            asis = asis + asig[i].asistencia
            inter = inter + asig[i].participacion
          }
          calif = calif/(asig.length*10)
          asis = asis/asig.length
          inter = inter/asig.length
          if (inter > asig.length*7/3){
            interTex = "Alto"
          }else if (inter > (asig.length*5/3)){
            interTex = "Medio"
          }else{
            interTex = "Bajo"
          }
          this.setState({
            calificacion: calif,
            asistencia: asis,
            interes: interTex
          });
        }
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
                title={`Registro RSA ${this.state.alumno.nombre}`}
                content={
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
                            
                        },
                        {
                            label: "Semestre",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: this.state.reporte.semestre,
                            defaultValue: this.state.reporte.semestre,
                            readonly: "readonly"
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
                            readonly: "readonly"
                          },
                        {
                          label: "Tipo de causal",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.reporte.tipo_causal,
                          defaultValue: this.state.reporte.tipo_causal,
                          readonly: "readonly"
                        },
                        
                        {
                            label: "Reiteraciones de la causal",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: this.state.reporte.reiteraciones_causal,
                            defaultValue: this.state.reporte.reiteraciones_causal,
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
                          placeholder: this.state.reporte.tipo_ingreso,
                          defaultValue: this.state.reporte.tipo_ingreso,
                          readonly: "readonly"
                        },
                        {
                          label: "Fecha",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: this.state.fecha,
                          defaultValue: this.state.fecha,
                          readonly: "readonly"
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
                          placeholder: this.state.calificacion,
                          defaultValue: this.state.calificacion,
                          readonly: "readonly"
                        },
                        {
                          label: "Porcentaje de Asistencia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.asistencia,
                          defaultValue: this.state.asistencia,
                          readonly: "readonly" 
                        },
                        {
                          label: "Interés Percibido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.interes,
                          defaultValue: this.state.interes,
                          readonly: "readonly" 
                        },
                        
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control" placeholder={`${this.state.reporte.observacion}`}
                            rows="10" cols='80' readOnly disabled/> 
                            
                      </label>   
                    </form>
                        <br />

                    <Button bsStyle="info" pullRight fill type="submit" href={`http://localhost:3000/coordinador/Modificar_registro/${this.state.reporte.id}`} >
                      Modificar registro
                    </Button>
                    
                    <Button bsStyle="info" pullLeft fill type="submit" href={`http://localhost:3000/coordinador/Ver_flujo/${this.state.reporte.id}`} >
                      Ver flujo
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