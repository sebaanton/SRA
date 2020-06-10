import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import linko from './img/105223.jpg'
import Card_Reuniones from './components/Card_Reuniones'
import Welcome from './components/saludo'
import 'bootstrap/dist/css/bootstrap.css'
//const user = {
//  firstName: 'Pichulin',
//  lastName: 'Pichulon',
//  avatar: linko
//}
//
//function getName(user){
//  return `${user.firstName} ${user.lastName}`
//}
//
//function getGreeting(user){
//  if(user){
//    return <h1>Holi {getName(user)}</h1>
//  }
//  return <h1>Wena washopelao</h1>
//}
//
//const name = 'Pichula'
//const element = (
//  <div>
//    <h1>{getGreeting(user)}</h1>
//    <img src={user.avatar}/>
//  </div>
//)
//const container = document.getElementById('root')
//ReactDOM.render(element, container)

const container = document.getElementById('root')
ReactDOM.render(<div>
  <Welcome 
  username = "Chuchetumare"
  />
  <Card_Reuniones
  title="Nombre de la reunión"
  fecha="Fecha de la reunión"
  description="descripción de la reunión"
  img="linko"
  leftColor="#A74CF2"
  rightColor="#617BFB"

/> </div>, container)
