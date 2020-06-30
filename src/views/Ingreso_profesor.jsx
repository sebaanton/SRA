import React, { Component, useState } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/faces/face-3.jpg";
import { useHistory } from "react-router-dom";
//const Nombre = "Juan"

const apiUrl = 'http://localhost:8000';


function Ingreso_profesor() {

  const history = useHistory();
  const onSubmit = async () => {
    try {
      await setAlumno();
      await setNewAlumno();
      const causalCount = await getCausal();
      const currentDay = new Date();
      var semestre;
      if (currentDay.getMonth() <= 6) {
        semestre = 1;
      } else {
        semestre = 2;
      }

      const asignaturaCount = asignatura_reportada.split(",");
      var año = new Date().getFullYear();

      const data2 = await axios.get(`${apiUrl}/reporte`);
      console.log(data2.data[0].alumno)
      var i;
      var id_reporte = 0;
      for (i; i < data2.data.length; i++) {
        if ((data2.data[i].alumno == rut) & ((data2.data[i].año == año) & (data2.data[i].semestre == semestre))) {
          id_reporte = data2.data[i].id;
        }
      }
      var año_semestre_m = año * 10 + semestre;
      if (id_reporte == 0) {
        const prioridad = 0.3 * causalCount + 0.7 * (asignaturaCount.length);
        if (prioridad > 4) {
          prioridad = 4;
        }
        console.log(año)
        console.log(semestre)
        console.log(tipo_causal)
        console.log(prioridad)
        console.log(observacion)
        console.log(causalCount)
        console.log(rut)
        const data = await axios.post(`${apiUrl}/reporte/`, {

          año: new Date().getFullYear(),
          semestre: semestre,
          tipo_causal: '0',
          asignaturas_reportadas: asignaturaCount.length,
          prioridad: Math.round(prioridad),
          observacion: observacion,
          reiteraciones_causal: causalCount,
          tipo_ingreso: 'reportado',
          alumno: rut,
        }, function () { console.log(data) });
        console.log(data.data.id)
        await setAsignatura(data.data.id)
        history.push("/profesor/Buscar_alumno");
      } else {
        const prioridad = 0.3 * causalCount + 0.7 * (asignaturaCount.length);
        if (prioridad > 4) {
          prioridad = 4;
        }
        const cantidad_asignaturas = await getCantAsigna(id_reporte);
        console.log(año)
        console.log(semestre)
        console.log(tipo_causal)
        console.log(prioridad)
        console.log(observacion)
        console.log(causalCount)
        console.log(rut)
        const { data } = await axios.put(`${apiUrl}/reporte/${id_reporte}`, {
          año: new Date().getFullYear(),
          semestre: semestre,
          tipo_causal: '0',
          asignaturas_reportadas: cantidad_asignaturas,
          prioridad: Math.round(prioridad),
          observacion: observacion,
          reiteraciones_causal: causalCount,
          tipo_ingreso: 'reportado',
          alumno: rut,
        }, function () { console.log(data) });

        await setAsignatura(data.data.id)
        history.push("/profesor/Buscar_alumno");
      }
    } catch (e) {
      alert(e.message);
    }
  }

  async function getCausal() {
    var count = 0;
    const data = await axios.get(`${apiUrl}/causal/`);
    var i
    for (i = 0; i < data.data.length; i++) {
      if (data.data[i].tipo == tipo_causal) {
        count = count + await getRep(data.data[i].reporte)
      }
    }
    console.log(count);
    return count
  }
  async function getRep(pk) {
    var count = 0;
    const data = await axios.get(`${apiUrl}/reporte/${pk}/`);
    if (data.data.alumno == rut) {
      count = count + 1;
    }
    console.log(count)
    return count
  }
  async function setAlumno() {
    var formData = new FormData();
    console.log(rut)
    console.log(nombre)
    console.log(correo)
    console.log(localStorage.getItem('userID'))
    formData.append('rut', rut);
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('estado_actual', 'reportado');
    formData.append('coordinador', 186363558);// no le pasa el formData
    console.log(formData)
    try {
      console.log(formData)
      await axios.put(`${apiUrl}/alumno/${rut}/`, formData);
    } catch (e) {

    }
  }
  async function setNewAlumno() {
    var formData = new FormData();
    console.log(rut)
    console.log(nombre)
    console.log(correo)
    formData.append('rut', rut);
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('estado_actual', 'reportado');
    formData.append('coordinador', 186363558);
    try {
      console.log(formData)
      await axios.post(`${apiUrl}/alumno/`, formData);
    } catch (e) {

    }
  }


  async function setAsignatura(rep) {
    const currentDay = new Date();
    var semestre;
    if (currentDay.getMonth() <= 7) {
      semestre = 1;
    } else {
      semestre = 2;
    }
    var año_C = new Date().getFullYear();
    var año_semestre = año_C * 10 + semestre;
    console.log(asistencia)
    console.log(interes)
    console.log(calificacion)
    console.log(año_semestre)
    console.log(observacion)
    console.log(asignatura_reportada)
    console.log(rep)
    const data9 = await axios.get(`${apiUrl}/asignatura/`)
    var p;
    for (p = 0; p < data9.data.length; p++) {
      if (data9.data[p].glosa == asignatura_reportada) {
        console.log(asignatura_reportada)
        console.log(data9.data[p].glosa)
        console.log(data9.data[p].id)
        const data = await axios.post(`${apiUrl}/asignatura_reportada/`, {
          asistencia: asistencia,
          participacion: interes,
          notas_ponderadas: calificacion,
          año: año_semestre,
          observaciones: observacion,
          asignatura: data9.data[p].id,
          reporte: rep,
        }, function(){
          console.log(data9)
        });
      } else {
        const data = await axios.post(`${apiUrl}/asignatura_reportada/`, {
          asistencia: asistencia,
          participacion: interes,
          notas_ponderadas: calificacion,
          año: año_semestre,
          observaciones: observacion,
          asignatura: 2,
          reporte: rep,
        });
      }
    }

  }
  async function getCantAsigna(id_reporte) {// dado un id_reporte, calcula la cantidad de asignaturas reportadas
    var count = 0;
    /*const año = new Date().getFullYear().toString();
    const currentDay = new Date();
    var semestre;
    if (currentDay.getMonth() <= 6){
      semestre = 1;
    } else {
      semestre = 2;
    }
    var año_semestre_m = año.concat(semestre.toString);
    */
    var i = 0;
    const data = await axios.get(`${apiUrl}/asignatura_reportada/`);
    for (i = 0; i < data.length; i++) {
      //if ((data.data[i].reporte == id_reporte) & (data[i].año_semestre == año_semestre_m)){
      if ((data.data[i].reporte == id_reporte)) {
        count = count + 1;
      }
    }
    console.log(count)
    return count;
  }

  const [rut, setRut] = useState({
    rut: ''
  }, function () {
    console.log(rut)
  });
  const [correo, setCorreo] = useState({
    correo: ''
  });
  const [nombre, setNombre] = useState({
    nombre: ''
  });
  const [calificacion, setCalificacion] = useState({
    calificacion: 0
  });
  const [asistencia, setAsistencia] = useState({
    asistencia: ''
  });
  const [interes, setInteres] = useState({
    interes: ''
  });
  const [tipo_ingreso, setTipo_ingreso] = useState({
    tipo_ingreso: ''
  });

  const [asignatura_reportada, setAsignatura_reportada] = useState({
    asignatura_reportada: ''
  });

  const [tipo_causal, setTipo_causal] = useState({
    tipo_causal: '0'
  });
  const [observacion, setObservacion] = useState({
    observacion: ''
  });
  function handleChangeRut(event) {
    setRut(event.target.value);
  }
  function handleChangeCorreo(event) {
    setCorreo(event.target.value);
  }
  function handleChangeNombre(event) {
    setNombre(event.target.value);
  }
  function handleChangeCalificacion(event) {
    setCalificacion(event.target.value);
  }
  function handleChangeAsistencia(event) {
    setAsistencia(event.target.value);
  }
  function handleChangeInteres(event) {
    setInteres(event.target.value);
  }
  function handleChangeTipo_ingreso(event) {
    setTipo_ingreso(event.target.value);
  }
  function handleChangeAsignatura_reportada(event) {
    setAsignatura_reportada(event.target.value);
  }
  function handleChangeObservacion(event) {
    setObservacion(event.target.value);
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Card
              title="Reporte profesor"
              content={
                <form action="/send.php" >
                  <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-3"]}
                    properties={[
                      {
                        label: "Nombre completo",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Juan",
                        minlength: "3",
                        maxlength: "25",
                        pattern: "[a-zA-Z]+",
                        required: "required",
                        title: "Letras de la A a la Z (mayúsculas o minúsculas)",
                        onChange: handleChangeNombre
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
                        title: "Números enteros de 0 al 9 y la letra k en su ́ultima posición (mayúscula o minúscula)",
                        onChange: handleChangeRut
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
                        onChange: handleChangeCalificacion
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
                        onChange: handleChangeAsistencia
                      },
                      {
                        label: "Interés Percibido",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Alto-Medio-Bajo",
                        minlength: "4",
                        maxlength: "5",
                        pattern: "[aA][lL][tT][oO]|[mM][eE][dD][iI][oO]|[bB][aA][jJ][oO]",
                        required: "required",
                        title: "Números decimales entre 1.0 y 7.0",
                        onChange: handleChangeInteres
                      },

                    ]}
                  />

                  <FormInputs
                    ncols={["col-md-6", "col-md-4"]}
                    properties={[


                      {
                        label: "Email",
                        type: "email",
                        bsClass: "form-control",
                        placeholder: "usuario@mail.udp.cl",
                        defaultValue: "",
                        //Value: email,
                        minlength: "15",
                        maxlength: "50",
                        pattern: "[a-zA-z0-9.]+@mail.udp.cl",
                        required: "required",
                        title: "El correo debe ser el institucional",
                        onChange: handleChangeCorreo
                      },
                      {
                        label: "Asignatura",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Calculo 1",
                        minlength: "5",
                        maxlength: "50",
                        pattern: "[a-zA-Z]+",
                        required: "required",
                        title: "Letras de la A a la Z (mayúsculas o minúsculas)",
                        onChange: handleChangeAsignatura_reportada
                      },
                    ]}
                  />


                  <form>
                    <label>
                      Observaciones <br />
                      <textarea className="form-control"
                        rows="5" cols='80' value={observacion} onChange={handleChangeObservacion} defaultValue="" />

                    </label>
                  </form>
                  <br />
                  <br />

                  <Button bsStyle="info" pullRight fill onClick={onSubmit}>
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

export default Ingreso_profesor;
