/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Notificaciones_m from "components/Notificaciones/Notificaciones.js";
import axios from "axios";

class TableList extends React.Component {
  /*constructor(props){
    super(props)
    this.state = {
      data: [],
      estado: ['Realizada','Próxima','No realizada'],
      nombre_alumno: [],
      fecha: [],
      hora: [],
      medio: ['Zoom', 'GoogleMeet', 'presencial', 'llamada', 'correo'],
      nombre_reu_contacto: [],
      conectores: ['con', 'mediante'],
      estilo: ['success','warning', 'danger'],
    }
    this.state = { 
      data: [{
        "datos varios"
    }]
    }
  }*/
  state = {
    data: [],
    estado: ['Realizada', 'Próxima', 'No realizada'],
    nombre_alumno: [],
    fecha: ['05/05/2020'],
    hora: [],
    medio: ['Zoom', 'GoogleMeet', 'correo', 'presencial', 'telefónica'],
    nombre_reu_contacto: ['Contacto inicial'],
    conectores: ['con', 'mediante', 'vía'],
    estilo: ['success', 'warning', 'danger'],
  }
  /*async componentDidMount(){
    await this.fetchNotificaciones()

  }
  fetchNotificaciones = async () => {
    let res = await fetch('http://localhost:8000/table')
    let data = await res.json()
    console.log()
  }*/
  async componentDidMount() {
    const data_contacto = await axios.get(`http://localhost:8000/contacto/`);
    const data_reu = await axios.get(`http://localhost:8000/reunion/`);
    const currentDay = new Date();
    var day = new Date(data_contacto.data[4].fecha, Number).toString().slice(0,10)
    var i;
    var j;
    console.log(day)
    if (day > currentDay) {
      console.log("fecha en 0 es mayor a la actual")
    } else {
      console.log("fecha actual es mayor a la fecha en 0")
    }
    for (i = 0; i < data_contacto.data.length; i++) {
      var condicion = false;
      for (j = 0; j < data_reu.data.length; j++) {
        if ((data_contacto.data[i].id == data_reu.data[j].contacto)) {
          var condicion = true;
          if (data_reu.data[j].realizacion == false) {
            var day1 = new Date(data_reu.data[j].fecha)
            //console.log("holi")
            //si el id del contacto está en una reunion, y la reunion no ha sido realizada, busca si hay alguna próxima o vencida
            if (currentDay > day1) { //atrasada
              var horaa = ((data_reu.data[j].hora - ((data_reu.data[j].hora) % 100)) / 100);
              var minutoos = (data_reu.data[j].hora) % 100;
              await this.onAddItem(this.state.estado[2], 'Reunion', data_reu.data[j].medio_reunion, this.state.estilo[2], data_reu.data[j].nombre, this.state.conectores[2], data_reu.data[j].fecha, horaa, minutoos)
            } else {//proxima
              var horaa = ((data_reu.data[j].hora - ((data_reu.data[j].hora) % 100)) / 100);
              var minutoos = (data_reu.data[j].hora) % 100;
              await this.onAddItem(this.state.estado[1], 'Reunion', data_reu.data[j].medio_reunion, this.state.estilo[1], data_reu.data[j].nombre, this.state.conectores[2], data_reu.data[j].fecha, horaa, minutoos)
            }
          }
        }
      }
      if (condicion == false) {
        var day2 = new Date(data_contacto.data[i].fecha)
        console.log(currentDay)
        console.log(data_contacto.data[i].fecha)
        if (currentDay > day2) {//atrasada
          console.log(currentDay)
          console.log(data_contacto.data[i].fecha)
          var horaa = ((data_contacto.data[i].hora - ((data_contacto.data[i].hora) % 100)) / 100);
          var minutoos = (data_contacto.data[i].hora) % 100;
          await this.onAddItem(this.state.estado[2], 'Contacto', data_contacto.data[i].medio_contacto, this.state.estilo[2], data_contacto.data[i].nombre, this.state.conectores[2], data_contacto.data[i].fecha, horaa, minutoos)
        } else {
          var horaa = ((data_contacto.data[i].hora - ((data_contacto.data[i].hora) % 100)) / 100);
          var minutoos = (data_contacto.data[i].hora) % 100;
          await this.onAddItem(this.state.estado[1], 'Contacto', data_contacto.data[i].medio_contacto, this.state.estilo[1], data_contacto.data[i].nombre, this.state.conectores[2], data_contacto.data[i].fecha, horaa, minutoos)

        }
      }
    }
  }
  /*estado_c, -> this.state.estado[i]: 0:realizada, 1:proxima, 2 no realizada
  medio_c, -> this.state.medio[i]: 0:zoom, 1 googlemeet, 2: correo, 3:presencial, 4: llamada
  estilo_c, -> this.state.estilo[i]: 0:verde, 1:amarillo, 2:rojo
  nombre_c, 
  conector_c, -> this.state.conectores[i]: 0: con, 1: mediante, 2:via
  fecha_c*/
  onAddItem = async (estado_c, tipo_c, medio_c, estilo_c, nombre_c, conector_c, fecha_c, hora_c, minutos_c) => {
    const value = { estado: estado_c, tipo: tipo_c, medio: medio_c, estilo: estilo_c, nombre: nombre_c, conector: conector_c, fecha: fecha_c, hora: hora_c, minutos: minutos_c }
    this.setState({
      data: this.state.data.concat(value)
    }, function () {
      console.log(this.state.data)
    });
  };
  render() {
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">{<i className="pe-7s-bell" />} Notificaciones</h4>
        </div>
        <div className="content">

          <Row>
            <Col md={6} mdOffset={3}>
              <h5>Notification states</h5>


              <Notificaciones_m
                notificaciones={this.state.data}
              />
            </Col>
          </Row>
          <br />
          <br />

        </div>
      </div>
    );
  }
}

export default TableList;
