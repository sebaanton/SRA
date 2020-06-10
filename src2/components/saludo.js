import React from 'react'
import './styles/saludo.css'
function Welcome(props){
    return (
        <div className="container">
            <div className="Fitnes-User-Info">
                <h1>Hola {props.username}</h1>
                <p>Wena washo pelao qlo loco</p>
            </div>
        </div>
    )
}

export default Welcome