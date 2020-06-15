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



//function onChange(nextValue) {
//  const [value, setValue] = useState(new Date());
//  setValue(nextValue);
//}

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
        <Col  mdOffset={0}lg={7}>
          
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
          
        <Calendar
      //onChange={onChange}
      //value={value}
      //tileClassName="hoy"
        />
        </Grid>
      </Col>
      <div className="w-100"></div>
        <div className="content"></div>
      
      <Grid>
 
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            </Grid>
            <Grid>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            </Grid>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>

         

          
      </div>
  
                  


    );
  }
}

export default Ver_flujo;
