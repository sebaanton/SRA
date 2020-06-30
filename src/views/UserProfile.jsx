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
import axios from "axios"
import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  state = {
    usr: [],
    label: "",
    noRUT: ""
  }
  componentDidMount(){
    axios.get(`http://localhost:8000/${localStorage.getItem("userType")}/${localStorage.getItem("userID")}`).then(res2 => {
      console.log(res2)
      if(res2.data.rut){
        this.setState({
          label: "RUT",
          noRUT: res2.data.rut
        });
      } else {
        this.setState({
          label: "Jornada",
          noRUT: res2.data.jornada
        });
      }
      this.setState({
        usr: res2.data
      });
    });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Perfil de Usuario"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-7"]}
                      properties={[
                        {
                          label: this.state.label,
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.noRUT,
                          defaultValue: this.state.noRUT,
                          readonly: "readonly"
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: this.state.usr.email,
                          defaultValue: this.state.usr.email,
                          readonly: "readonly"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.usr.nombre,
                          defaultValue: this.state.usr.nombre,
                          readonly: "readonly"
                        },
                        {
                          label: "Telefono",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: this.state.usr.telefono,
                          defaultValue: this.state.usr.telefono,
                          readonly: "readonly"
                        }
                      ]}
                    />
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

export default UserProfile;
