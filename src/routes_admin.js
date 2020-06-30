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
import Ver_detalle from "views/Ver_detalle";
import Ver_flujo from "views/Ver_flujo";
import Ver_registro from "views/Ver_registro";
import For_ingreso1 from "views/For_ingreso1"
import For_ingreso2 from "views/For_ingreso2"
import Cargar_plantilla from "views/Cargar_plantilla"
import Modificar_detalle from "views/Modificar_detalle";
import Modificar_registro from "views/Modificar_registro";
import Crear_contacto from "views/Crear_contacto";
import Modificar_contacto from "views/Modificar_contacto";
import Agendar_reunion from "views/Agendar_reunion";
import Modificar_reunion from "views/Modificar_reunion";
import Crear_usuario from "views/Crear_usuario";
import Crear_problema from "views/Crear_problema";
import Crear_recomendacion from "views/Crear_recomendacion";
import Busqueda_modificar_usuario from "views/Busqueda_modificar_usuario";
import Busqueda_modificar_problema from "views/Busqueda_modificar_problema";
import Busqueda_modificar_recomendacion from "views/Busqueda_modificar_recomendacion";
import Busqueda_admin from "views/Busqueda_admin";
import Modificar_usuario from "views/Modificar_usuario";
import Modificar_problema from "views/Modificar_problema";
import Modificar_recomendacion from "views/Modificar_recomendacion";
import Modificar_perfil from "views/Modificar_perfil";

const dashboardRoutes = [
  { 
    path: "/Busqueda_modificar_usuario",
    name: "Home",
    icon: "pe-7s-home",
    component: Busqueda_modificar_usuario,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Ver usuario",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/Crear_usuario",
    name: "Crear usuario",
    icon: "pe-7s-user",
    component: Crear_usuario,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Busqueda_Modificar_usuario",
    name: "Busqueda Modificar usuario",
    icon: "pe-7s-user",
    component: Busqueda_modificar_usuario,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Modificar_usuario",
    name: "Modificar usuario",
    icon: "pe-7s-user",
    component: Modificar_usuario,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Login2",
    name: "Login2",
    icon: "pe-7s-science",
    component: Login2,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Crear_problema",
    name: "Crear Problema",
    icon: "pe-7s-user",
    component: Crear_problema,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Busqueda_Modificar_problema",
    name: "Busqueda Modificar Problema",
    icon: "pe-7s-user",
    component: Busqueda_modificar_problema,
    layout: "/admin",
    estado: "false"
  }, 
  {
    path: "/Modificar_problema",
    name: "Modificar Problema",
    icon: "pe-7s-user",
    component: Modificar_problema,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Crear_recomendacion",
    name: "Crear Recomendacion",
    icon: "pe-7s-user",
    component: Crear_recomendacion,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Busqueda_Modificar_recomendacion",
    name: "Busqueda Modificar Recomendación",
    icon: "pe-7s-user",
    component: Busqueda_modificar_recomendacion,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Modificar_recomendacion",
    name: "Modificar Recomendación",
    icon: "pe-7s-user",
    component: Modificar_recomendacion,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Modificar_perfil",
    name: "Modificar Perfil",
    icon: "pe-7s-user",
    component: Modificar_perfil,
    layout: "/admin",
    estado: "false"
  },
  
 
];

export default dashboardRoutes;
