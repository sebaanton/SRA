import React, { Component } from "react";
import { Grid, Row, Col, Alert, Table } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks3.jsx";
import { thArray, thArray2, tdArray } from "variables/Variables.jsx";
import Ver_detalle from "views/Ver_detalle";
import axios from "axios";

class Lista_reportes extends Component {
  state = {
    reporte:[],
    reporteDisplay:[],
    checked: false,
    parameter: "",
  };

  componentDidMount(){
      const currenturl = window.location.pathname
      const largo = currenturl.length
      const rut = currenturl.slice(22,largo)
      axios.get("http://localhost:8000/reporte/").then(res2 => {
        var i;
        var repo = [];
        for(i=0;i<res2.data.length;i++){
            if(rut == res2.data[i].alumno){
                repo.push(res2.data[i]);
            }
        }
        this.setState({
          reporte: repo,
          reporteDisplay: repo
        });
      });
      }
  handleCheckedChange(event){
    this.setState( {
      value: event.target.value,
    });
  }
  handleChangeParameter(event){
    this.setState( {
      parameter: event.target.value,
    });
  }
  
  onSearch(event){
    console.log(this.state.reporte);
    var rep = [];
    var i;
    this.setState({
      reporteDisplay: [],
    });
    if(this.state.value == "opt_1"){
        for(i=0; i< this.state.reporte.length;i++){
          if(this.state.reporte[i].id == this.state.parameter){
            rep.push(this.state.reporte[i]);
          }
        }
        this.setState( {
          reporteDisplay: rep,
        });
      }
    if(this.state.value == "opt_2"){
      for(i=0; i< this.state.reporte.length;i++){
        if(this.state.reporte[i].año == this.state.parameter){
          rep.push(this.state.reporte[i]);
        }
      }
      this.setState( {
        reporteDisplay: rep,
      });
    }
    if(this.state.value == "opt_3"){
      for(i=0; i< this.state.reporte.length;i++){
        if(this.state.reporte[i].semestre == this.state.parameter){
          rep.push(this.state.reporte[i]);
        }
      }
      this.setState( {
        reporteDisplay: rep,
      });
    }
    if(this.state.value == "opt_4"){
      for(i=0; i< this.state.reporte.length;i++){
        if(this.state.reporte[i].tipo_causal == this.state.parameter){
          rep.push(this.state.reporte[i]);
        }
      }
      this.setState( {
        reporteDisplay: rep,
      });
    }
    if(this.state.value == "opt_5"){
      for(i=0; i< this.state.reporte.length;i++){
        if(this.state.reporte[i].asignaturas_reportadas == this.state.parameter){
          rep.push(this.state.reporte[i]);
        }
      }
      this.setState( {
        reporteDisplay: rep,
      });
    }
    if(this.state.value == "opt_6"){
        for(i=0; i< this.state.reporte.length;i++){
          if(this.state.reporte[i].reiteraciones_causal == this.state.parameter){
            rep.push(this.state.reporte[i]);
          }
        }
        this.setState( {
          reporteDisplay: rep,
        });
    }
  }
  
  render() 
 
  
  {	
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
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "Juanito Perez",
                          value: this.state.parameter,
                          onChange: this.handleChangeParameter.bind(this)
                        }
                      ]}



                    />

                   <Button bsStyle="info" pullRight fill onClick={this.onSearch.bind(this)}>
                      Buscar
                    </Button>   

                <h3>Atributos</h3>
                  <div className="table-full-width">
                    <table className="table">
                    <div>
                    <Col md={6} mdOffset={0.5}>
                      <input 
                        type="radio"
                        name="name"
                        value="opt_1"
                        checked={this.state.value === "opt_1"}
                        onChange={this.handleCheckedChange.bind(this)}

                      /> id <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_2"
                        checked={this.state.value === "opt_2"}
                        onChange={this.handleCheckedChange.bind(this)}

                      /> Año <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_3"
                        checked={this.state.value === "opt_3"}
                        onChange={this.handleCheckedChange.bind(this)}
                      /> Semestre <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_4"
                        checked={this.state.value === "opt_4"}
                        onChange={this.handleCheckedChange.bind(this)}
                      /> Tipo de causal <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_5"
                        checked={this.state.value === "opt_5"}
                        onChange={this.handleCheckedChange.bind(this)}
                      /> Asignaturas reportadas <br />
                      <input 
                        type="radio"
                        name="name"
                        value="opt_6"
                        checked={this.state.value === "opt_6"}
                        onChange={this.handleCheckedChange.bind(this)}
                      /> Reiteraciones de causal <br />
                    </Col>
                    </div>
                
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
        <Grid fluid>

          <Row>
            <Col md={12}>
              <Card
                //title="Listado de reportes"
                //ctTableFullWidth
                //ctTableResponsive
                content={
                
          
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray2.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.reporteDisplay.map((prop, key) => {
                        return (
                          
                          <tr>
                            <td key={key}>{prop.id}</td>
                            <td key={key}>{prop.año}</td>
                            <td key={key}>{prop.semestre}</td>
                            <td key={key}>{prop.tipo_causal}</td>
                            <td key={key}>{prop.asignaturas_reportadas}</td>
                            <td key={key}>{prop.reiteraciones_causal}</td>
                            <td>
                              <p><a href={`http://localhost:3000/admin/Ver_registro/${prop.id}`}>Ver Registro</a></p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Lista_reportes;