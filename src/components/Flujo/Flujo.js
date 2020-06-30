import React, { Component } from "react";
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import ChartistGraph from "react-chartist";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import { OverlayTrigger } from "react-bootstrap";
function Flujo_m(props) {
    return (
        <div>
            {props.flujos.map((flujo) => {
                return (
                    <Col lg={4} sm={6}>
                        <StatsCard
                            bigIcon={
                            <i className={flujo.estilo}  />} // color
                            statsText={flujo.fecha}// fecha
                            statsValue={flujo.tipo_nombre}// tipo de contacto: nombre_contacto/reunion
                            statsIconText={flujo.observaciones}//observaciones
                            statsIcon={
                                <Button bsStyle="info" simple type="button" bsSize="xs" pullRight type="submit" href={`http://localhost:3000/admin/Modificar_${flujo.tipo}/${flujo.id}`}>
                                  <i className="fa fa-edit" />
                                </Button>}
                        />
                    </Col>
                )
            })}
        </div>
    )


}

export default Flujo_m;