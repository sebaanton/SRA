import React, { Component } from "react";
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

function Flujo_m(props) {
    return (
        <div>
            {props.flujos.map((flujo) => {
                return (
                    <Col lg={4} sm={6}>
                        <StatsCard
                            bigIcon={<i className={flujo.estilo} />} // color
                            statsText={flujo.fecha}// fecha
                            statsValue={flujo.tipo_nombre}// tipo de contacto: nombre_contacto/reunion
                            statsIcon={<i className="fa fa-refresh" />}
                            statsIconText={flujo.observaciones}//observaciones
                        />
                    </Col>
                )
            })}
        </div>
    )


}

export default Flujo_m;