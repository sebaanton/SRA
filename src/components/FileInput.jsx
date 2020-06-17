import React, { Component } from "react";
import { Grid, Row, Col} from "react-bootstrap";


export class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();  }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`    );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <span>Selecionar archivo:</span>     

          <div>  
            
            <input type="file" ref={this.fileInput} /> 
            <Col mdOffset={1}>      
            <button type="submit" className="pull-right" >Subir</button>
            </Col> 
            </div>
        </form>
      );
    }
  }

  export default FileInput;