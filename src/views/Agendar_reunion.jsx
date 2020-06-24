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

class Modificar_reunion extends Component {
  state = {
    reunion: [],
    //rut:[],
  };

  
  componentDidMount() {
    const currenturl = window.location.pathname
    const largo = currenturl.length
    const urls = currenturl.slice(19,largo)
    const reunionRUT = this.props.match.params.reunionRUT;
    

    axios.get(`http://localhost:8000/reunion/${urls}`).then(res => {
      this.setState({
        reunion: res.data,
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
                title="Agendar Reunión"
                content={
                  <form>
                    <FormInputs disabled
                      ncols={["col-md-3", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "RUT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123456789-8",
                          minlength:"9",
                          maxlength:"10",
                          pattern: "[^a-zA-Z][0-9]{7,8}+-[0-9|Kk]",
                          required:"required",
                          title:"Números enteros de 0 al 9 y la letra k en su ́ultima posición (mayúscula o minúscula)"
                          //value: `${this.state.reunion.rut}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Medio de reunión",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "virtual",
                          minlength:"7",
                          maxlength:"10",
                          pattern: "[Vv][iI][Rr][tT][uU][aA][lL]|[pP][Rr][Ee][sS][Ee][nN][Cc][iI][aA][lL]",
                          required:"required",
                          //value: `${this.state.reunion.medio}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Nombre de reunión",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "1er semestre",
                          //value: `${this.state.reunion.nombre}`,
                          minlength:"3",
                          maxlength:"25",
                          pattern: "[a-zA-Z :,.0-9]+",
                          required:"required",
                          //disabled: "disabled"
                        },
                      ]}
                    />
                    
                    <FormInputs
                      ncols={["col-md-3", "col-md-3",  "col-md-2", "col-md-3"]}
                      properties={[
                        {
                          label: "Fecha de reunión",
                          type: "date",
                          bsClass: "form-control",
                          //placeholder: "usuario@mail.udp.cl",
                          Defaultvalue: `${this.state.reunion.fecha}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Hora de reunion",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: "2300",
                          //value: `${this.state.reunion.hora}`,
                          minlength:"4",
                          maxlength:"4",
                          pattern: "[0|1][0-9][0-6][0-9]|[2][0-3][0-5][0-9]",
                          required:"required",
                          //Disabled: "disabled"
                        },
                        {
                          label: "¿Se realizó?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "si",  
                          //value: `${this.state.reunion.interes}`, 
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][Ii]|[Nn][Oo]",
                          required:"required",
                          //disabled: "disabled"
                        },
                        {
                          label: "¿Objetivos cumplidos?",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "2016",
                          //value: `${this.state.reunion.autogestion}`,
                          minlength:"2",
                          maxlength:"2",
                          pattern: "[sS][Ii]|[Nn][Oo]",
                          required:"required",
                          //disabled: "disabled"
                        },
                        
                      ]}
                    />
                    <form>
                      <label>
                        Observaciones <br />
                        <textarea  className="form-control"
                            rows="5" cols='80'/> 
                            
                      </label>   
                    </form>
                    <h3>Realizada</h3>
                    <FormInputs
                      ncols={["col-md-4", "col-md-3"]}
                      properties={[
                        {
                          label: "Iniciales del académico",
                          type: "text",
                          bsClass: "form-control",
                          //placeholder: "usuario@mail.udp.cl",
                          //value: `${this.state.reunion.fecha}`,
                          minlength:"4",
                          maxlength:"4",
                          pattern: "[a-zA-Z]+",
                          readonly:"readonly",
                        },
                        {
                          label: "Fecha de reunión",
                          type: "date",
                          bsClass: "form-control",
                          //placeholder: "usuario@mail.udp.cl",
                          Defaultvalue: `${this.state.reunion.fecha}`,
                          //disabled: "disabled"
                        },

                        
                        
                        
                      ]}
                    />
                     <FormInputs
                      ncols={["col-md-3", "col-md-3",  "col-md-3"]}
                      properties={[
                        {
                          label: "Tipo de problema",
                          type: "text",
                          bsClass: "form-control",
                          //placeholder: "usuario@mail.udp.cl",
                          //value: `${this.state.reunion.fecha}`,
                          //disabled: "disabled"
                        },
                        {
                          label: "Tipo de recomendación",
                          type: "text",
                          format:"form-control",
                          bsClass: "form-control",
                          placeholder: "Pendiente-Realizada",
                          //value: `${this.state.reunion.hora}`,
                          //Disabled: "disabled"
                        },
                        {
                          label: "Recomendaciones",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "2016",
                          //value: `${this.state.reunion.autogestion}`,
                          //disabled: "disabled"
                        },
                        
                      ]}
                    />
                    <form>
                      <Row>
                        <Col width="150">
                        &nbsp;&nbsp;&nbsp;&nbsp;<label>
                        Observaciones Problema<br />
                        <textarea  className="form-control"
                            rows="5" cols='30' disabled/> 
                            
                      </label>   
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <label>
                        Observaciones Recomendación<br />
                        <textarea  className="form-control"
                            rows="5" cols='30' disabled/> 
                            
                      </label>   
                      </Col>
                      </Row>
                    </form>
                    <br></br>
                    <Button bsStyle="info" pullRight fill type="submit" href="Modificar_detalle">
                      Guardar Reunión
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

export default Modificar_reunion;
  
