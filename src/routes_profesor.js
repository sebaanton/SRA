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
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Login from "views/Login.jsx";
import Login2 from "views/Login2.jsx";
import Ver_detalle_profesor from "views/Ver_detalle_profesor";
import Ver_flujo from "views/Ver_flujo";
import Ver_registro from "views/Ver_registro";
import For_ingreso1 from "views/For_ingreso1"
import Ingreso_profesor from "views/Ingreso_profesor"
import Cargar_plantilla from "views/Cargar_plantilla"
import Modificar_detalle from "views/Modificar_detalle";
import Modificar_registro from "views/Modificar_registro";
import Crear_contacto from "views/Crear_contacto";
import Modificar_contacto from "views/Modificar_contacto";
import Agendar_reunion from "views/Agendar_reunion";
import Modificar_reunion from "views/Modificar_reunion";
import Modificar_perfil from "views/Modificar_perfil";
import Modificar_alumno_profesor from "views/Modificar_alumno_profesor";
import Busqueda_profesor from "views/Busqueda_profesor";
const dashboardRoutes = [
  {
    
    path: "/Buscar_alumno",
    name: "Home",
    icon: "pe-7s-home",
    component: Busqueda_profesor,
    layout: "/profesor",

  },
   {   
    path: "/dashboard",
    name: " Ver Estadisticas",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/profesor",
    estado:"false"
  },
  {
    path: "/user",
    name: "Perfil",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/profesor",
  },
  {
    path: "/Login2",
    name: "Login2",
    icon: "pe-7s-science",
    component: Login2,
    layout: "/profesor",
    estado: "false"
  },
  {
    path: "/Ver_detalle_profesor",
    name: "Ver Detalle",
    icon: "pe-7s-science",
    component: Ver_detalle_profesor,
    layout: "/profesor",
    estado: "false"

  },
  {
    path: "/Modificar_alumno_profesor",
    name: "Modificar Perfil",
    icon: "pe-7s-user",
    component: Modificar_alumno_profesor,
    layout: "/profesor",
    estado: "false"
  },
  {
    path: "/Ver_flujo",
    name: "Ver Flujo",
    icon: "pe-7s-science",
    component: Ver_flujo,
    layout: "/profesor",
    estado: "false"
  },
  {
    path: "/For_ingreso1",
    name: "Formulario ingreso por causal",
    icon: "pe-7s-science",
    component: For_ingreso1,
    layout: "/profesor",
    estado: "false"
  },
  {
    path: "/Ingreso_profesor",
    name: "Formulario ingreso Profesor",
    icon: "pe-7s-science",
    component: Ingreso_profesor,
    layout: "/profesor",
    estado: "false"
  },
  {
    path: "/Cargar_plantilla",
    name: "Cargar plantilla",
    icon: "pe-7s-science",
    component: Cargar_plantilla,
    layout: "/profesor",
    estado: "false"

  },
  {
    path: "/Modificar_perfil",
    name: "Modificar Perfil",
    icon: "pe-7s-user",
    component: Modificar_perfil,
    layout: "/profesor",
    estado: "false"
  },
  
 
  
 
];

export default dashboardRoutes;
