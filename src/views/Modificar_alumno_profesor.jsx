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


class Ingreso_profesor extends Component {
  state = {
    alumno: [],
    reporteDisplay: [],
    asignatura_reportada: [],
    asignatura_datos: [],
    nombre: "",// alumno
    rut: "",// reporte + alumno
    calificacion: "",// asignatura_reportada
    asistencia_n: "",// asignatura_reportada
    interes_n: "",// asignatura_reportada
    email: "",// alumno
    ramo: "",// reporte + asignatura_reportad (id del ramo) reportado
    id_asignatura_reportada: "",
    observaciones: "",// reporte + asignatura_reportada
    semestre: "",// reporte
    asignaturas_reportadas: "", //  cantidad
    prioridad: "", // 
    reiteraciones_causal: "", // 
    tipo_ingreso: "reportado", // 
    año_semestre: "", // año+semestre
    id_reporte_n: "", // 
  };

  componentDidMount() {

    const currenturl = window.location.pathname
    const largo = currenturl.length
    const id = currenturl.slice(36, largo)
    //console.log(id)
    axios.get(`http://localhost:8000/reporte/${id}`).then(res =>{
      this.setState({
        rut: res.data.alumno
      }, function(){
        //console.log(this.state.rut)
      })
    
    var asig = []
    var i
    var calif = 0
    var asis = 0
    var inter = 0
    var interTex = ""
    var asignatura = 0


    const alumnoRUT = this.props.match.params.alumnoRUT;
    //console.log(this.state.rut)

    axios.get(`http://localhost:8000/alumno/${this.state.rut}`).then(res => {
      this.setState({
        alumno: res.data,
        nombre: res.data.nombre,
        email: res.data.correo
      },
        //console.log(res.data.rut)
      );

      //console.log("hol")
      axios.get(`http://localhost:8000/reporte/${id}`).then(res2 => {
        
        this.setState({
          reporteDisplay: res2.data,
          reporte_id: id,
        }, function () {
          //console.log(this.state.reporteDisplay.id);
          //console.log(this.state.reporteDisplay);
        }
        );


        axios.get(`http://localhost:8000/asignatura_reportada/`).then(res4 => {
          var j;
          const id_reporte = this.state.reporteDisplay.id
          for (j = 0; j < res4.data.length; j++) {
            if (res4.data[j].reporte == id_reporte) {
              //console.log(res4.data[j])
              asig = res4.data[j]
            }
          }
          console.log(asig)

          this.setState({
            asignatura_reportada: asig,
            asistencia_n: asig.asistencia,
            calificacion: asig.notas_ponderadas/10,
            interes_n: asig.participacion,
            observaciones: asig.observaciones,
            año_semestre: asig.año_semestre,
            //id_reporte_n: id_reporte,
            id_asignatura_reportada: asig.id // id de la asignatura
          }, function () {
            //console.log(this.state.id_asignatura_reportada);
          }
          );



          axios.get(`http://localhost:8000/asignatura/`).then(res5 => {
            var k;
            const id_asignatura = this.state.asignatura_reportada.asignatura
            this.setState({
              ramo: id_asignatura
            })
            console.log(id_asignatura)
            console.log(res5.data)
            for (k = 0; k < res5.data.length; k++) {
              if (res5.data[k].id == id_asignatura) {
                //console.log(res5.data[k])
                asignatura = res5.data[k].glosa
                console.log(asignatura)
              }
            }
            //console.log(asig)

            this.setState({
              asignatura_datos: asignatura
            }, function () {
              console.log(this.state.asignatura_datos);
            }
            );
          });
        });
      });
    });
    this.setSemestre()
  });
  }
  setIDreporte(id_r) {
    this.setState({
      id_reporte_n: id_r,
    })
  }
  setRamo(ramo_id) {
    console.log(ramo_id)//check
    this.setState({
      ramo: ramo_id
    })
  }
  setSemestre() {//check
    const currentDay = new Date();
    var semestre_s;
    if (currentDay.getMonth() <= 7) {
      semestre_s = 1;
    } else {
      semestre_s = 2;
    }
    var año_C = new Date().getFullYear().toString();
    var año_semestre_c = año_C.concat(semestre_s.toString);
    this.setState({
      semestre: semestre_s,
      año_semestre: año_semestre_c

    })
  }
  
  getCausal(reporte_id) {//no se usa XD
    var tipo_c = "";
    const data = axios.get(`${apiUrl}/causal/`);
    var i
    for (i = 0; i < data.data.length; i++) {
      if (data.data[i].reporte == reporte_id) {
        tipo_c = data.data[i].tipo
      }
    } 
    console.log(tipo_c);
    return tipo_c
  }

  onAsignaturaChange(event){// busca la asignatura en la bd
    var cursito = event.target.value
    cursito = cursito.toUpperCase()
    var id_ramo_reportado
    axios.get(`http://localhost:8000/asignatura/`).then(res5 => {
      var k;
      
      for (k = 0; k < res5.data.length; k++) {
          if (res5.data[k].glosa == cursito) {
            //console.log(res5.data[k])
            id_ramo_reportado = res5.data[k].id
          }
        }
        console.log(id_ramo_reportado) 
      });
    this.setState({
      ramo: id_ramo_reportado
    }, function(){
      console.log(this.state.ramo)
    })
  }
  onRutChange(event) {
    this.setState({
      rut: event.target.value
    });
  }
  onNombreChange(event) {
    this.setState({
      nombre: event.target.value
    });
  }
  onCalificacionChange(event) {
    this.setState({
      calificacion: event.target.value
    });
  }
  onAsistenciaChange(event) {
    this.setState({
      asistencia: event.target.value
    });
  }
  onInteres_nChange(event) {
    this.setState({
      interes_n: event.target.value
    });
  }
  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  onRamoChange(event) {
    this.setState({
      ramo: event.target.value
    });
  }
  onObservacionesChange(event) {
    this.setState({
      observaciones: event.target.value
    }, function(){
      console.log(this.state.observaciones)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    var formData_alumno = new FormData();
    var formData_reporte = new FormData();
    var formData_asignatura = new FormData();
    console.log(this.state.rut)
    console.log(this.state.nombre)
    console.log(this.state.email)
    formData_alumno.append('rut', this.state.rut);
    formData_alumno.append('nombre', this.state.nombre);
    formData_alumno.append('correo', this.state.email);
    formData_alumno.append('estado_actual', 'reportado');
    formData_alumno.append('coordinador', 10000002);// -> rut de elliott
    axios.put(`${apiUrl}/alumno/${this.state.rut}/`, formData_alumno);

    // cantidad de asignaturas y la prioridad no debiese verse afectada por el ingreso de un profesor

    //formData_reporte.append('asignaturas_reportadas', this.state.asignaturas_reportadas);
    //formData_reporte.append('prioridad', this.state.prioridad);

    formData_asignatura.append('notas_ponderadas', this.state.calificacion*10);
    formData_asignatura.append('asistencia', this.state.asistencia_n);
    formData_asignatura.append('participacion', this.state.interes_n);
    console.log(this.state.reporte_id)
    formData_asignatura.append('asignatura', this.state.ramo);
    formData_asignatura.append('observaciones', this.state.observaciones);
    formData_asignatura.append('año_semestre', this.state.año_semestre);
    formData_asignatura.append('reporte', this.state.reporte_id);
    //formData_asignatura.append('profesor', localStorage.getItem('userID'));////////////////////////////
    axios.put(`${apiUrl}/asignatura_reportada/${this.state.id_asignatura_reportada}/`, formData_asignatura).then(res=>{
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
                title="Detalle de alumno"
                content={
                  <form onSubmit={this.onSubmit.bind(this)}>
                  <form action="/send.php" >
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-3"]}
                      properties={[
                        {
                          label: "Nombre Completo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Juan",
                          minlength: "3",
                          maxlength: "50",
                          pattern: "[a-zA-Z ]+",
                          required: "required",
                          title: "Letras de la A a la Z (mayúsculas o minúsculas)",
                          defaultValue: this.state.alumno.nombre,
                          onChange: this.onNombreChange.bind(this),
                        },

                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          minlength: "9",
                          maxlength: "10",
                          pattern: "[^a-zA-Z][0-9]{7,8}+-[0-9|Kk]",
                          required: "required",
                          readonly:"readonly",
                          title: "Números enteros de 0 al 9 y la letra k en su ́ultima posición (mayúscula o minúscula)",
                          defaultValue: this.state.alumno.rut,
                          onChange: this.onRutChange.bind(this),
                        },
                        {
                          label: "Tipo de ingreso",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Reportado",
                          defaultValue: "Reportado",
                          minlength: "9",
                          maxlength: "12",
                          pattern: "[aA][uU][tT][oO]|[Cc][Oo][nN][Ss][Uu][lL][tT][aA]|[Rr][eE][Pp][oO][rR][tT][aA][dD][oO]",
                          required: "required",
                          title: "Reportado o autoconsulta (en mayúscula o minúscula)",
                          disabled: "disabled",
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
                          minlength: "3",
                          maxlength: "3",
                          pattern: "[0-6][.][0-9]|[7][.][0]",
                          required: "required",
                          title: "Números decimales entre 1.0 y 7.0",
                          defaultValue: this.state.calificacion,
                          onChange: this.onCalificacionChange.bind(this),
                        },
                        {
                          label: "Porcentaje de Asistencia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "10%",
                          minlength: "1",
                          maxlength: "3",
                          pattern: "[0-9]|[0-9][0-9]|[1][0][0]",
                          required: "required",
                          title: "Números entero entre 0 y 100",
                          defaultValue: this.state.asignatura_reportada.asistencia,
                          onChange: this.onAsistenciaChange.bind(this),
                        },
                        {
                          label: "Interés Percibido(1 al 3)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "2",
                          minlength: "1",
                          maxlength: "1",
                          pattern: "[1]|[2]|[3]",
                          required: "required",
                          title: "Números decimales entre 1.0 y 7.0",
                          defaultValue: this.state.asignatura_reportada.participacion,
                          onChange: this.onInteres_nChange.bind(this),
                        },

                      ]}
                    />

                    <FormInputs
                      ncols={["col-md-6", "col-md-5"]}
                      properties={[


                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "usuario@mail.udp.cl",

                          //Value: email,
                          minlength: "15",
                          maxlength: "50",
                          pattern: "[a-zA-z0-9.]+@mail.udp.cl",
                          required: "required",
                          title: "El correo debe ser el institucional",
                          defaultValue: this.state.alumno.correo,
                          onChange: this.onEmailChange.bind(this),
                          //onChange: handleChangeEmail
                        },
                        {
                          label: "Asignatura Reportada",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Calculo 1",
                          minlength: "5",
                          maxlength: "50",
                          pattern: "[a-zA-Z ]+",
                          required: "required",
                          title: "Letras de la A a la Z (mayúsculas o minúsculas)",
                          defaultValue: this.state.asignatura_datos,
                          onChange: this.onAsignaturaChange.bind(this),
                          //onChange: handleChangeAsignatura_reportada          
                        },
                      ]}
                    />


                    <form>
                      <label>
                        Observaciones <br />
                        <textarea className="form-control" placeholder={this.state.asignatura_reportada.observaciones} onChange= {this.onObservacionesChange.bind(this)}
                          rows="5" cols='68' ></textarea>

                      </label>
                    </form>
                    <br />
                    <br />

                    <Button bsStyle="info" pullRight fill type='submit'>
                      Actualizar Datos
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

export default Ingreso_profesor;
