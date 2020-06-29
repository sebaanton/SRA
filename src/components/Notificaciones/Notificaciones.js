import React, { Component } from "react";
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

function Notificaciones_m(props){
    return(
        <div>
            {props.notificaciones.map((notificacion) => {
                return(
            <Alert 
                bsStyle={notificacion.estilo}
                >
                <button type="button" aria-hidden="true" className="close">
                    &#x2715;
                </button>
                <span>
                    <b> {notificacion.estado} {notificacion.tipo}- </b> {notificacion.nombre} {notificacion.conector} {notificacion.medio} {notificacion.fecha} a las {notificacion.hora}:{notificacion.minutos}
                </span>
            </Alert>
                )
            })}
        </div>
    )


}

export default Notificaciones_m;











 
