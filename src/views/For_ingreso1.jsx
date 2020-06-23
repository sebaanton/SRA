import React, { Component, useState } from "react";
import jsonToFormData from '@ajoelp/json-to-formdata';
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
import Calendar from "components/Calendar/Calendar.jsx";
import FileInput from "components/FileInput";
import avatar from "assets/img/faces/face-3.jpg";
import { useHistory } from "react-router-dom";
import { contextType } from "react-notification-system";

const apiUrl = 'http://localhost:8000';

function For_ingreso1 () {
  const history = useHistory();
  const onSubmit = async () => {
    try {
      await setAlumno();
      await setNewAlumno();
      const causalCount =  await getCausal();
      console.log(causalCount);
      const currentDay = new Date();
      var semestre;
      if (currentDay.getMonth() <= 6){
        semestre = 1;
      } else {
        semestre = 2;
      }
      const asignaturaCount = asignatura_reportada.split(",");
      const año = new Date().getFullYear().toString();
      const { data } = await axios.post(`${apiUrl}/reporte/`, {
                                                               año: new Date().getFullYear().toString(),
                                                               semestre: semestre.toString(),
                                                               tipo_causal: tipo_causal,
                                                               asignaturas_reportadas: asignaturaCount.length.toString(),
                                                               prioridad: '1',
                                                               observacion: observacion,
                                                               reiteraciones_causal: causalCount.toString(),
                                                               tipo_ingreso: 'causal',
                                                               alumno: rut
                                                              });
      await setCausal(data)
      history.push("/admin/notifications");
    } catch (e) {
      alert(e.message);
    }
  }
  async function getCausal(){
    var count = 0;
    const data = await axios.get(`${apiUrl}/causal/`);
    var i
    for (i=0; i< data.data.length; i++) {
      if (data.data[i].tipo == tipo_causal) {
        count = count + await getRep(data.data[i].reporte)
      }
    }
    console.log(count);
    return count
  }
  async function getRep(pk){
    var count = 0;
    const data = await axios.get(`${apiUrl}/reporte/${pk}/`);
    if (data.data.alumno == rut){
      count = count + 1;
    }
    return count
  }
  async function setAlumno(){
    var formData = new FormData();
    formData.append('rut', rut);
    formData.append('nombre', nombre);
    formData.append('correo', email);
    formData.append('año_nacimiento', año_nacimiento);
    formData.append('año_ingreso', año_ingreso);
    formData.append('semestre_ingreso', semestre_ingreso);
    formData.append('telefono', telefono);
    formData.append('carrera_origen', carrera_origen);
    formData.append('estado_actual', 'causal');
    formData.append('coordinador', localStorage.getItem('userID'));
    formData.append('copia_registro', file);
    await axios.put(`${apiUrl}/alumno/${rut}/`, formData);
  }
  async function setNewAlumno(){
    var formData = new FormData();
    formData.append('rut', rut);
    formData.append('nombre', nombre);
    formData.append('correo', email);
    formData.append('año_nacimiento', año_nacimiento);
    formData.append('año_ingreso', año_ingreso);
    formData.append('semestre_ingreso', semestre_ingreso);
    formData.append('telefono', telefono);
    formData.append('carrera_origen', carrera_origen);
    formData.append('estado_actual', 'causal');
    formData.append('coordinador', localStorage.getItem('userID'));
    formData.append('copia_registro', file);
    try{
      await axios.post(`${apiUrl}/alumno/`, formData);
    }catch(e){

    }
  }
  async function setCausal(rep){
    const data = await axios.post(`${apiUrl}/causal/`, {año: new Date().getFullYear().toString(),
                                                            tipo: tipo_causal,
                                                            condiciones: condiciones,
                                                            reporte: rep.id
                                                           });
  }
  const [rut, setRut] = useState({
    rut: ''
  });
  const [email, setEmail] = useState({
    email: ''
  });
  const [nombre, setNombre] = useState({
    nombre: ''
  });
  const [año_nacimiento, setAño_nacimiento] = useState({
    año_nacimiento: ''
  });

  const [telefono, setTelefono] = useState({
    telefono: ''
  });
  const [año_ingreso, setAño_ingreso] = useState({
    año_ingreso: ''
  });

  const [semestre_ingreso, setSemestre_ingreso] = useState({
    semestre_ingreso: ''
  });
  const [carrera_origen, setCarrera_origen] = useState({
    carrera_origen: ''
  });
  const [tipo_ingreso, setTipo_ingreso] = useState({
    tipo_ingreso: ''
  });
  const [asignatura_reportada, setAsignatura_reportada] = useState({
    asignatura_reportada: ''
  });

  const [tipo_causal, setTipo_causal] = useState({
    tipo_causal: ''
  });
  const [condiciones, setCondiciones] = useState({
    condiciones: ''
  });

  const [observacion, setObservacion] = useState({
    observacion: ''
  });
  const [file, setFile] = useState({
    file: ''
  });
  function handleChangeRut(event) {
    setRut(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangeNombre(event) {
    setNombre(event.target.value);
  }
  function handleChangeAño_nacimiento(event) {
    setAño_nacimiento(event.target.value);
  }
  function handleChangeTelefono(event) {
    setTelefono(event.target.value);
  }
  function handleChangeAño_ingreso(event) {
    setAño_ingreso(event.target.value);
  }
  function handleChangeSemestre_ingreso(event) {
    setSemestre_ingreso(event.target.value);
  }
  function handleChangeCarrera_origen(event) {
    setCarrera_origen(event.target.value);
  }
  function handleChangeTipo_ingreso(event) {
    setTipo_ingreso(event.target.value);
  }
  function handleChangeAsignatura_reportada(event) {
    setAsignatura_reportada(event.target.value);
  }
  function handleChangeTipo_causal(event) {
    setTipo_causal(event.target.value);
  }
  function handleChangeCondiciones(event) {
    setCondiciones(event.target.value);
  }
  function handleChangeObservacion(event) {
    setObservacion(event.target.value);
  }
  function onFileChange(event) {
    setFile(event.target.files[0])
  }
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Card
              title="Ingreso del alumno por causal"
              content={
                <form>
                  
                  <FormInputs
                    ncols={["col-md-5", "col-md-7"]}
                    properties={[
                      {
                        label: "RUT",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "123456789-8",
                        defaultValue: "",
                        Value: rut,
                        onChange: handleChangeRut
                      },
                      {
                        label: "Email",
                        type: "email",
                        bsClass: "form-control",
                        placeholder: "usuario@mail.udp.cl",
                        defaultValue: "",
                        Value: email,
                        onChange: handleChangeEmail
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    properties={[
                      {
                        label: "Nombre Completo",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Juan",
                        defaultValue: "",
                        Value: nombre,
                        onChange: handleChangeNombre                      
                      },
                      {
                        label: "Año de Nacimiento",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "1970", 
                        defaultValue: "",
                        Value: año_nacimiento,
                        onChange: handleChangeAño_nacimiento
                      },
                      
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-3", "col-md-3",  "col-md-3"]}
                    properties={[
                      
                      {
                        label: "Teléfono",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "+56997856443",
                        defaultValue: "",
                        Value: telefono,
                        onChange: handleChangeTelefono
                      },
                      {
                        label: "Año de ingreso",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "2016",
                        defaultValue: "",
                        Value: año_ingreso,
                        onChange: handleChangeAño_ingreso
                      },
                      {
                        label: "Semestre de ingreso",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "1er semestre",
                        defaultValue: "",
                        Value: semestre_ingreso,
                        onChange: handleChangeSemestre_ingreso
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-7"]}
                    properties={[
                      
                      {
                        label: "Universidad o carrera de origen (si corresponde)",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "UDP, industrias",
                        defaultValue: "",
                        Value: carrera_origen,
                        onChange: handleChangeCarrera_origen
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    properties={[
                      {
                        label: "Estado actual",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Rehabilitado",
                        disabled: "disabled",
                        defaultValue: "En causal",
                      },

                      {
                        label: "Tipo de ingreso",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Rehabilitado",
                        disabled: "disabled",
                        defaultValue: "Causal",
                        Value: tipo_ingreso,
                        onChange: handleChangeTipo_ingreso
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    properties={[
                      
                      {
                        label: "Ramos que motivan la causal",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Calculo II,Algebra",
                        defaultValue: "",
                        Value: asignatura_reportada,
                        onChange: handleChangeAsignatura_reportada
                      },
                      {
                        label: "Número de excepción",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "1",
                        defaultValue: "",
                        Value: tipo_causal,
                        onChange: handleChangeTipo_causal
                      },
                    ]}
                  />
                  <form>
                    <label>
                      Condiciones impuestas por la carrera <br />
                      <textarea  className="form-control"
                          rows="10" cols='80'  value={condiciones} onChange={handleChangeCondiciones} defaultValue=""/> 
                          
                    </label>   
                  </form>
                  <br />

                  <form>
                    <label>
                      Observaciones <br />
                      <textarea  className="form-control"
                          rows="5" cols='80'   value={observacion} onChange={handleChangeObservacion} defaultValue=""/> 
                          
                    </label>   
                  </form>
                  <br />
                  <form>
                    <input type="file" onChange={onFileChange} /> 
                  </form>
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

export default For_ingreso1;
  