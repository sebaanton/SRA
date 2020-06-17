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
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks4.jsx";
import FileInput from "components/FileInput";


class Cargar_plantilla extends Component {
  render() {
    return (

      <div className="content">
              <div className="card">
              <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                content={
                  <form>
                                        <FileInput/>
                <h3>Tipo de Ingreso</h3>
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>

                    
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
        </div>
       
      </div>
    );
  }
}

export default Cargar_plantilla;
