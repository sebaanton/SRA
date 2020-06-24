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
import axios from "axios";
import avatar from "assets/img/faces/face-3.jpg";

class Modificar_contacto extends Component {
  state = {
    contacto: [],
    //rut:[],
  };

  
  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const urls = currenturl.slice(19,largo)
    const contactoRUT = this.props.match.params.contactoRUT;
    

    axios.get(`http://localhost:8000/contacto/${urls}`).then(res => {
      this.setState({
        contacto: res.data,
        //rut: res.data.rut,
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
                title="Modificar contacto"
                content={
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          value: `${this.state.contacto.rut}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Medio de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "+56997856443",
                          value: `${this.state.contacto.medio}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Nombre de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1er semestre",
                          value: `${this.state.contacto.nombre}`,
                          //disabled: "disabled"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-3",  "col-md-3", "col-md-2"]}
                      properties={[
                        {
                          label: "Fecha de contacto",
                          type: "date",
                          bsClass: "form-control",
                          //placeholder: "usuario@mail.udp.cl",
                          value: `${this.state.contacto.fecha}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Hora de contacto",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: "Juanito Perez",
                          value: `${this.state.contacto.hora}`,
                          //Disabled: "disabled"
                        },
                        {
                          label: "¿Manifiesta interés?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "05/05/1970",  
                          value: `${this.state.contacto.interes}`, 
                          //disabled: "disabled"
                        },
                        {
                          label: "¿Autogestión?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "2016",
                          value: `${this.state.contacto.autogestion}`,
                          //disabled: "disabled"
                        },
                        
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit" href="Modificar_detalle">
                      Modificar datos
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

export default Modificar_contacto;
  
