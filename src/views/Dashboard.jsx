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
import React, { Component } from "react";
import { Grid, Row, Col, Table} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import axios from "axios";

class Dashboard extends Component {
  state={  id_alumno: [],
    array_reporte:[],
    array_alumno:[],
    array_alumno2:[],
    array_contacto:[],
    array_recomendacion:[],
    array_reunion:[],
    array_problema_asociado:[],
    semestre_reporte_actual:0,
    cant_por_causal:0,
    cant_reportado:0,
    cant_autoconsulta:0,
    cant_en_observacion:0,
    cant_sin_interes:0,
    cant_atendidos:0,
    cant_autogestion:0,
    cant_no_concurren:0,
    cant_citado_recuperados:0,
    cant_citado_no_recuperados:0,
    cant_sin_interes_primera_vez:0,
    cant_sin_interes_recurrente:0,
    cant_autogestion_primera_vez:0,
    cant_autogestion_recurrente:0,
    cant_citado_no_recuperado_primera_vez:0,
    cant_citado_no_recuperado_recurrente:0,
    cant_citado_recuperado_primera_vez:0,
    cant_citado_recuperado_recurrente:0,
    cant_atendidos_recurrente:0,
    cant_atendidos_primera_vez:0,
    cant_p1:0,
    cant_p2:0,
    cant_p3:0,
    cant_p4:0,
    cant_p5:0,
    cant_p6:0,
    cant_p7:0,
    cant_p8:0,
    cant_p9:0,
    cant_p10:0,
    cant_p11:0,
    cant_p12:0,
    cant_p13:0,
    cant_p14:0,
    cant_p15:0,
    estado:false,
    }
  cantidad_alumno= 551
  titulo= ["Concepto","Cantidad","%"]
  concepto= ["Total Alumnos informados en Riesgo","- Por causal de eliminación","- Por alerta temprana",
  "- Por Cuenta Propia","- En Observación"," ","Total de Alumnos Citados a Tutoría",
  "- Sin Interés en el servicio (Explícito)","- Atendidos ","- Auto-Gestión",
"- Recuperados","- No recuperados (Renunciaron o se cambiaron de carrera)",
"- No concurren"," ","Total de Alumnos Citados a Tutoría (por primera vez en causal de eliminación)",
"- Sin Interés en el servicio (Explícito)","- Atendidos ","- Auto-Gestion",
"- Recuperados ","- No recuperados (Renunciaron o se cambiaron de carrera)",
" ", "Total de Alumnos Citados a Tutoría (recurrente en causal de Eliminación)", 
"- Sin Interés en el servicio (Explícito)", "- Atendidos y seguidos","- Auto-Gestion",
"- Recuperados ","- No recuperados (Renunciaron o se cambiaron de carrera)",
" " , "Atendidos y seguidos","Recomendaciones Abordadas (más de 1 por alumno)",
"- Sobre Hábitos de Estudio (HB)","- Sobre Malla, Toma Ramos y Carga Académica. (M,TR,CA)",
"- Derivado. a Profesores Unidad (DP)","- Derivados a Apoyo Psicológico – Psico Pedagógico (DAP)",
"- Compromisos de Acción Personal (CAP)"," ", "Categorías de Problemas Reportados (más de 1 por alumno)",
"- A. Adicción a Internet, juegos y redes sociales","- A1. Madurez-Motivación",
"- B.1 Falta Base – Dificultad de Abstracción y Desarrollo Formal","- B.2 Dificultad de Comprensión al Profesor",
"- B.3 Otros: Trastornos de Sueño, Prob. Dislexia, etc.","- C Falta Hábitos de estudio",
"- D Dificultad de Concentración – Volitiva – Depresión y otros psicologicos",
"- E Problemas de Salud Relevantes"," - F Problemas Económicos y Familiares",
"- G Trabaja más de 1⁄4 Jornada"]
  
componentDidMount() {


  axios.get(`http://localhost:8000/alumno`).then(res2 => {
    var alumno=[];
    var alumno2=[];
    var id_alumno=[];
    var estado_actual_alumno=[];
    var id_alumno2=[];
    var estado_actual_alumno2=[];
    var x2;
    var por_causal=0;
    var reportado=0;
    var autoconsulta=0;
    var en_observacion=0;
    var sin_interes=0;
    var atendidos=0;
    var autogestion=0;
    var no_concurren=0;
    var citado_recuperado=0;
    var citado_no_recuperado=0;
    var sin_interes_primera_vez=0;
    var sin_interes_recurrente=0;
    var autogestion_primera_vez=0;
    var autogestion_recurrente=0;
    var citado_recuperado_primera_vez=0;
    var citado_recuperado_recurrente=0;
    var citado_no_recuperado_primera_vez=0;
    var citado_no_recuperado_recurrente=0;
    var atendidos_recurrente=0;
    var atendidos_primera_vez=0;
    var p1=0;
    var p2=0;
    var p3=0;
    var p4=0;
    var p5=0;
    var p6=0;
    var p7=0;
    var p8=0;
    var p9=0;
    var p10=0;
    var p11=0;
    var p12=0;
    var p13=0;
    var p14=0;
    var p15=0;

    for(x2=0;x2 < res2.data.length;x2++){
      id_alumno[x2]=res2.data[x2].rut;
      estado_actual_alumno[x2]=res2.data[x2].estado_actual;

    };

  axios.get(`http://localhost:8000/reporte`).then(res => {
    const currentDay = new Date();
    var semestre;
    if (currentDay.getMonth() <= 7){
      semestre = 1;
    } else {
      semestre = 2;
    }
    var i;
    var i2;
    var alumno_reporte=[];
    var reiteraciones_causal_reporte=[]; 
    var año_reporte=[];
    var semestre_reporte=[];
    var id_reporte=[];
    var reporte=[];
    var i3=0;
    for (i=0;i<res.data.length;i++) {
      for(i2=0;i2<id_alumno.length;i2++){
        if(res.data[i].año == 2020 && res.data[i].semestre == semestre && id_alumno[i2] == res.data[i].alumno){
          alumno_reporte[i3]=res.data[i].alumno;
          reiteraciones_causal_reporte[i3]=res.data[i].reiteraciones_causal;
          año_reporte[i3]=res.data[i].año;
          semestre_reporte[i3]=res.data[i].semestre;
          //console.log(semestre_reporte[i3])
          id_reporte[i3]=res.data[i].id;
          id_alumno2[i3]=id_alumno[i2];
          estado_actual_alumno2[i3]=estado_actual_alumno[i2];
          i3=i3+1;
          if(res.data[i].tipo_ingreso.toLowerCase() == "causal"){
            por_causal=por_causal+1;
          }
          if(res.data[i].tipo_ingreso.toLowerCase() == "reportado"){
            reportado=reportado+1;
          }
          if(res.data[i].tipo_ingreso.toLowerCase() == "autoconsulta"){
            autoconsulta=autoconsulta+1;
          }
          if(estado_actual_alumno2[i2].toLowerCase() == "en observacion"){
            en_observacion=en_observacion+1;
          }
        }
        
      };
    };
        axios.get(`http://localhost:8000/contacto`).then(res5 => {
          var m;
          var m2;
          var m3=0;
          var interes_contacto=[];
          var reporte_contacto=[];
          var id_contacto=[];
          var contacto=[];
          for(m=0;m< res5.data.length;m++){
            for(m2=0;m2<id_reporte.length;m2++){
              if(id_reporte[m2]== res5.data[m].reporte){
                interes_contacto[m3]=res5.data[m].interes;
                reporte_contacto[m3]=res5.data[m].reporte;
                id_contacto[m3]=res5.data[m].id;
                if(res5.data[m].interes == false){
                  sin_interes=sin_interes+1;
                }
                if(reiteraciones_causal_reporte[m2] == 0 && res5.data[m].interes == false){
                  sin_interes_primera_vez= sin_interes_primera_vez+1;
                }
                if(reiteraciones_causal_reporte[m2] > 0 && res5.data[m].interes == false){
                  sin_interes_recurrente= sin_interes_recurrente+1;
                }
                if(reiteraciones_causal_reporte[m2] == 0 && res5.data[m].autogestion == true){
                  autogestion_primera_vez=autogestion_primera_vez+1;
                }
                if(reiteraciones_causal_reporte[m2] > 0 && res5.data[m].autogestion == true){
                  autogestion_recurrente=autogestion_recurrente+1;
                }
                if(res5.data[m].autogestion == true){
                  autogestion=autogestion+1;

                }
                m3=m3+1;
              }
            };
          };
          axios.get(`http://localhost:8000/reunion`).then(res4 => {
            var l2;
            var l3;
            var l4;
            var l5;
            var l6;
            var l7;
            var l8=0;
            var l9;
            var realizacion_reunion=[];
            var contacto_reunion=[];
            var id_reunion=[];
            var reunion=[];
            for(l2=0;l2< res4.data.length;l2++){
              console.log(res4.data.length)
              for(l3=0;l3< interes_contacto.length;l3++){
                if(id_contacto[l3] == res4.data[l2].contacto){
                  contacto_reunion[l8]=res4.data[l2].contacto;
                  realizacion_reunion[l8]=res4.data[l2].realizacion;
                  id_reunion[l8]=res4.data[l2].id;
                  l8=l8+1;
                  if(res4.data[l2].realizacion == true){
                    atendidos=atendidos+1;
                    for(l7=0;l7<reiteraciones_causal_reporte.length;l7++){
                        if(reiteraciones_causal_reporte[l7] == 0 && id_reporte[l7] == reporte_contacto[l3] ){
                          atendidos_primera_vez=atendidos_primera_vez+1;
                        }
                        else if(reiteraciones_causal_reporte[l7] > 0  && id_reporte[l7] == reporte_contacto[l3]){
                          atendidos_recurrente=atendidos_recurrente+1;
                        }
                     
                    }
                  

                  }
                  if(res4.data[l2].realizacion == false){
                    no_concurren=no_concurren+1;
                  }
                  for(l4=0;l4<id_alumno2.length;l4++){
                    for(l5=0;l5<reiteraciones_causal_reporte.length;l5++){
                    if( estado_actual_alumno2[l4].toLowerCase() == "recuperado" && id_reporte[l5] == reporte_contacto[l3] && id_alumno2[l4]== alumno_reporte[l5]){
                      citado_recuperado=citado_recuperado+1;
                    
                        if( reiteraciones_causal_reporte[l5] == 0 ){
                          citado_recuperado_primera_vez=citado_recuperado_primera_vez+1;
                        }
                        if(reiteraciones_causal_reporte[l5] > 0){
                          citado_recuperado_recurrente=citado_recuperado_recurrente+1;
                        }
                       
                      }
                  
                    if(id_reporte[l5] == reporte_contacto[l3] && id_alumno2[l4]== alumno_reporte[l5] &&( estado_actual_alumno2[l4].toLowerCase() == "suspension" || estado_actual_alumno2[l4].toLowerCase()== "renuncio o cambio de carrera" || estado_actual_alumno2[l4].toLowerCase()== "eliminacion")){
                      citado_no_recuperado=citado_no_recuperado+1;
                      
                        if( reiteraciones_causal_reporte[l5] == 0){
                          citado_no_recuperado_primera_vez=citado_no_recuperado_primera_vez+1;
                        }
                        if(reiteraciones_causal_reporte[l5] > 0){
                          citado_no_recuperado_recurrente=citado_no_recuperado_recurrente+1;
                        }
                       
                      
                    }

                  }
                  }
            }
            }
            };

            axios.get(`http://localhost:8000/problema_asociado`).then(res7 => {
              var d;
              var d2;
              var tipo_problema_asociado=[];
              var reunion_problema_asociado=[];
              var problema_asociado = [];
              for(d=0;d< res7.data.length;d++){ 
                for(d2=0;d2<id_reunion.length;d2++){
                  if(id_reunion[d2]== res7.data[d].reunion){  
                    tipo_problema_asociado[d]= res7.data[d].tipo;
                    reunion_problema_asociado[d]=res7.data[d].reunion;
                    if(res7.data[d].tipo==1){
                      p1=p1+1;
                    }
                    else if(res7.data[d].tipo==2){
                      p2=p2+1;
                    }
                    else if(res7.data[d].tipo==3){
                      p3=p3+1;
                    }
                    else if(res7.data[d].tipo==4){
                      p4=p4+1;
                    }
                    else if(res7.data[d].tipo==5){
                      p5=p5+1;
                    }
                    else if(res7.data[d].tipo==6){
                      p6=p6+1;
                    }
                    else if(res7.data[d].tipo==7){
                      p7=p7+1;
                    }
                    else if(res7.data[d].tipo==8){
                      p8=p8+1;
                    }
                    else if(res7.data[d].tipo==9){
                      p9=p9+1;
                    }
                    else if(res7.data[d].tipo==10){
                      p10=p10+1;
                    }
                    else if(res7.data[d].tipo==11){
                      p11=p11+1;
                    }
                    else if(res7.data[d].tipo==12){
                      p12=p12+1;
                    }
                    else if(res7.data[d].tipo==13){
                      p13=p13+1;
                    }
                    else if(res7.data[d].tipo==14){
                      p14=p14+1;
                    }
                    else if(res7.data[d].tipo==15){
                      p15=p15+1;
                    }
                }
              };
                };
                problema_asociado.push(tipo_problema_asociado)
                problema_asociado.push(reunion_problema_asociado)
                  this.setState({
                    array_problema_asociado: problema_asociado,
                    cant_p1:p1,
                    cant_p2:p2,
                    cant_p3:p3,
                    cant_p4:p4,
                    cant_p5:p5,
                    cant_p6:p6,
                    cant_p7:p7,
                    cant_p8:p8,
                    cant_p9:p9,
                    cant_p10:p10,
                    cant_p11:p11,
                    cant_p12:p12,
                    cant_p13:p13,
                    cant_p14:p14,
                    cant_p15:p15,
                            } , function(){
                                console.log(this.state.array_problema_asociado)
                                //console.log(this.state.array_recomendacion)
                                console.log(this.state.array_reunion)
                                console.log(this.state.array_contacto)     
                                console.log(this.state.semestre_reporte_actual)
                                console.log(this.state.array_reporte)
                                console.log(this.state.array_alumno2)
                                console.log(this.state.array_alumno)
                            }   );
            });
            reunion.push(realizacion_reunion);
            reunion.push(contacto_reunion);
            reunion.push(id_reunion);
            this.setState({
              array_reunion: reunion,
              cant_atendidos:atendidos,
              cant_atendidos_primera_vez:atendidos_primera_vez,
              cant_atendidos_recurrente:atendidos_recurrente,
              cant_no_concurren:no_concurren,
              cant_citado_recuperados: citado_recuperado,
              cant_citado_no_recuperados: citado_no_recuperado,
              cant_citado_no_recuperado_primera_vez:citado_no_recuperado_primera_vez,
              cant_citado_no_recuperado_recurrente:citado_no_recuperado_recurrente,
              cant_citado_recuperado_primera_vez:citado_recuperado_primera_vez,
              cant_citado_recuperado_recurrente:citado_recuperado_recurrente,
              } , function(){
                //console.log(this.state.array_reunion)
              } );
              
           });
          contacto.push(interes_contacto);
          contacto.push(reporte_contacto);
          contacto.push(id_contacto);
          this.setState({
            array_contacto: contacto,
            cant_sin_interes: sin_interes,
            cant_autogestion:autogestion,
            cant_sin_interes_primera_vez: sin_interes_primera_vez,
            cant_sin_interes_recurrente: sin_interes_recurrente,
            cant_autogestion_primera_vez: autogestion_primera_vez,
            cant_autogestion_recurrente:autogestion_recurrente,
          } , function(){
            //console.log(this.state.array_contacto)
          } );
      
        });
    reporte.push(alumno_reporte);
    reporte.push(reiteraciones_causal_reporte);
    reporte.push(año_reporte);
    reporte.push(semestre_reporte)
    reporte.push(id_reporte)
    alumno2.push(id_alumno2)
    alumno2.push(estado_actual_alumno2)
    this.setState({
      array_reporte: reporte,
      semestre_reporte_actual: semestre,
      array_alumno2: alumno2,
      cant_por_causal: por_causal,
      cant_reportado: reportado,
      cant_autoconsulta: autoconsulta,
      cant_en_observacion: en_observacion,
  
     }, function(){
      //console.log(this.state.array_reporte)
      //console.log(this.state.semestre_reporte_actual)
    })
  });
  alumno.push(id_alumno);
  alumno.push(estado_actual_alumno);
  this.setState({
    array_alumno: alumno,
  },function(){
    //console.log(this.state.array_alumno)
  } );

});

  







}


    
  render(
    
  ) {
    return (
      
      <div className="content">
        <Grid fluid>
  
          <Row>
          
           <Col md={12}>
              <Card
                //title="Listado de alumnos"
                //ctTableFullWidth
                ctTableResponsive
                content={
                
          
                  <Table striped hover>
                    <thead>
                      <tr>
                      <th><b><h5>{this.titulo[0]}</h5></b></th>
                      <th><b><h5>{this.titulo[1]}</h5></b></th> 
                      <th><b><h5>{this.titulo[2]}</h5></b></th>
                      
                     
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><h6> Alumnos de la Escuela</h6></td>
                      <td> <h6> {this.cantidad_alumno}   </h6> </td>
                      <td> <h6>   100.00 %  </h6> </td>
                    </tr>    
                    <tr>
                      <td></td>
                      <td>   </td>
                      <td>  </td>
                    </tr>                      
                    <tr>
                      <td><h6>{this.concepto[0]}</h6></td>
                      <td> <h6> {this.state.cant_por_causal+ this.state.cant_reportado+this.state.cant_autoconsulta+this.state.cant_en_observacion }   </h6> </td>
                      <td> <h6>   {(((this.state.cant_por_causal+ this.state.cant_reportado+this.state.cant_autoconsulta+this.state.cant_en_observacion)*100)/ this.cantidad_alumno ).toFixed(2)} % </h6> </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[1]}</td>
                      <td> {this.state.cant_por_causal} </td>
                      <td>{((this.state.cant_por_causal*100)/ this.cantidad_alumno ).toFixed(2)}  %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[2]}</td>
                      <td>{this.state.cant_reportado}</td>
                      <td>{((this.state.cant_reportado*100)/ this.cantidad_alumno ).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[3]}</td>
                      <td>{this.state.cant_autoconsulta}</td>
                      <td> {((this.state.cant_autoconsulta*100)/ this.cantidad_alumno ).toFixed(2)} % </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[4]}</td>
                      <td>{this.state.cant_en_observacion}</td>
                      <td>{((this.state.cant_en_observacion*100)/ this.cantidad_alumno ).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[5]}</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>  <h6>{this.concepto[6]}</h6>  </td>
                      <td>  <h6>   {this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren }          </h6>  </td>
                      <td>  <h6>   {((this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %          </h6>  </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[7]}</td>
                      <td>{this.state.cant_sin_interes}</td>
                      <td>{(this.state.cant_sin_interes*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[8]}</td>
                      <td>{this.state.cant_atendidos}</td>
                      <td>{(this.state.cant_atendidos*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[9]}</td>
                      <td>{this.state.cant_autogestion}</td>
                      <td>{(this.state.cant_autogestion*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[10]}</td>
                      <td>{this.state.cant_citado_recuperados}</td>
                      <td> {(this.state.cant_citado_recuperados*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[11]}</td>
                      <td> {this.state.cant_citado_no_recuperados}</td>
                      <td> {(this.state.cant_citado_no_recuperados*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[12]}</td>
                      <td>{this.state.cant_no_concurren}</td>
                      <td> {(this.state.cant_no_concurren*100/(this.state.cant_sin_interes+this.state.cant_atendidos+this.state.cant_autogestion+this.state.cant_citado_recuperados+this.state.cant_citado_no_recuperados+this.state.cant_no_concurren)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[13]}</td>
                      <td>    </td>
                      <td>    </td>
                    </tr>
                    <tr>
                      <td>  <h6>{this.concepto[14]}</h6>  </td>
                      <td>  <h6>    {this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez}          </h6>  </td>
                      <td>  <h6>  {((this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)*100/(this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)).toFixed(2)}  %           </h6>  </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[15]}</td>
                      <td>{this.state.cant_sin_interes_primera_vez}</td>
                      <td> {(this.state.cant_sin_interes_primera_vez*100/(this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[16]}</td>
                      <td>    { this.state.cant_atendidos_primera_vez}</td>
                      <td> {(this.state.cant_atendidos_primera_vez*100/(this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)).toFixed(2)} % </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[17]}</td>
                      <td>{this.state.cant_autogestion_primera_vez} </td>
                      <td>  {(this.state.cant_autogestion_primera_vez*100/(this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[18]}</td>
                      <td>{this.state.cant_citado_recuperado_primera_vez}</td>
                      <td> {(this.state.cant_citado_recuperado_primera_vez*100/(this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[19]}</td>
                      <td>  {this.state.cant_citado_no_recuperado_primera_vez}    </td>
                      <td>{(this.state.cant_citado_no_recuperado_primera_vez*100/(this.state.cant_sin_interes_primera_vez+ this.state.cant_atendidos_primera_vez+this.state.cant_autogestion_primera_vez + this.state.cant_citado_recuperado_primera_vez+this.state.cant_citado_no_recuperado_primera_vez)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[20]}</td>
                      <td>    </td>
                      <td>    </td>
                    </tr>
                    <tr>
                      <td>  <h6>{this.concepto[21]}</h6>  </td>
                      <td>  <h6>   {this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente}          </h6>  </td>
                      <td>  <h6>   {((this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente)*100/(this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente).toFixed(2))} %           </h6>  </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[22]}</td>
                      <td> {this.state.cant_sin_interes_recurrente}</td>
                      <td> {(this.state.cant_sin_interes_recurrente*100/(this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[23]}</td>
                      <td>{this.state.cant_atendidos_recurrente}</td>
                      <td>{(this.state.cant_atendidos_recurrente*100/(this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente)).toFixed(2)}%</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[24]}</td>
                      <td>{this.state.cant_autogestion_recurrente}</td>
                      <td> {(this.state.cant_autogestion_recurrente*100/(this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[25]}</td>
                      <td>{this.state.cant_citado_recuperado_recurrente}</td>
                      <td> {(this.state.cant_citado_recuperado_recurrente*100/(this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[26]}</td>
                      <td>{this.state.cant_citado_no_recuperado_recurrente}</td>
                      <td> {(this.state.cant_citado_no_recuperado_recurrente*100/(this.state.cant_sin_interes_recurrente+this.state.cant_atendidos_recurrente+this.state.cant_autogestion_recurrente+this.state.cant_citado_recuperado_recurrente+ this.state.cant_citado_no_recuperado_recurrente)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[27]}</td>
                      <td>    </td>
                      <td>    </td>
                    </tr>
                    <tr>
                      <td>  <b><h6>{this.concepto[28]}</h6> </b> </td>
                      <td>  <h6>             </h6>  </td>
                      <td>  <h6>                </h6>  </td>
                    </tr>
                    <tr>
                      <td>  <b><h8>{this.concepto[29]}</h8> </b> </td>
                      <td>  {this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15 }  </td>
                      <td>  {((this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)*100/(this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)).toFixed(2)}  % </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[30]}</td>
                      <td>{this.state.cant_p11}</td>
                      <td>{((this.state.cant_p11)*100/(this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[31]}</td>
                      <td>{this.state.cant_p12}</td>
                      <td>{((this.state.cant_p12)*100/(this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[32]}</td>
                      <td>{this.state.cant_p13}</td>
                      <td>{((this.state.cant_p13)*100/(this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[33]}</td>
                      <td>{this.state.cant_p14}</td>
                      <td>{((this.state.cant_p14)*100/(this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[34]}</td>
                      <td>{this.state.cant_p15}</td>
                      <td>{((this.state.cant_p15)*100/(this.state.cant_p11+this.state.cant_p12+this.state.cant_p13+this.state.cant_p14+this.state.cant_p15)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[35]}</td>
                      <td>      </td>
                      <td>      </td>
                    </tr>
                    <tr>
                      <td>  <b><h8>{this.concepto[36]}</h8> </b> </td>
                      <td> {this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10}   </td>
                      <td>  {((this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)}  % </td>
                    </tr>
                    <tr>
                      <td>{this.concepto[37]}</td>
                      <td>{this.state.cant_p1}</td>
                      <td>{((this.state.cant_p1)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[38]}</td>
                      <td>{this.state.cant_p2}</td>
                      <td>{((this.state.cant_p2)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[39]}</td>
                      <td>{this.state.cant_p3}</td>
                      <td>{((this.state.cant_p3)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[40]}</td>
                      <td>{this.state.cant_p4}</td>
                      <td>{((this.state.cant_p4)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[41]}</td>
                      <td>{this.state.cant_p5}</td>
                      <td>{((this.state.cant_p5)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[42]}</td>
                      <td>{this.state.cant_p6}</td>
                      <td>{((this.state.cant_p6)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[43]}</td>
                      <td>{this.state.cant_p7}</td>
                      <td>{((this.state.cant_p7)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[44]}</td>
                      <td>{this.state.cant_p8}</td>
                      <td>{((this.state.cant_p8)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[45]}</td>
                      <td>{this.state.cant_p9}</td>
                      <td>{((this.state.cant_p9)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>
                    <tr>
                      <td>{this.concepto[46]}</td>
                      <td>{this.state.cant_p10}</td>
                      <td>{((this.state.cant_p10)*100/(this.state.cant_p1+ this.state.cant_p2 + this.state.cant_p3+this.state.cant_p4 + this.state.cant_p5 +this.state.cant_p6 + this.state.cant_p7 +this.state.cant_p8 +this.state.cant_p9 +this.state.cant_p10)).toFixed(2)} %</td>
                    </tr>


                    
                                            
                      </tbody>
                  </Table>
                }
              />
            </Col>


          </Row>

          

         

          
        </Grid>

        
      </div>
    );
  }
}

export default Dashboard;
