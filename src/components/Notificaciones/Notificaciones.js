import React, { Component } from "react";
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";


function Notificaciones_m(props){
    return(
        <div>
            {props.notificaciones.map((notificacion) => {
                return(
            <Alert 
                bsStyle={notificacion.estilo}
                >
                <span>
                <b> {notificacion.estado} {notificacion.tipo} con {notificacion.nombre_alumno}- </b> {notificacion.nombre} {notificacion.conector} {notificacion.medio} {notificacion.fecha} a las {notificacion.hora}:{notificacion.minutos}
                </span>
            </Alert>
                )
            })}
        </div>
    )


}

export default Notificaciones_m;