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
import axios from "axios";
import React, { Component, useState } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import Calendar from 'react-calendar';
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import Flujo_m from "components/Flujo/Flujo";

class Ver_flujo extends React.Component {

  state = {
    alumno: [],
    reporte: [],
    data: [],
    estado: ['Realizada', 'Próxima', 'No realizada'],
    conectores: ['con', 'mediante', 'vía'],
    estilo: ["pe-7s-id text-success", "pe-7s-id text-warning", "pe-7s-id text-danger"],
    opciones: { year: 'numeric', month: 'short', day: 'numeric' },
    contacto: [],
    reuniones: [],
    reuniones_ord: [],
  }
  async componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const id_reporte = currenturl.slice(23, largo)
    await axios.get(`http://localhost:8000/reporte/${id_reporte}`).then(res => {
      var fecha = new Date(res.data.fecha).toLocaleDateString('es', this.state.opciones)
        .replace(/ /g, '-')
        .replace('.', '')
        .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() })
      res.data.fecha = fecha
      this.setState({
        reporte: res.data,
      });

    });
    await axios.get(`http://localhost:8000/alumno/${this.state.reporte.alumno}`).then(res => {
      this.setState({
        alumno: res.data,
      });

    });
    const data_contacto = await axios.get(`http://localhost:8000/contacto/`);
    const data_reu = await axios.get(`http://localhost:8000/reunion/`);
    //console.log(data_reu.data)
    var i;
    for (i = 0; i < data_contacto.data.length; i++) {
      if (data_contacto.data[i].reporte == id_reporte) {
        await this.setContactoId(data_contacto.data[i])
      }
    }
    var j;
    for (j = 0; j < data_reu.data.length; j++) {
      if (data_reu.data[j].contacto == this.state.contacto.id) {
        await this.setReunionId(data_reu.data[j])
      }
    }
    console.log(data_reu.data)
    //console.log(this.state.id_reunion_m)
    // SORT!
    const reuniones_ordenadas = this.state.reuniones.sort(function (a, b) {
      if (a.fecha > b.fecha) {
        return 1;
      }
      if (a.fecha < b.fecha) {
        return -1;
      }
      return 0;

    });
    await this.setReunonOrd(reuniones_ordenadas)
    // FIN SORT!
    //console.log(reuniones_ordenadas);
    if (this.state.reuniones_ord.length == 0) {// contacto sin reuniones
      const today = new Date()
      const fecha_c = new Date(this.state.contacto.fecha)
      var horaa = ((this.state.contacto.hora - ((this.state.contacto.hora) % 100)) / 100).toString();
      var minutoos = ((this.state.contacto.hora) % 100).toString();
      if(minutoos == '0'){
        minutoos = '00'
      }
      if (today > fecha_c) {// si la fecha actual es mayor a la fecha del contacto, y no tiene reuniones (fijadas), entonces no se ha realizado
        const fecha = new Date(this.state.contacto.fecha)
        await this.onAddItem(this.state.estilo[2], fecha.toLocaleDateString('es', this.state.opciones)
          .replace(/ /g, '-')
          .replace('.', '')
          .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() }).concat(', ',horaa, ':', minutoos), "Contacto (\ ".concat(this.state.contacto.medio_contacto,"'\) ",this.state.contacto.nombre), this.state.contacto.observaciones)
      } else {// si la fecha actual es menor que la del contacto, entonces esta fijada (pendiente)
        const fecha = new Date(this.state.contacto.fecha)
        await this.onAddItem(this.state.estilo[1], fecha.toLocaleDateString('es', this.state.opciones)
          .replace(/ /g, '-')
          .replace('.', '')
          .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() }).concat(', ',horaa, ':', minutoos), "Contacto (\ ".concat(this.state.contacto.medio_contacto,"'\) ",this.state.contacto.nombre), this.state.contacto.observaciones)
      }
    } else {// si tiene reuniones, entonces ya se realizó el contacto
      const fecha = new Date(this.state.contacto.fecha)
      var horaa = ((this.state.contacto.hora - ((this.state.contacto.hora) % 100)) / 100).toString();
      var minutoos = ((this.state.contacto.hora) % 100).toString();
      if(minutoos == '0'){
        minutoos = '00'
      }
      await this.onAddItem(this.state.estilo[0], fecha.toLocaleDateString('es', this.state.opciones)
        .replace(/ /g, '-')
        .replace('.', '')
        .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() }).concat(', ',horaa, ':', minutoos), "Contacto (\'".concat(this.state.contacto.medio_contacto,"'\) ",this.state.contacto.nombre_contacto), this.state.contacto.observaciones)
    }
    var k;
    for (k = 0; k < this.state.reuniones_ord.length; k++) {
      const today2 = new Date()
      const fecha_c2 = new Date(this.state.reuniones_ord[k].fecha)
      var horaa = ((this.state.reuniones_ord[k].hora - ((this.state.reuniones_ord[k].hora) % 100)) / 100).toString();
      var minutoos = ((this.state.reuniones_ord[k].hora) % 100).toString();
      if(minutoos == '0'){
        minutoos = '00'
      }
      if (this.state.reuniones_ord[k].realizacion == true) {// si está realizada
        await this.onAddItem(this.state.estilo[0], fecha_c2.toLocaleDateString('es', this.state.opciones)
          .replace(/ /g, '-')
          .replace('.', '')
          .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() }).concat(', ',horaa, ':', minutoos), "Reunión (\'".concat(this.state.reuniones_ord[k].medio_reunion,"'\) ",this.state.reuniones_ord[k].nombre), this.state.reuniones_ord[k].observaciones)
      } else if(today2 < fecha_c2) {//si está fijada pero no realizada (puede ser que aun no sea la fecha o esté atrasada)
        await this.onAddItem(this.state.estilo[1], fecha_c2.toLocaleDateString('es', this.state.opciones)
          .replace(/ /g, '-')
          .replace('.', '')
          .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() }).concat(', ',horaa, ':', minutoos), "Reunión (\'".concat(this.state.reuniones_ord[k].medio_reunion,"'\) ",this.state.reuniones_ord[k].nombre), this.state.reuniones_ord[k].observaciones)
     
      }else{
        await this.onAddItem(this.state.estilo[2], fecha_c2.toLocaleDateString('es', this.state.opciones)
          .replace(/ /g, '-')
          .replace('.', '')
          .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase() }).concat(', ',horaa, ':', minutoos), "Reunión (\'".concat(this.state.reuniones_ord[k].medio_reunion,"'\) ",this.state.reuniones_ord[k].nombre), this.state.reuniones_ord[k].observaciones)
      }

    }
}
setReunonOrd = async (reuss) => {
  this.setState({
    reuniones_ord: reuss
  }, function () {
    console.log(this.state.reuniones_ord)
  })
}
  setContactoId = async (id_cont) => {
    this.setState({
      contacto: id_cont
    }, function () {
      console.log(this.state.contacto)
    })
  }
  setReunionId = async (id_reu) => {
    const value = id_reu
    this.setState({
      reuniones: this.state.reuniones.concat(value)
    }, function () {
      console.log(this.state.reuniones)
    })
  }
  onAddItem = async (estilo_c, fecha_c, tipo_nombre_c, observaciones_c) => {
    const value = { estilo: estilo_c, fecha: fecha_c, tipo_nombre: tipo_nombre_c, observaciones: observaciones_c }
    this.setState({
      data: this.state.data.concat(value)
    }, function () {
      console.log(this.state.data)
    });
  };
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Col lg={5} >
            <div className="card">
              <div className="header">
                <h3 className="title">{<i className="pe-7s-user" />} Flujo del Alumno</h3>
                <h5>Nombre: {this.state.alumno.nombre}</h5>
                <h5>Estado: Activo</h5>
                <h5>Fecha del Registro: {this.state.reporte.fecha}</h5>
                <br></br>
              </div>
            </div>
            <br></br>
          </Col>
          <Col mdOffset={1} lg={5}>
            <Calendar />
          </Col>
        </Grid>
        <br />
        <Grid fluid>
          <Flujo_m
            flujos={this.state.data}
          />
        </Grid>
      </div>
    );
  }
}

export default Ver_flujo;
