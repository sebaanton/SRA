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
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class Modificar_recomendacion extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Modificar Recomendación"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-7"]}
                      properties={[
                        {
                          label: "Tipo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Personal-Académico-Adicciones",
                          //defaultValue: "123456789"
                        },
                        {
                          label: "Explicacion",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Adiccion a los videojuegos"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Estado",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Activo-Inactivo",
                          //defaultValue: "Mike"
                        },
                      ]}
                    />
                
                    <Button bsStyle="info" pullRight fill type="submit">
                      Modificar Recomendación
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
}

export default Modificar_recomendacion;
