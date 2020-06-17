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
import React, { Component,useState  } from "react";
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


class Ver_flujo extends Component {

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }


    return legend;
  }
  render() {
    return (
      <div className="content">
        
        <Col  mdOffset={0} lg={7}>
          
        <Grid fluid>
        <div className="card">
          <div className="header">
            <h2 className="title">{<i className="pe-7s-user" />} Flujo del Alumno</h2>
            <h5>Nombre: Juanito Pérez</h5>
            <h5>Estado: Activo</h5>
            <h5>Fecha del Registro: 05/05/2020</h5>
          </div>
        </div>
        </Grid>
      </Col>
      <Col md={5} mdOffset={1} lg={4}>
          
        <Grid fluid>
          
        <Calendar />
        </Grid>
      </Col>
      
      <Row>
      <Grid>
 
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-id text-warning" />}
                statsText="10/03/2020"
                statsValue="Contacto: Citación Inicial"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Se establece el contacto inicial mediante correo, y el alumno acepta ingresar al proceso"
              />
            </Col>
            <Col mdOffset={1} lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="10/03/2020"
                statsValue="Contacto: Citación Inicial"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Se establece el contacto inicial mediante correo, y el alumno acepta ingresar al proceso"
              />
            </Col>
            <Col mdOffset={2} lg={5} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="10/03/2020"
                statsValue="Contacto: Citación Inicial"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Se establece el contacto inicial mediante correo, y el alumno acepta ingresar al proceso"
              />
            </Col>
            </Grid>
            </Row> 
            
            

         

          
      </div>
  
                  


    );
  }
}

export default Ver_flujo;
