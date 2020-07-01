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
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios";

class Cargar_plantilla extends Component {
  state = {
    file: '',
    largo:'',
    reporte:'http://localhost:8000/media/uploads/DatosReporte.xlsx',
    causal:'http://localhost:8000/media/uploads/DatosCausal.xlsx',
  };
  async onFileChange(event) {
    this.state.file=event.target.files[0]   
    var fileUpload = event.target.files[0]
    console.log(fileUpload)
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload["name"].toLowerCase())) {
          var formData = new FormData();
          formData.append('archivo', this.state.file);
          const apiUrl = 'http://localhost:8000';
          try{
            await axios.post(`${apiUrl}/largo/`, formData);
            axios.get("http://localhost:8000/largo/").then(res2 => {
              this.setState({
                largo: res2.data,
              });
              if (this.state.largo["largo"] == 9 || this.state.largo["largo"] == 14){
                
              }
              else{
                alert("No es el formato correcto")
              }
              
            });
          }catch(e){
      
          }
        } else {
            alert("Por favor ingrese un archivo Excel valido.");
        }
  }

  openCausal(event){
    
    window.open(`${this.state.causal}`, "_blank")
  }

  openPlantilla(event){
   
    window.open(`${this.state.reporte}`, "_blank")
  }

  async onSubmit(){
    var fileUpload = this.state.file
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload["name"].toLowerCase())) {
          var formData = new FormData();
          formData.append('archivo', this.state.file);
          const apiUrl = 'http://localhost:8000';
          try{
            await axios.post(`${apiUrl}/largo/`, formData);
            axios.get("http://localhost:8000/largo/").then(res2 => {
              this.setState({
                largo: res2.data,
              });
              if (this.state.largo["largo"] == 9 || this.state.largo["largo"] == 14){
                var formData = new FormData();
                formData.append('archivo', this.state.file);
                const apiUrl = 'http://localhost:8000';
                try{
                  axios.post(`${apiUrl}/cargar/`, formData).then(data=>{
                    alert("Se han cargado los datos correctamente")
                  });
                }catch(e){

                }
              }
              else{
                alert("No es el formato correcto")
              }
              
            });
          }catch(e){
      
          }
        } else {
            alert("Por favor ingrese un archivo Excel valido.");
        }
    
  }

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
                 <form>
                    <input type="file" onChange={this.onFileChange.bind(this)} /> 
                  </form>
                  <Button bsStyle="info" pullRight fill onClick={this.onSubmit.bind(this)}>
                    Subir
                  </Button>
                <h3>Tipo de Ingreso</h3>
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>

                    
                  </form>
                }
              />
              <Col md={4} >
              <Button bsStyle="Secondary" pullLeft fill onClick={this.openPlantilla.bind(this)}>
                      Descargar Plantilla de Reporte
                    </Button>
              </Col>
              <Col md={4} mdOffset={1}>
                    <Button bsStyle="Secondary" pullLeft fill onClick={this.openCausal.bind(this)}>
                    Descargar Plantilla de Causal
                    </Button>
                    </Col>
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

