import React from 'react'
import linko from '../img/105223.jpg' 
import circlesImg from '../img/circles.png'
import './styles/Card_Reuniones.css'

class Card_Reuniones extends React.Component{

    render(){
        return (
            <div className = "card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
                }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={linko} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.fecha}</h2>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card_Reuniones
