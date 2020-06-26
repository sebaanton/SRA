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
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie1,
  legendPie1,
  dataPie2,
  legendPie2,
  dataPie3,
  legendPie3,

} from "variables/Variables.jsx";

class Dashboard extends Component {
  


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
  
  
  render(
    
  ) {
    return (
      <div className="content">
        <Grid fluid>
  
          <Row>
            
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie1} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie1)}</div>
                }
              />
            </Col>


            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie1} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie1)}</div>
                }
              />
            </Col>

            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie1} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie1)}</div>
                }
              />
            </Col>


          </Row>

          

          <Row>
          <Card 
                title="Tipos de Problemas"          
                content={
            <form>
          <div className="table-full-width">
                    <table className="table">
                    <div>
                    <Col md={5} mdOffset={0.5}>
       
      
                <input type="checkbox" name="A" value="A" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Adicción a Internet, juegos y redes sociales</label>  < br/>
                <input type="checkbox" name="A1" value="A1"/>
                &nbsp;&nbsp;
                <label for="vehicle2">Madurez-Motivación</label> < br/>
                <input type="checkbox" name="B1" value="B1" checked /> 
                &nbsp;&nbsp;
                <label for="vehicle3">Falta Base – Dificultad de Abstracción y Desarrollo Formal</label> < br/>
                <input type="checkbox" name="B2" value="B2" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Dificultad de Comprensión al Profesor</label>  < br/>
                <input type="checkbox" name="B3" value="B3" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Otros: Trastornos de Sueño, Prob. Dislexia, etc.</label>  < br/>
                </Col>

                <Col md={5} mdOffset={0.5}>
                <input type="checkbox" name="C" value="C" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Falta Hábitos de estudio</label>  < br/>
                <input type="checkbox" name="D" value="D"/>
                &nbsp;&nbsp;
                <label for="vehicle2">Dificultad de Concentración – Volitiva – Depresión y otros psicol.</label> < br/>
                <input type="checkbox" name="E" value="E" checked /> 
                &nbsp;&nbsp;
                <label for="vehicle3">Problemas de Salud Relevantes</label> < br/>
                <input type="checkbox" name="F" value="F" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Problemas Económicos y Familiares</label>  < br/>
                <input type="checkbox" name="G" value="G" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Trabaja más de 1⁄4 Jornada</label>  < br/>
                </Col>
                </div>
               
     
               

                <input type="submit" value="Grabar Problema"/>
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
       
      
                <input type="checkbox" name="BEst" value="BEst" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Bienestar Estudiantil</label>  < br/>
                <input type="checkbox" name="DCP" value="DCP"/>
                &nbsp;&nbsp;
                <label for="vehicle2">Departamento o Coordinación de Línea</label> < br/>
                <input type="checkbox" name="SE" value="SE" checked /> 
                &nbsp;&nbsp;
                <label for="vehicle3">Secretaria de Estudios</label> < br/>
                <input type="checkbox" name="DC" value="DC" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Director de la Carrera</label>  < br/>
                <input type="submit" value="Grabar Derivación"/>
                </Col>

                <Col md={5} mdOffset={0.5}>
                <h4>Recomendaciones</h4>
                <input type="checkbox" name="HE" value="HE" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Hábitos de Estudio</label>  < br/>
                <input type="checkbox" name="MTC" value="MTC"/>
                &nbsp;&nbsp;
                <label for="vehicle2">Malla, Toma de Ramos, Carga Académica</label> < br/>
                <input type="checkbox" name="DP" value="SE" checked /> 
                &nbsp;&nbsp;
                <label for="vehicle3">Derivado a Profesores</label> < br/>
                <input type="checkbox" name="DAP" value="DAP" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Derivado a Apoyo Psicológico</label>  < br/>
                <input type="checkbox" name="CAP" value="CAP" /> 
                &nbsp;&nbsp;
                <label for="vehicle1">Compromiso de Acción Personal</label>  < br/>
                <input type="submit" value="Grabar Recomendación"/>





                </Col>
                </div>
                
     
               

         
         </table>
         </div>   
         </form>
                }/>
          </Row>
        </Grid>

        
      </div>
    );
  }
}

export default Dashboard;
