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
    read: "",
    reunion: "",
    contacto: "",
    reporte: "",
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
    problemaAltA: "",
    problemaKeyA: "",
    problemaA1: "",
    problemaAltA1: "",
    problemaKeyA1: "",
    problemaB1: "",
    problemaAltB1: "",
    problemaKeyB1: "",
    problemaB2: "",
    problemaAltB2: "",
    problemaKeyB2: "",
    problemaB3: "",
    problemaAltB3: "",
    problemaKeyB3: "",
    problemaC: "",
    problemaAltC: "",
    problemaKeyC: "",
    problemaD: "",
    problemaAltD: "",
    problemaKeyD: "",
    problemaE: "",
    problemaAltE: "",
    problemaKeyE: "",
    problemaF: "",
    problemaAltF: "",
    problemaKeyF: "",
    problemaG: "",
    problemaAltG: "",
    problemaKeyG: "",
    recomendacionHE: "",
    recomendacionAltHE: "",
    recomendacionKeyHE: "",
    recomendacionMTC: "",
    recomendacionAltMTC: "",
    recomendacionKeyMTC: "",
    recomendacionSe: "",
    recomendacionAltSe: "",
    recomendacionKeySe: "",
    recomendacionDAP: "",
    recomendacionAltDAP: "",
    recomendacionKeyDAP: "",
    recomendacionCAP: "",
    recomendacionAltCAP: "",
    recomendacionKeyCAP: "",
    derivacionBEst: "",
    derivacionAltBEst: "",
    derivacionKeyBEst: "",
    derivacionDCP: "",
    derivacionAltDCP: "",
    derivacionKeyDCP: "",
    derivacionSE: "",
    derivacionAltSE: "",
    derivacionKeySE: "",
    derivacionDC: "",
    derivacionAltDC: "",
    derivacionKeyDC: "",
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
    const urls = currenturl.slice(31,largo)
    const reunionRUT = this.props.match.params.reunionRUT;
    axios.get(`http://localhost:8000/reunion/${urls}`).then(res => {
      var real
      var cump
      var y = document.getElementById("Realizada");
      if(res.data.realizacion){
        real = "si"
        this.state.read = "readonly"
        y.style.display = "block";
      } else {
        real = "no"
        y.style.display = "none";
      }
      if(res.data.cumplimiento_objetivos){
        cump = "si"
      } else {
        cump = "no"
      }
      this.setState({
        reunion: res.data,
        nombre: res.data.nombre,
        fecha: new Date(res.data.fecha).toISOString().split('T')[0],
        hora: res.data.hora.toString().slice(0,2) + ":" + res.data.hora.toString().slice(2,4),
        realizacion: real,
        cumplimiento_objetivos: cump,
        medio_reunion: res.data.medio_reunion,
        iniciales_academico: res.data.iniciales_academico,
        observaciones: res.data.observaciones,
      });
      axios.get(`http://localhost:8000/problema_asociado/`).then( data=>{
        var i
        for(i=0; i<data.data.length; i++){
          if(data.data[i].reunion == res.data.id){
            if(data.data[i].tipo == 1){
              this.setState({
                problemaA: "A",
                problemaAltA: "A",
                problemaKeyA: data.data[i].id,
              });
              document.getElementById("checkA").checked = true;
            }else if(data.data[i].tipo == 2){
              this.setState({
                problemaA1: "A1",
                problemaAltA1: "A1",
                problemaKeyA1: data.data[i].id,
              });
              document.getElementById("checkA1").checked = true;
            }else if(data.data[i].tipo == 3){
              this.setState({
                problemaB1: "B1",
                problemaAltB1: "B1",
                problemaKeyB1: data.data[i].id,
              });
              document.getElementById("checkB1").checked = true;
            }else if(data.data[i].tipo == 4){
              this.setState({
                problemaB2: "B2",
                problemaAltB2: "B2",
                problemaKeyB2: data.data[i].id,
              });
              document.getElementById("checkB2").checked = true;
            }else if(data.data[i].tipo == 5){
              this.setState({
                problemaB3: "B3",
                problemaAltB3: "B3",
                problemaKeyB3: data.data[i].id,
              });
              document.getElementById("checkB3").checked = true;
            }else if(data.data[i].tipo == 6){
              this.setState({
                problemaC: "C",
                problemaAltC: "C",
                problemaKeyC: data.data[i].id,
              });
              document.getElementById("checkC").checked = true;
            }else if(data.data[i].tipo == 7){
              this.setState({
                problemaD: "D",
                problemaAltD: "D",
                problemaKeyD: data.data[i].id,
              });
              document.getElementById("checkD").checked = true;
            }else if(data.data[i].tipo == 8){
              this.setState({
                problemaE: "E",
                problemaAltE: "E",
                problemaKeyE: data.data[i].id,
              });
              document.getElementById("checkE").checked = true;
            }else if(data.data[i].tipo == 9){
              this.setState({
                problemaF: "F",
                problemaAltF: "F",
                problemaKeyF: data.data[i].id,
              });
              document.getElementById("checkF").checked = true;
            }else if(data.data[i].tipo == 10){
              this.setState({
                problemaG: "G",
                problemaAltG: "G",
                problemaKeyG: data.data[i].id,
              });
              document.getElementById("checkG").checked = true;
            }else if(data.data[i].tipo == 11){
              this.setState({
                recomendacionHE: "HE",
                recomendacionAltHE: "HE",
                recomendacionKeyHE: data.data[i].id,
              });
              document.getElementById("checkHE").checked = true;
            }else if(data.data[i].tipo == 12){
              this.setState({
                recomendacionMTC: "MTC",
                recomendacionAltMTC: "MTC",
                recomendacionKeyMTC: data.data[i].id,
              });
              document.getElementById("checkMTC").checked = true;
            }else if(data.data[i].tipo == 13){
              this.setState({
                recomendacionSe: "Se",
                recomendacionAltSe: "Se",
                recomendacionKeySe: data.data[i].id,
              });
              document.getElementById("checkSe").checked = true;
            }else if(data.data[i].tipo == 14){
              this.setState({
                recomendacionDAP: "DAP",
                recomendacionAltDAP: "DAP",
                recomendacionKeyDAP: data.data[i].id,
              });
              document.getElementById("checkDAP").checked = true;
            }else if(data.data[i].tipo == 15){
              this.setState({
                recomendacionCAP: "CAP",
                recomendacionAltCAP: "CAP",
                recomendacionKeyCAP: data.data[i].id,
              });
              document.getElementById("checkCAP").checked = true;
            }
          }
        }
      });
      axios.get(`http://localhost:8000/contacto/${res.data.contacto}`).then(res2 => {
        this.setState({
          contacto: res2.data,
        });
        axios.get(`http://localhost:8000/derivacion/`).then(data2=>{
          var j
          for(j=0; j<data2.data.length; j++){
            if(data2.data[j].contacto == res2.data.id){
              if(data2.data[j].entidad_derivacion == "BEst"){
                this.setState({
                  derivacionBEst: "BEst",
                  derivacionAltBEst: "BEst",
                  derivacionKeyBEst: data2.data[j].id,
                  fechaBEst: new Date(data2.data[j].fecha).toISOString().split('T')[0],
                  observacionBEst: data2.data[j].observacion,
                });
                document.getElementById("FechaBEst").style.display = "block";
                document.getElementById("checkBEst").checked = true;
              }else if(data2.data[j].entidad_derivacion == "DCP"){
                this.setState({
                  derivacionDCP: "DCP",
                  derivacionAltDCP: "DCP",
                  derivacionKeyDCP: data2.data[j].id,
                  fechaDCP: new Date(data2.data[j].fecha).toISOString().split('T')[0],
                  observacionDCP: data2.data[j].observacion,
                });
                document.getElementById("FechaDCP").style.display = "block";
                document.getElementById("checkDCP").checked = true;
              }else if(data2.data[j].entidad_derivacion == "SE"){
                this.setState({
                  derivacionSE: "SE",
                  derivacionAltSE: "SE",
                  derivacionKeySE: data2.data[j].id,
                  fechaSE: new Date(data2.data[j].fecha).toISOString().split('T')[0],
                  observacionSE: data2.data[j].observacion,
                });
                document.getElementById("FechaSE").style.display = "block";
                document.getElementById("checkSE").checked = true;
              }else if(data2.data[j].entidad_derivacion == "DC"){
                this.setState({
                  derivacionDC: "DC",
                  derivacionAltDC: "DC",
                  derivacionKeyDC: data2.data[j].id,
                  fechaDC: new Date(data2.data[j].fecha).toISOString().split('T')[0],
                  observacionDC: data2.data[j].observacion,
                });
                document.getElementById("FechaDC").style.display = "block";
                document.getElementById("checkDC").checked = true;
              }
            }
          }
        });
        axios.get(`http://localhost:8000/reporte/${res2.data.reporte}`).then(res3 => {
          this.setState({
            reporte: res3.data,
            rut: res3.data.alumno
          });
        });
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
    var fechaUTC
    var hora
    var realizacion
    var cumplimiento_objetivos
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
    axios.put(`http://localhost:8000/reunion/${this.state.reunion.id}/`, {
                                                                            nombre: this.state.nombre,
                                                                            fecha: fechaUTC,
                                                                            hora: hora,
                                                                            realizacion: realizacion.toString(),
                                                                            cumplimiento_objetivos: cumplimiento_objetivos.toString(),
                                                                            medio_reunion: this.state.medio_reunion,
                                                                            observaciones: this.state.observaciones,
                                                                            iniciales_academico: this.state.iniciales_academico,
                                                                            contacto: this.state.contacto.id
    }).then( res=>{
      if(this.state.realizacion == "si"){
        if(this.state.problemaA != this.state.problemaAltA){
          if(this.state.problemaA == "A"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "1", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyA}/`)
          }
        }
        if(this.state.problemaA1 != this.state.problemaAltA1){
          if(this.state.problemaA1 == "A1"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "2", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyA1}/`)
          }
        }
        if(this.state.problemaB1 != this.state.problemaAltB1){
          if(this.state.problemaB1 == "B1"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "3", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyB1}/`)
          }
        }
        if(this.state.problemaB2 != this.state.problemaAltB2){
          if(this.state.problemaB2 == "B2"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "4", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyB2}/`)
          }
        }
        if(this.state.problemaB3 != this.state.problemaAltB3){
          if(this.state.problemaB3 == "B3"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "5", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyB3}/`)
          }
        }
        if(this.state.problemaC != this.state.problemaAltC){
          if(this.state.problemaC == "C"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "6", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyC}/`)
          }
        }
        if(this.state.problemaD != this.state.problemaAltD){
          if(this.state.problemaD == "D"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "7", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyD}/`)
          }
        }
        if(this.state.problemaE != this.state.problemaAltE){
          if(this.state.problemaE == "E"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "8", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyE}/`)
          }
        }
        if(this.state.problemaF != this.state.problemaAltF){
          if(this.state.problemaF == "F"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "9", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyF}/`)
          }
        }
        if(this.state.problemaG != this.state.problemaAltG){
          if(this.state.problemaG == "G"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "10", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.problemaKeyG}/`)
          }
        }
        if(this.state.recomendacionHE != this.state.recomendacionAltHE){
          if(this.state.recomendacionHE == "HE"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "11", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.recomendacionKeyHE}/`)
          }
        }
        if(this.state.recomendacionMTC != this.state.recomendacionAltMTC){
          if(this.state.recomendacionMTC == "MTC"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "12", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.recomendacionKeyMTC}/`)
          }
        }
        if(this.state.recomendacionSe != this.state.recomendacionAltSe){
          if(this.state.recomendacionSe == "Se"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "13", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.recomendacionKeySe}/`)
          }
        }
        if(this.state.recomendacionDAP != this.state.recomendacionAltDAP){
          if(this.state.recomendacionDAP == "DAP"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "14", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.recomendacionKeyDAP}/`)
          }
        }
        if(this.state.recomendacionCAP != this.state.recomendacionAltCAP){
          if(this.state.recomendacionCAP == "CAP"){
            axios.post(`http://localhost:8000/problema_asociado/`, {tipo: "15", reunion: res.data.id})
          }else{
            axios.delete(`http://localhost:8000/problema_asociado/${this.state.recomendacionKeyCAP}/`)
          }
        }
        if(this.state.derivacionBEst != this.state.derivacionAltBEst){
          if(this.state.derivacionBEst == "BEst"){
            var fechaBEstUTC
            fechaBEstUTC = this.state.fechaBEst + "T04:00:00Z";
            axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "BEst",
                                                              fecha: fechaBEstUTC,
                                                              observacion: this.state.observacionBEst,
                                                              contacto: this.state.contacto.id})
          }else{
            axios.delete(`http://localhost:8000/derivacion/${this.state.derivacionKeyBEst}/`)
          }
        }else if(this.state.derivacionBEst == "BEst"){
          var fechaBEstUTC
          fechaBEstUTC = this.state.fechaBEst + "T04:00:00Z";
          axios.put(`http://localhost:8000/derivacion/${this.state.derivacionKeyBEst}/`, {entidad_derivacion: "BEst",
                                                                                          fecha: fechaBEstUTC,
                                                                                          observacion: this.state.observacionBEst,
                                                                                          contacto: this.state.contacto.id})
        }
        if(this.state.derivacionDCP != this.state.derivacionAltDCP){
          if(this.state.derivacionDCP == "DCP"){
            var fechaDCPUTC
            fechaDCPUTC = this.state.fechaDCP + "T04:00:00Z";
            axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "DCP",
                                                              fecha: fechaDCPUTC,
                                                              observacion: this.state.observacionDCP,
                                                              contacto: this.state.contacto.id})
          }else{
            axios.delete(`http://localhost:8000/derivacion/${this.state.derivacionKeyDCP}/`)
          }
        }else if(this.state.derivacionDCP == "DCP"){
          var fechaDCPUTC
          fechaDCPUTC = this.state.fechaDCP + "T04:00:00Z";
          axios.put(`http://localhost:8000/derivacion/${this.state.derivacionKeyDCP}/`, {entidad_derivacion: "DCP",
                                                                                        fecha: fechaDCPUTC,
                                                                                        observacion: this.state.observacionDCP,
                                                                                        contacto: this.state.contacto.id})
        }
        if(this.state.derivacionSE != this.state.derivacionAltSE){
          if(this.state.derivacionSE == "SE"){
            var fechaSEUTC
            fechaSEUTC = this.state.fechaSE + "T04:00:00Z";
            axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "SE",
                                                              fecha: fechaSEUTC,
                                                              observacion: this.state.observacionSE,
                                                              contacto: this.state.contacto.id})
          }else{
            axios.delete(`http://localhost:8000/derivacion/${this.state.derivacionKeySE}/`)
          }
        }else if(this.state.derivacionSE == "SE"){
          var fechaSEUTC
          fechaSEUTC = this.state.fechaSE + "T04:00:00Z";
          axios.put(`http://localhost:8000/derivacion/${this.state.derivacionKeySE}/`, {entidad_derivacion: "SE",
                                                                                        fecha: fechaSEUTC,
                                                                                        observacion: this.state.observacionSE,
                                                                                        contacto: this.state.contacto.id})
        }
        if(this.state.derivacionDC != this.state.derivacionAltDC){
          if(this.state.derivacionDC == "DC"){
            var fechaDCUTC
            fechaDCUTC = this.state.fechaDC + "T04:00:00Z";
            axios.post(`http://localhost:8000/derivacion/`, {entidad_derivacion: "DC",
                                                              fecha: fechaDCUTC,
                                                              observacion: this.state.observacionDC,
                                                              contacto: this.state.contacto.id})
          }else{
            axios.delete(`http://localhost:8000/derivacion/${this.state.derivacionKeyDC}/`)
          }
        }else if(this.state.derivacionSE == "DC"){
          var fechaDCUTC
          fechaDCUTC = this.state.fechaDC + "T04:00:00Z";
          axios.put(`http://localhost:8000/derivacion/${this.state.derivacionKeyDC}/`, {entidad_derivacion: "DC",
                                                                                        fecha: fechaDCUTC,
                                                                                        observacion: this.state.observacionDC,
                                                                                        contacto: this.state.contacto.id})
        }
      }
      this.props.history.goBack()  
    });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Modificar Reunión"
                content={
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-3", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.rut,
                          defaultValue: this.state.rut,
                          readOnly: "readOnly"
                        },
                        {
                          label: "Medio de reunión",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.reunion.medio_reunion,
                          defaultValue: this.state.reunion.medio_reunion,
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
                          placeholder: this.state.reunion.nombre,
                          defaultValue: this.state.reunion.nombre,
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
                          defaultValue: this.state.fecha,
                          onChange: this.onFechaChange.bind(this),
                          //placeholder: "usuario@mail.udp.cl",
                          //disabled: "disabled"
                        },
                        {
                          label: "Hora de reunion",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: this.state.hora,
                          defaultValue: this.state.hora,
                          onChange: this.onHoraChange.bind(this),
                          //value: `${this.state.reunion.hora}`,
                          minlength:"5",
                          maxlength:"5",
                          pattern: "[0|1][0-9][0-6][0-9]|[2][0-3][0-5][0-9]",
                          required:"required",
                          //Disabled: "disabled"
                        },
                        {
                          label: "¿Se realizó?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.realizacion,
                          defaultValue: this.state.realizacion,
                          onChange: this.onRealizacionChange.bind(this),
                          //value: `${this.state.reunion.interes}`, 
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][Ii]|[Nn][Oo]",
                          required:"required",
                          readOnly: this.state.read
                          //disabled: "disabled"
                        },
                        {
                          label: "Iniciales del académico",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.reunion.iniciales_academico,
                          defaultValue: this.state.reunion.iniciales_academico,
                          onChange: this.onIniciales_academicoChange.bind(this),
                          //value: `${this.state.reunion.fecha}`,
                          minlength:"4",
                          maxlength:"4",
                          pattern: "[a-zA-Z]+",
                          //readonly:"readonly",
                        },
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control" placeholder= {`${this.state.reunion.observaciones}`} onChange= {this.onObservacionesChange.bind(this)}
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
                          placeholder: this.state.cumplimiento_objetivos,
                          defaultValue: this.state.cumplimiento_objetivos,
                          onChange: this.onCumplimiento_objetivosChange.bind(this),
                          //value: `${this.state.reunion.autogestion}`,
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][Ii]|[Nn][Oo]",
                          required:"required",
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
                  
                  
                            <input id="checkA" type="checkbox" name="A" value="A" onChange= {this.handleChangeBoxA.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Adicción a Internet, juegos y redes sociales</label>  < br/>
                            <input id="checkA1" type="checkbox" name="A1" value="A1" onChange= {this.handleChangeBoxA1.bind(this)}/>
                            &nbsp;&nbsp;
                            <label for="vehicle2">Madurez-Motivación</label> < br/>
                            <input id="checkB1" type="checkbox" name="B1" value="B1" onChange= {this.handleChangeBoxB1.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle3">Falta Base – Dificultad de Abstracción<br></br>y Desarrollo Formal</label> < br/>
                            <input id="checkB2" type="checkbox" name="B2" value="B2" onChange= {this.handleChangeBoxB2.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Dificultad de Comprensión al Profesor</label>  < br/>
                            <input id="checkB3" type="checkbox" name="B3" value="B3" onChange= {this.handleChangeBoxB3.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Otros: Trastornos de Sueño,<br></br>Prob. Dislexia, etc.</label>  < br/>
                            </Col>

                            <Col md={5} mdOffset={0.5}>
                            <input id="checkC" type="checkbox" name="C" value="C" onChange= {this.handleChangeBoxC.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Falta Hábitos de estudio</label>  < br/>
                            <input id="checkD" type="checkbox" name="D" value="D"onChange= {this.handleChangeBoxD.bind(this)}/>
                            &nbsp;&nbsp;
                            <label for="vehicle2">Dificultad de Concentración – Volitiva –<br></br>Depresión y otros psicol.</label> < br/>
                            <input id="checkE" type="checkbox" name="E" value="E" onChange= {this.handleChangeBoxE.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle3">Problemas de Salud Relevantes</label> < br/>
                            <input id="checkF" type="checkbox" name="F" value="F" onChange= {this.handleChangeBoxF.bind(this)}/> 
                            &nbsp;&nbsp;
                            <label for="vehicle1">Problemas Económicos y Familiares</label>  < br/>
                            <input id="checkG" type="checkbox" name="G" value="G" onChange= {this.handleChangeBoxG.bind(this)}/> 
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
                  
                
                          <input id="checkBEst" type="checkbox" name="BEst" value="BEst" onChange= {this.handleChangeBoxBEst.bind(this)}/> 
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
                                  placeholder: this.state.fechaBEst,
                                  defaultValue: this.state.fechaBEst,
                                  onChange: this.onFechaBEstChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" placeholder= {`${this.state.observacionBEst}`} onChange= {this.handleChangeObservacionBEst.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          <input id="checkDCP" type="checkbox" name="DCP" value="DCP" onChange= {this.handleChangeBoxDCP.bind(this)}/>
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
                                  placeholder: this.state.fechaDCP,
                                  defaultValue: this.state.fechaDCP,
                                  onChange: this.onFechaDCPChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" placeholder= {`${this.state.observacionDCP}`} onChange= {this.handleChangeObservacionDCP.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          <input id="checkSE" type="checkbox" name="SE" value="SE" onChange= {this.handleChangeBoxSE.bind(this)}/> 
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
                                  placeholder: this.state.fechaSE,
                                  defaultValue: this.state.fechaSE,
                                  onChange: this.onFechaSEChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" placeholder= {`${this.state.observacionSE}`} onChange= {this.handleChangeObservacionSE.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          <input id="checkDC" type="checkbox" name="DC" value="DC" onChange= {this.handleChangeBoxDC.bind(this)}/> 
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
                                  placeholder: this.state.fechaDC,
                                  defaultValue: this.state.fechaDC,
                                  onChange: this.onFechaDCChange.bind(this)
                                  //placeholder: "usuario@mail.udp.cl",
                                  //disabled: "disabled"
                                }
                              ]}
                            />
                            <label>
                              Observaciones <br />
                              <textarea  className="form-control" placeholder= {`${this.state.observacionDC}`} onChange= {this.handleChangeObservacionDC.bind(this)}
                                  rows="1" cols='50'  /> 
                            </label>
                          </div>
                          </Col>

                          <Col md={5} mdOffset={0.5}>
                          <h4>Recomendaciones</h4>
                          <input id="checkHE" type="checkbox" name="HE" value="HE" onChange= {this.handleChangeBoxHE.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Hábitos de Estudio</label>  < br/>
                          <input id="checkMTC" type="checkbox" name="MTC" value="MTC" onChange= {this.handleChangeBoxMTC.bind(this)}/>
                          &nbsp;&nbsp;
                          <label for="vehicle2">Malla, Toma de Ramos, Carga Académica</label> < br/>
                          <input id="checkSe" type="checkbox" name="Se" value="Se" onChange= {this.handleChangeBoxSe.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle3">Derivado a Profesores</label> < br/>
                          <input id="checkDAP" type="checkbox" name="DAP" value="DAP" onChange= {this.handleChangeBoxDAP.bind(this)}/> 
                          &nbsp;&nbsp;
                          <label for="vehicle1">Derivado a Apoyo Psicológico</label>  < br/>
                          <input id="checkCAP" type="checkbox" name="CAP" value="CAP" onChange= {this.handleChangeBoxCAP.bind(this)}/> 
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
                    <Button bsStyle="info" pullRight fill onClick={this.onSubmit.bind(this)}>
                      Guardar Reunión
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

export default Modificar_reunion;
  