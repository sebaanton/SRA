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
import Lista_reportes from "views/Lista_reportes";
const dashboardRoutes = [
  {
    
    path: "/notifications",
    name: "Home",
    icon: "pe-7s-home",
    component: Notifications,
    layout: "/admin",

  },
   {   
    path: "/dashboard",
    name: " Ver Estadisticas",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",

  },
  {
    path: "/user",
    name: "Perfil",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin",

  },
  {
    path: "/table",
    name: "Notificaciones",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin",

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
    path: "/Ver_detalle",
    name: "Ver Detalle",
    icon: "pe-7s-science",
    component: Ver_detalle,
    layout: "/admin",

  },
  {
    path: "/Modificar_detalle",
    name: "Modificar Alumno",
    icon: "pe-7s-science",
    component: Modificar_detalle,
    layout: "/admin",
    //estado: "false"

  },
  {
    path: "/Ver_registro",
    name: "Ver Registro(s)",
    icon: "pe-7s-science",
    component: Ver_registro,
    layout: "/admin",

  },
  {
    path: "/Modificar_registro",
    name: "Modificar Registro",
    icon: "pe-7s-science",
    component: Modificar_registro,
    layout: "/admin",
    //estado: "false"

  },
  {
    path: "/Ver_flujo",
    name: "Ver Flujo",
    icon: "pe-7s-science",
    component: Ver_flujo,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/For_ingreso1",
    name: "Formulario ingreso por causal",
    icon: "pe-7s-science",
    component: For_ingreso1,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/For_ingreso2",
    name: "Formulario ingreso Profesor-alumno",
    icon: "pe-7s-science",
    component: For_ingreso2,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Cargar_plantilla",
    name: "Cargar plantilla",
    icon: "pe-7s-science",
    component: Cargar_plantilla,
    layout: "/admin",
    estado: "false"

  },
  {
    path: "/Crear_contacto",
    name: "Crear Contacto",
    icon: "pe-7s-science",
    component: Crear_contacto,
    layout: "/admin",
    estado: "false"

  },
  {
    path: "/Modificar_contacto",
    name: "Modificar Contacto",
    icon: "pe-7s-science",
    component: Modificar_contacto,
    layout: "/admin",
    //estado: "false"

  },
  {
    path: "/Agendar_reunion",
    name: "Agendar Reunion",
    icon: "pe-7s-science",
    component: Agendar_reunion,
    layout: "/admin",
    estado: "false"
  },
  {
    path: "/Modificar_reunion",
    name: "Modificar Reunion",
    icon: "pe-7s-science",
    component: Modificar_reunion,
    layout: "/admin",
    //estado: "false"

  },
  {
    path: "/Lista_reportes",
    name: "Lista reportes",
    icon: "pe-7s-science",
    component: Lista_reportes,
    layout: "/admin",
    estado: "false"
  },
];

export default dashboardRoutes;
