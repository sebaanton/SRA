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
import { Grid, Row, Col} from "react-bootstrap";
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
      
          
        <Grid fluid>
          <Col lg={5}>
        <div className="card">
          <div className="header">
            <h2 className="title">{<i className="pe-7s-user" />} Flujo del Alumno</h2>
            <h5>Nombre: Juanito Pérez</h5>
            <h5>Estado: Activo</h5>
            <h5>Fecha del Registro: 05/05/2020</h5>
          </div>
        </div>
        </Col>
      <Col mdOffset={1} lg={5}>
        <Calendar/>

        </Col>
        </Grid>
    
        <br/>
   

      <Grid fluid>
      <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-id text-warning" />}
                statsText="10/06/2020"
                statsValue="Contacto: 'Citación Inicial'"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Se establece el contacto inicial mediante correo electrónico y el alumno acepta ingresar al proceso"
              />
            </Col>
            
            
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-id text-success" />}
                statsText="11/06/2020"
                statsValue="Reunión: 'Problemas'"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Se definen los problemas que podría tener el alumno de carácter académicos"
              />
            </Col>
           
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-id text-danger" />}
                statsText="12/06/2020"
                statsValue="Reunion: 'Recomendaciones'"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Se le hacen recomendaciones al alumno de carácter académico"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-id text-info" />}
                statsText="13/06/2020"
                statsValue="Derivación: 'Motivación'"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Se deriva al alumno con el profesor Paredes, quién le podría motivar acerca de los ramos de optimización y modelos estocásticos"
              />
            </Col>
            </Grid>
      
            
            

            

   


            
         
      </div>
  
                  


    );
  }
}

export default Ver_flujo;
