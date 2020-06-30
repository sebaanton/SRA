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

class Modificar_reunion extends Component {
  state = {
    contactos: [],
    reportes: [],
    rut: "",
    nombre: "",
    realizacion: "",
    fecha: "",
    hora: "",
    cumplimiento_objetivos: "",
    medio_reunion: "",
    observaciones: "",
    iniciales_academico: "",
    problemaA: "",
    problemaA1: "",
    problemaB1: "",
    problemaB2: "",
    problemaB3: "",
    problemaC: "",
    problemaD: "",
    problemaE: "",
    problemaF: "",
    problemaG: "",
    recomendacionHE: "",
    recomendacionMTC: "",
    recomendacionSe: "",
    recomendacionDAP: "",
    recomendacionCAP: "",
    derivacionBEst: "",
    derivacionDCP: "",
    derivacionSE: "",
    derivacionDC: "",
    fechaBEst: "",
    fechaDCP: "",
    fechaSE: "",
    fechaDC: "",
    observacionBEst: "",
    observacionDCP: "",
    observacionSE: "",
    observacionDC: "",
  };
 
  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const urls = currenturl.slice(19,largo)
    const reunionRUT = this.props.match.params.reunionRUT;
    

    axios.get(`http://localhost:8000/contacto/`).then(res => {
      this.setState({
        contactos: res.data,
      });
    });
  }

  onRutChange(event){
    this.setState({
      rut: event.target.value
    });
  }

  onNombreChange(event){
    this.setState({
      nombre: event.target.value
    });
  }

  onRealizacionChange(event){
    var y = document.getElementById("Realizada");
    if(event.target.value == "si"){
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    this.setState({
      realizacion: event.target.value
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

  onCumplimiento_objetivosChange(event){
    this.setState({
      cumplimiento_objetivos: event.target.value
    });
  }

  onMedio_reunionChange(event){
    this.setState({
      medio_reunion: event.target.value
    });
  }

  onObservacionesChange(event){
    this.setState({
      observaciones: event.target.value
    });
  }

  onIniciales_academicoChange(event){
    this.setState({
      iniciales_academico: event.target.value
    });
  }

  handleChangeBoxA(event){
    if(this.state.problemaA == ""){
      this.setState({
        problemaA: "A"
      });
    } else {
      this.setState({
        problemaA: ""
      });
    }
  }
  handleChangeBoxA1(event){
    if(this.state.problemaA1 == ""){
      this.setState({
        problemaA1: "A1"
      });
    } else {
      this.setState({
        problemaA1: ""
      });
    }
  }
  handleChangeBoxB1(event){
    if(this.state.problemaB1 == ""){
      this.setState({
        problemaB1: "B1"
      });
    } else {
      this.setState({
        problemaB1: ""
      });
    }
  }
  handleChangeBoxB2(event){
    if(this.state.problemaB2 == ""){
      this.setState({
        problemaB2: "B2"
      });
    } else {
      this.setState({
        problemaB2: ""
      });
    }
  }
  handleChangeBoxB3(event){
    if(this.state.problemaB3 == ""){
      this.setState({
        problemaB3: "B3"
      });
    } else {
      this.setState({
        problemaB3: ""
      });
    }
  }
  handleChangeBoxC(event){
    if(this.state.problemaC == ""){
      this.setState({
        problemaC: "C"
      });
    } else {
      this.setState({
        problemaC: ""
      });
    }
  }
  handleChangeBoxD(event){
    if(this.state.problemaD == ""){
      this.setState({
        problemaD: "D"
      });
    } else {
      this.setState({
        problemaD: ""
      });
    }
  }
  handleChangeBoxE(event){
    if(this.state.problemaE == ""){
      this.setState({
        problemaE: "E"
      });
    } else {
      this.setState({
        problemaE: ""
      });
    }
  }
  handleChangeBoxF(event){
    if(this.state.problemaF == ""){
      this.setState({
        problemaF: "F"
      });
    } else {
      this.setState({
        problemaF: ""
      });
    }
  }
  handleChangeBoxG(event){
    if(this.state.problemaG == ""){
      this.setState({
        problemaG: "G"
      });
    } else {
      this.setState({
        problemaG: ""
      });
    }
  }
  handleChangeBoxBEst(event){
    var y = document.getElementById("FechaBEst");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if(this.state.derivacionBEst == ""){
      this.setState({
        derivacionBEst: "BEst"
      });
    } else {
      this.setState({
        derivacionBEst: ""
      });
    }
  }
  handleChangeBoxDCP(event){
    var y = document.getElementById("FechaDCP");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if(this.state.derivacionDCP == ""){
      this.setState({
        derivacionDCP: "DCP"
      });
    } else {
      this.setState({
        derivacionDCP: ""
      });
    }
  }
  handleChangeBoxSE(event){
    var y = document.getElementById("FechaSE");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if(this.state.derivacionSE == ""){
      this.setState({
        derivacionSE: "SE"
      });
    } else {
      this.setState({
        derivacionSE: ""
      });
    }
  }
  handleChangeBoxDC(event){
    var y = document.getElementById("FechaDC");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if(this.state.derivacionDC == ""){
      this.setState({
        derivacionDC: "DC"
      });
    } else {
      this.setState({
        derivacionDC: ""
      });
    }
  }
  onFechaBEstChange(event){
    this.setState({
      fechaBEst: event.target.value
    });
  }
  onFechaDCPChange(event){
    this.setState({
      fechaDCP: event.target.value
    });
  }
  onFechaSEChange(event){
    this.setState({
      fechaSE: event.target.value
    });
  }
  onFechaDCChange(event){
    this.setState({
      fechaDC: event.target.value
    });
  }
  handleChangeObservacionBEst(event){
    this.setState({
      observacionBEst: event.target.value
    });
  }
  handleChangeObservacionDCP(event){
    this.setState({
      observacionDCP: event.target.value
    });
  }
  handleChangeObservacionSE(event){
    this.setState({
      observacionSE: event.target.value
    });
  }
  handleChangeObservacionDC(event){
    this.setState({
      observacionDC: event.target.value
    });
  }
  handleChangeBoxHE(event){
    if(this.state.recomendacionHE == ""){
      this.setState({
        recomendacionHE: "HE"
      });
    } else {
      this.setState({
        recomendacionHE: ""
      });
    }
  }
  handleChangeBoxMTC(event){
    if(this.state.recomendacionMTC == ""){
      this.setState({
        recomendacionMTC: "MTC"
      });
    } else {
      this.setState({
        recomendacionMTC: ""
      });
    }
  }
  handleChangeBoxSe(event){
    if(this.state.recomendacionSe == ""){
      this.setState({
        recomendacionSe: "Se"
      });
    } else {
      this.setState({
        recomendacionSe: ""
      });
    }
  }
  handleChangeBoxDAP(event){
    if(this.state.recomendacionDAP == ""){
      this.setState({
        recomendacionDAP: "DAP"
      });
    } else {
      this.setState({
        recomendacionDAP: ""
      });
    }
  }
  handleChangeBoxCAP(event){
    if(this.state.recomendacionCAP == ""){
      this.setState({
        recomendacionCAP: "CAP"
      });
    } else {
      this.setState({
        recomendacionCAP: ""
      });
    }
  }

  onSubmit(event){
    event.preventDefault();
    var i
    var j
    var contacto
    var derivaciones = []
    var fechaUTC
    var hora
    var realizacion
    var cumplimiento_objetivos
    var reporte
    var existe = false
    hora = (this.state.hora.split(":"))[0] + (this.state.hora.split(":"))[1];
    fechaUTC = this.state.fecha + "T04:00:00Z";
    if(this.state.realizacion == "si"){
      realizacion = 1;
    } else {
      realizacion = 0;
    }
    if(this.state.cumplimiento_objetivos == "si"){
      cumplimiento_objetivos = 1;
    } else {
      cumplimiento_objetivos = 0;
    }
    axios.get(`http://localhost:8000/reporte/`).then( reportes=>{
      for(i=reportes.data.length-1; i>=0; i--){
        if(this.state.rut == reportes.data[i].alumno){
          for(j=this.state.contactos.length-1; j>=0; j--){
            if(reportes.data[i].id == this.state.contactos[j].reporte){
              reporte = reportes.data[i].id;
              contacto = this.state.contactos[j].id;
              break;
            }
          }
        }
      }
      if(!contacto){
        alert('aun no se a creado un contacto')
        return
      }
      axios.post(`http://localhost:8000/reunion/`, {nombre: this.state.nombre,
                                                    fecha: fechaUTC,
                                                    hora: hora,
                                                    realizacion: realizacion.toString(),
                                                    cumplimiento_objetivos: cumplimiento_objetivos.toString(),
                                                    medio_reunion: this.state.medio_reunion,
                                                    observaciones: this.state.observaciones,
                                                    iniciales_academico: this.state.iniciales_academico,
                                                    contacto: contacto.toString()
      }).then( res=>{
        if(this.state.realizacion == "si"){
          if(this.state.problemaA == "A"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "1", reunion: res.data.id})
          }
          if(this.state.problemaA1 == "A1"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "2", reunion: res.data.id})
          }
          if(this.state.problemaB1 == "B1"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "3", reunion: res.data.id})
          }
          if(this.state.problemaB2 == "B2"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "4", reunion: res.data.id})
          }
          if(this.state.problemaB3 == "B3"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "5", reunion: res.data.id})
          }
          if(this.state.problemaC == "C"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "6", reunion: res.data.id})
          }
          if(this.state.problemaD == "D"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "7", reunion: res.data.id})
          }
          if(this.state.problemaE == "E"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "8", reunion: res.data.id})
          }
          if(this.state.problemaF == "F"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "9", reunion: res.data.id})
          }
          if(this.state.problemaG == "G"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "10", reunion: res.data.id})
          }
          if(this.state.recomendacionHE == "HE"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "11", reunion: res.data.id})
          }
          if(this.state.recomendacionMTC == "MTC"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "12", reunion: res.data.id})
          }
          if(this.state.recomendacionSe == "Se"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "13", reunion: res.data.id})
          }
          if(this.state.recomendacionDAP == "DAP"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "14", reunion: res.data.id})
          }
          if(this.state.recomendacionCAP == "CAP"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "15", reunion: res.data.id})
          }
          axios.get(`http://localhost:8000/derivacion/`).then(res2=>{
            for(i=0;i<res2.data.length;i++){
              if(res2.data[i].contacto == contacto){
                derivaciones.push(res2.data[i])
              }
            }
            if(this.state.derivacionBEst == "BEst"){
              var fechaBEstUTC
              fechaBEstUTC = this.state.fechaBEst + "T04:00:00Z";
              for(i=0;i<derivaciones.length;i++){
                if(derivaciones[i].entidad_derivacion == "BEst"){
                  existe = true
                  axios.put(`http://localhost:8000/derivacion/${derivaciones[i].id}/`, {entidad_derivacion: "BEst",
                                                                                       fecha: fechaBEstUTC,
                                                                                       observacion: this.state.observacionBEst,
                                                                                       contacto: contacto})
                }
              }
              if(!existe){
                existe = false
                axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "BEst",
                                                                    fecha: fechaBEstUTC,
                                                                    observacion: this.state.observacionBEst,
                                                                    contacto: contacto})
              }
            }
            if(this.state.derivacionDCP == "DCP"){
              var fechaDCPUTC
              fechaDCPUTC = this.state.fechaDCP + "T04:00:00Z";
              for(i=0;i<derivaciones.length;i++){
                if(derivaciones[i].entidad_derivacion == "DCP"){
                  existe = true
                  axios.put(`http://localhost:8000/derivacion/${derivaciones[i].id}/`, {entidad_derivacion: "DCP",
                                                                                        fecha: fechaDCPUTC,
                                                                                        observacion: this.state.observacionDCP,
                                                                                        contacto: contacto})
                }
              }
              if(!existe){
                existe = false
                axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "DCP",
                                                                fecha: fechaDCPUTC,
                                                                observacion: this.state.observacionDCP,
                                                                contacto: contacto})
              }
            }
            if(this.state.derivacionSE == "SE"){
              var fechaSEUTC
              fechaSEUTC = this.state.fechaSE + "T04:00:00Z";
              for(i=0;i<derivaciones.length;i++){
                if(derivaciones[i].entidad_derivacion == "SE"){
                  existe = true
                    axios.put(`http://localhost:8000/derivacion/${derivaciones[i].id}/`, {entidad_derivacion: "SE",
                                                                                          fecha: fechaSEUTC,
                                                                                          observacion: this.state.observacionSE,
                                                                                          contacto: contacto})
                }
              }
              if(!existe){
                existe = false
                  axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "SE",
                                                                  fecha: fechaSEUTC,
                                                                  observacion: this.state.observacionSE,
                                                                  contacto: contacto})
              }
            }
            if(this.state.derivacionDC == "DC"){
              var fechaDCUTC
              fechaDCUTC = this.state.fechaDC + "T04:00:00Z";
              for(i=0;i<derivaciones.length;i++){
                if(derivaciones[i].entidad_derivacion == "DC"){
                  existe = true
                  axios.put(`http://localhost:8000/derivacion/${derivaciones[i].id}/`, {entidad_derivacion: "DC",
                                                                                        fecha: fechaDCUTC,
                                                                                        observacion: this.state.observacionDC,
                                                                                        contacto: contacto})
                }
              }
              if(!existe){
                existe = false
                axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "DC",
                                                                 fecha: fechaDCUTC,
                                                                 observacion: this.state.observacionDC,
                                                                 contacto: contacto})
              }
            }
          })
        }
        this.props.history.push(`Ver_flujo/${reporte}`)  
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
                title="Agendar Reunión"
                content={
                  <form onSubmit={this.onSubmit.bind(this)}>
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-3", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          onChange: this.onRutChange.bind(this),
                          minlength:"9",
                          maxlength:"10",
                          pattern: "[^a-zA-Z][0-9]{7,8}+-[0-9|Kk]",
                          required:"required",
                          title:"Números enteros de 0 al 9 y la letra k en su ́ultima posición (mayúscula o minúscula)"
                          //value: `${this.state.reunion.rut}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Medio de reunión",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "virtual",
                          onChange: this.onMedio_reunionChange.bind(this),
                          minlength:"7",
                          maxlength:"10",
                          pattern: "[Vv][iI][Rr][tT][uU][aA][lL]|[pP][Rr][Ee][sS][Ee][nN][Cc][iI][aA][lL]",
                          required:"required",
                          //value: `${this.state.reunion.medio}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Nombre de reunión",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "primera reunion",
                          onChange: this.onNombreChange.bind(this),
                          //value: `${this.state.reunion.nombre}`,
                          minlength:"3",
                          maxlength:"25",
                          pattern: "[a-zA-Z :,.0-9]+",
                          required:"required",
                          //disabled: "disabled"
                        },
                      ]}
                    />
                    
                    <FormInputs
                      ncols={["col-md-3", "col-md-3",  "col-md-2", "col-md-3"]}
                      properties={[
                        {
                          label: "Fecha de reunión",
                          type: "date",
                          bsClass: "form-control",
                          onChange: this.onFechaChange.bind(this),
                          required:"required",
                          //placeholder: "usuario@mail.udp.cl",
                          //disabled: "disabled"
                        },
                        {
                          label: "Hora de reunion",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: "23:00",
                          onChange: this.onHoraChange.bind(this),
                          //value: `${this.state.reunion.hora}`,
                          minlength:"5",
                          maxlength:"5",
                          pattern: "[0-1][0-9][:][0-5][0-9]|[2][0-3][:][0-5][0-9]",
                          required:"required",
                          //Disabled: "disabled"
                        },
                        {
                          label: "¿Se realizó?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "si", 
                          onChange: this.onRealizacionChange.bind(this),
                          //value: `${this.state.reunion.interes}`, 
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][Ii]|[Nn][Oo]",
                          required:"required",
                          //disabled: "disabled"
                        },
                        {
                          label: "Iniciales del académico",
                          type: "text",
                          bsClass: "form-control",
                          onChange: this.onIniciales_academicoChange.bind(this),
                          placeholder: "JE",
                          //value: `${this.state.reunion.fecha}`,
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[a-zA-Z]+",
                          //readonly:"readonly",
                        },
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control" onChange= {this.onObservacionesChange.bind(this)}
                            rows="5" cols='80'/> 
                            
                      </label>   
                    </form>
                    <div id="Realizada" style={{display:"none"}}>
                    <h3>Realizada</h3>
                    <FormInputs
                      ncols={["col-md-4"]}
                      properties={[
                        {
                          label: "¿Objetivos cumplidos?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "si",
                          onChange: this.onCumplimiento_objetivosChange.bind(this),
                          //value: `${this.state.reunion.autogestion}`,
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][Ii]|[Nn][Oo]",
                          //disabled: "disabled"
                        },
                      ]}
                    />
                    <Row>
                      <Card 
                            title="Tipos de Problemas"          
                            content={
                        <form>
                      <div className="table-full-width">
                                <table className="table">
                                <div>
                                <Col md={5} mdOffset={0.5}>
                  
                  
                            <input type="checkbox" name="A" value="A" onChange= {this.handleChangeBoxA.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Adicción a Internet, juegos y redes sociales</label>  < br/>
                            <input type="checkbox" name="A1" value="A1" onChange= {this.handleChangeBoxA1.bind(this)}/>
                            &nbsp;&nbsp;
                            <label for="vehicle2">Madurez-Motivación</label> < br/>
                            <input type="checkbox" name="B1" value="B1" onChange= {this.handleChangeBoxB1.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle3">Falta Base – Dificultad de Abstracción<br></br>y Desarrollo Formal</label> < br/>
                            <input type="checkbox" name="B2" value="B2" onChange= {this.handleChangeBoxB2.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Dificultad de Comprensión al Profesor</label>  < br/>
                            <input type="checkbox" name="B3" value="B3" onChange= {this.handleChangeBoxB3.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Otros: Trastornos de Sueño,<br></br>Prob. Dislexia, etc.</label>  < br/>
                            </Col>

                            <Col md={5} mdOffset={0.5}>
                            <input type="checkbox" name="C" value="C" onChange= {this.handleChangeBoxC.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Falta Hábitos de estudio</label>  < br/>
                            <input type="checkbox" name="D" value="D"onChange= {this.handleChangeBoxD.bind(this)}/>
                            &nbsp;&nbsp;
                            <label for="vehicle2">Dificultad de Concentración – Volitiva –<br></br>Depresión y otros psicol.</label> < br/>
                            <input type="checkbox" name="E" value="E" onChange= {this.handleChangeBoxE.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle3">Problemas de Salud Relevantes</label> < br/>
                            <input type="checkbox" name="F" value="F" onChange= {this.handleChangeBoxF.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Problemas Económicos y Familiares</label>  < br/>
                            <input type="checkbox" name="G" value="G" onChange= {this.handleChangeBoxG.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Trabaja más de 1⁄4 Jornada</label>  < br/>
                            </Col>
                            </div>
                    </table>
              
                    </div>   
                    </form>
                            }/>
                    </Row>
                    <Row>
                    <Card         
                          content={
                      <form>
                    <div className="table-full-width">
                    
                              <table className="table">
                              
                              <div>
                              <Col md={5} mdOffset={0.5}>
                              <h4>Derivaciones</h4>
                  
                
                          <input type="checkbox" name="BEst" value="BEst" onChange= {this.handleChangeBoxBEst.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Bienestar Estudiantil</label>  < br/>
                          <div id="FechaBEst" style={{display:"none"}}>
                            <FormInputs
                              ncols={["col-md-7"]}
                              properties={[
                                {
                                  label: "Fecha de derivacion",
                                  type: "date",
                                  bsClass: "form-control",
                                  onChange: this.onFechaBEstChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" onChange= {this.handleChangeObservacionBEst.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          <input type="checkbox" name="DCP" value="DCP" onChange= {this.handleChangeBoxDCP.bind(this)}/>
                          &nbsp;&nbsp;
                          <label for="vehicle2">Departamento o Coordinación de Línea</label> < br/>
                          <div id="FechaDCP" style={{display:"none"}}>
                            <FormInputs
                              ncols={["col-md-7"]}
                              properties={[
                                {
                                  label: "Fecha de derivacion",
                                  type: "date",
                                  bsClass: "form-control",
                                  onChange: this.onFechaDCPChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" onChange= {this.handleChangeObservacionDCP.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          <input type="checkbox" name="SE" value="SE" onChange= {this.handleChangeBoxSE.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle3">Secretaria de Estudios</label> < br/>
                          <div id="FechaSE" style={{display:"none"}}>
                            <FormInputs
                              ncols={["col-md-7"]}
                              properties={[
                                {
                                  label: "Fecha de derivacion",
                                  type: "date",
                                  bsClass: "form-control",
                                  onChange: this.onFechaSEChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" onChange= {this.handleChangeObservacionSE.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          <input type="checkbox" name="DC" value="DC" onChange= {this.handleChangeBoxDC.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Director de la Carrera</label>  < br/>
                          <div id="FechaDC" style={{display:"none"}}>
                            <FormInputs
                              ncols={["col-md-7"]}
                              properties={[
                                {
                                  label: "Fecha de derivacion",
                                  type: "date",
                                  bsClass: "form-control",
                                  onChange: this.onFechaDCChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" onChange= {this.handleChangeObservacionDC.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          </Col>

                          <Col md={5} mdOffset={0.5}>
                          <h4>Recomendaciones</h4>
                          <input type="checkbox" name="HE" value="HE" onChange= {this.handleChangeBoxHE.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Hábitos de Estudio</label>  < br/>
                          <input type="checkbox" name="MTC" value="MTC" onChange= {this.handleChangeBoxMTC.bind(this)}/>
                          &nbsp;&nbsp;
                          <label for="vehicle2">Malla, Toma de Ramos, Carga Académica</label> < br/>
                          <input type="checkbox" name="DP" value="SE" onChange= {this.handleChangeBoxSe.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle3">Derivado a Profesores</label> < br/>
                          <input type="checkbox" name="DAP" value="DAP" onChange= {this.handleChangeBoxDAP.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Derivado a Apoyo Psicológico</label>  < br/>
                          <input type="checkbox" name="CAP" value="CAP" onChange= {this.handleChangeBoxCAP.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Compromiso de Acción Personal</label>  < br/>
                          </Col>
                          </div>
                    </table>
                    </div>   
                    </form>
                          }/>
                    </Row>
                    </div>
                    <br></br>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Guardar Reunión
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

export default Modificar_reunion;
  
