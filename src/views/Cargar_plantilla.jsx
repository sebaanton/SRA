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
  };
  onFileChange(event) {
    this.state.file=event.target.files[0]   
    
  }





  async onSubmit(){
    var formData = new FormData();
    formData.append('archivo', this.state.file);
    const apiUrl = 'http://localhost:8000';
    try{
      await axios.post(`${apiUrl}/cargar/`, formData);
    }catch(e){

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
