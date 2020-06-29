import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import axios from "axios";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/faces/face-3.jpg";
//const Nombre = "Juan"
const apiUrl = 'http://localhost:8000';


class Ver_detalle_profesor extends Component {
  state = {
    reporte: [],
    fecha: "",
    alumno: [],
    calificacion: "",
    asistencia: "",
    interes: "",
    reporteDisplay:[],
    asignatura_reportada: [],
    observacion: "",
    asignatura_datos: [],
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
    var asignatura = 0
    
    
    const id = currenturl.slice(28,largo)
    const alumnoRUT = this.props.match.params.alumnoRUT;
    
    
    axios.get(`http://localhost:8000/alumno/${id}`).then(res => {
      this.setState({
        alumno: res.data,
        fecha: res.data.fecha_registro.slice(0,10),
      },
      //console.log(res.data.rut)
      );
    
    //console.log("hol")
    axios.get("http://localhost:8000/reporte/").then(res2 => {
      var i;
      var repo = [];
      for(i=0;i<res2.data.length;i++){
          if(id == res2.data[i].alumno){
            repo.push(res2.data[i]);
          }
      }
      repo.sort(function(a, b) {
        var dateA = new Date(a.fecha.slice(0,10)), dateB = new Date(b.fecha.slice(0,10));
        return dateA - dateB;
        
    });
      this.setState({
        reporteDisplay: repo[repo.length -1],
        
      },function(){
        console.log(this.state.reporteDisplay.id);
        //console.log(this.state.reporteDisplay);
      }
      );
    
    
      axios.get(`http://localhost:8000/asignatura_reportada/`).then(res4 => {
        
        const id_reporte = this.state.reporteDisplay.id
        for (i=0; i<res4.data.length;i++){
          if (res4.data[i].reporte == id_reporte){
            //console.log(res4.data[i])
            asig = res4.data[i]
          }
        }
        //console.log(asig)
        
        this.setState({
          asignatura_reportada: asig
        }, function(){
          console.log(this.state.asignatura_reportada);
        }
        );
      
      

      axios.get(`http://localhost:8000/asignatura/`).then(res5 => {
        
        const id_asignatura = this.state.asignatura_reportada.asignatura
        console.log(id_asignatura)
        console.log(res5.data)
        for (i=0; i<res5.data.length;i++){
          if (res5.data[i].id == id_asignatura){
            //console.log(res5.data[i])
            asignatura = i
          }
        }
        //console.log(asig)
        
        this.setState({
          asignatura_datos:res5.data[asignatura].glosa
        }, function(){
          console.log(this.state.asignatura_datos);
        }
        );
      });
      });
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
                title="Detalle de alumno"
                content={
                  <form action="/send.php" >
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-3"]}
                      properties={[
                        {
                          label: "Nombre Completo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Juan",  
                          minlength:"3",
                          maxlength:"50",
                          pattern: "[a-zA-Z]+",
                          required:"required",
                          value: `${this.state.alumno.nombre}`,
                          title:"Letras de la A a la Z (mayúsculas o minúsculas)"  ,
                          disabled:"disabled"                    
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
                          title:"Números enteros de 0 al 9 y la letra k en su ́ultima posición (mayúscula o minúscula)" ,
                          disabled:"disabled",
                          value: `${this.state.alumno.rut}`,   
                        },
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
                          title:"Reportado o autoconsulta (en mayúscula o minúscula)",
                          disabled:"disabled",
                          value: `${this.state.alumno.estado_actual}`,
                          //Value: tipo_ingreso,
                          //onChange: handleChangeTipo_ingreso
                        },
                        
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-3"]}
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
                          title:"Números decimales entre 1.0 y 7.0",
                          disabled:"disabled",
                          placeholder: this.state.asignatura_reportada.notas_ponderadas,
                          defaultValue: this.state.asignatura_reportada.notas_ponderadas,    
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
                          title:"Números entero entre 0 y 100" ,
                          disabled:"disabled",
                          placeholder: this.state.asignatura_reportada.asistencia,
                          defaultValue: this.state.asignatura_reportada.asistencia,
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
                          title:"Números decimales entre 1.0 y 7.0" ,
                          disabled:"disabled"    ,
                          placeholder: this.state.asignatura_reportada.participacion,
                          defaultValue: this.state.asignatura_reportada.participacion,    
                        },
                        
                      ]}
                    />

              <FormInputs
                      ncols={["col-md-6","col-md-5"]}
                      properties={[
                        

                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "usuario@mail.udp.cl",
                          defaultValue: "",
                          value: `${this.state.alumno.correo}`,   
                          minlength:"15",
                          maxlength:"50",
                          pattern: "[a-zA-z0-9.]+@mail.udp.cl",
                          required:"required",
                          title:"El correo debe ser el institucional",
                          disabled:"disabled"        
                          //onChange: handleChangeEmail
                        },
                        {
                          label: "Asignatura Reportada",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Calculo 1",  
                          minlength:"5",
                          maxlength:"50",
                          pattern: "[a-zA-Z]+",
                          required:"required",
                          disabled:"disabled" ,
                          title:"Letras de la A a la Z (mayúsculas o minúsculas)",
                          value: `${this.state.asignatura_datos}`,  
                          //onChange: handleChangeAsignatura_reportada          
                        },
                      ]}
                  />

                  
                  <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control" placeholder={`${this.state.asignatura_reportada.observaciones}`} 
                            rows="5" cols='68' disabled value={this.state.asignatura_reportada.observaciones} /> 
                      </label>   
                    </form>
                    <br />
                    <br />

                    <Button bsStyle="info" pullRight fill type="submit" href={`http://localhost:3000/admin/Modificar_alumno_profesor/${this.state.reporteDisplay.id}`}>
                      Modificar Datos
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

export default Ver_detalle_profesor;
  