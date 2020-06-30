from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import generics, mixins, status
from .models import (Administrador, Coordinador, Profesor, Alumno, Reporte,
                     Asignatura, Asignatura_reportada, Causal, Contacto, Derivacion,
                     Reunion, Problema_asociado, Recomendacion)
from .serializers import (AdministradorSerializer, CoordinadorSerializer, ProfesorSerializer,
                          AlumnoSerializer, ReporteSerializer, AsignaturaSerializer,
                          Asignatura_reportadaSerializer, CausalSerializer, ContactoSerializer,
                          DerivacionSerializer, ReunionSerializer, Problema_asociadoSerializer,
                          RecomendacionSerializer,LargoSerializer,CargarSerializer)
from django.db import connection
from rest_framework.views import APIView
import numpy as np
import pandas as pd
import xlrd
import datetime

class AdministradorView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = AdministradorSerializer
    queryset = Administrador.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class CoordinadorView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = CoordinadorSerializer
    queryset = Coordinador.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class ProfesorView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = ProfesorSerializer
    queryset = Profesor.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class AlumnoView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, pk = None):
        if pk:
            #with connection.cursor() as cursor:
            #    cursor.execute("""SELECT * FROM api_alumno WHERE api_alumno.rut = '%s'"""%str(pk))
            #    row = cursor.fetchone()
            #return self.list(row)
            #print(self.retrieve(request, pk))
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class ReporteView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = ReporteSerializer
    queryset = Reporte.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            print(pk)
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class AsignaturaView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = AsignaturaSerializer
    queryset = Asignatura.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class Asignatura_reportadaView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = Asignatura_reportadaSerializer
    queryset = Asignatura_reportada.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class CausalView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = CausalSerializer
    queryset = Causal.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class ContactoView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = ContactoSerializer
    queryset = Contacto.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class DerivacionView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = DerivacionSerializer
    queryset = Derivacion.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class ReunionView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = ReunionSerializer
    queryset = Reunion.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class Problema_asociadoView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = Problema_asociadoSerializer
    queryset = Problema_asociado.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

class RecomendacionView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                        mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = RecomendacionSerializer
    queryset = Recomendacion.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request, pk = None):
        if pk:
            return self.retrieve(request, pk)
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk = None):
        return self.update(request, pk)
    
    def delete(self, request, pk = None):
        return self.destroy(request, pk)

      
class  Largo(APIView):
    permission_classes = [IsAuthenticated]
    queryset = Recomendacion.objects.all()

    def get(self, request):
        f= open("largo.txt","r")
        n = f.read()
        f.close() 
        n = int(n)
        serializer = LargoSerializer(data={"largo":n})
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)
    
    def post(self, request):
        f= open("largo.txt","w+")
        excel = request.data["archivo"]
        df = pd.read_excel(excel)
        n = len(df.axes[1])
        f.write(str(n))
        f.close()
        
        return Response(status=status.HTTP_202_ACCEPTED)



class CargarArchivo(APIView):
    permission_classes = [IsAuthenticated]
    queryset = Recomendacion.objects.all()

    
    def post(self, request):
        queryset1 = Administrador.objects.all()
        queryset2 = Profesor.objects.all()
        queryset3 = Alumno.objects.all()
        queryset4 = Asignatura.objects.all()
        queryset5 = Coordinador.objects.all()
        queryset6 = Reporte.objects.all()
        queryset7 = Causal.objects.all()

        serializer = CargarSerializer()
        
        
        excel = request.data["archivo"]
        df = pd.read_excel(excel)
        df1 = pd.DataFrame(df, columns= ['rut'])
        n = len(df1)
        valor=[]
        is_reporte=False
        ingresado=[]
        
        x = datetime.datetime.now()
        año=x.strftime("%Y")
        mes=x.strftime("%m")
        if float(mes)/2<=3.5:
            semestre=1
        else:
            semestre=2

        semestreaño= int(str(semestre)+año)
        año=int(año)
        cantidad_causales=[]
        
        try: 
            for i in range(0,n):
                valor2=[]
                if str(df.iat[i,0])!='nan':
                    for j in range(0,14):
                        try:
                            valor2.append(df.iat[i,j].item())## Saca el valor de la columna i y fila j
                        except:
                            valor2.append(df.iat[i,j]) ## Saca el valor de la columna i y fila j
                    valor.append(valor2)
        except:
            is_reporte=True
            for i in range(0,n):
                valor2=[]
                if str(df.iat[i,0])!='nan':
                    for j in range(0,9):
                        try:
                            valor2.append(df.iat[i,j].item())## Saca el valor de la columna i y fila j
                        except:
                            valor2.append(df.iat[i,j]) ## Saca el valor de la columna i y fila j
                    valor.append(valor2)
        
        for i in range(0,n):
            cantidad_causales.append(0)
        if len(queryset7)!=0: #cantidad de causales
            for i in range(0,n):
                for j in range(0,len(queryset6)):
                    for k in range(0,len(queryset7)):
                        if queryset7[k].reporte == queryset6[j]:
                            if queryset6[j].alumno.rut  == valor[i][0]:
                                cantidad_causales[i] = cantidad_causales[i]+1

        for i in range(0,n):
            ingresado.append(False)
        if len(queryset3)!=0:
            for i in range(0, n):#ver si el alumno ya esta ingresado
                for j in range(0,len(queryset3)):
                    if queryset3[j].rut==valor[i][0]:
                        ingresado[i]=True
                        break
                
        if is_reporte:
            
            for i in range(0,n):
                prioridad = cantidad_causales[i]*0.3+ 1*0.7
                if prioridad<1:
                    prioridad=1
                elif prioridad>4:
                    prioridad=4
                prioridad = round(prioridad,0)
                if ingresado[i]:
                    for j in range(0,len(queryset4)):
                        if valor[i][8]==queryset4[j].glosa:
                            AsigId = queryset4[j].id


                    if len(queryset6)!=0:
                        RepId = len(queryset6) +1+i
                    else:
                        RepId = 1

                    datos_reportes={
                        "año": año,
                        "semestre":semestre, 
                        #"tipo_causal":, 
                        "asignaturas_reportadas":1, 
                        "prioridad":int(prioridad), 
                        "observacion":valor[i][7], 
                        "reiteraciones_causal":cantidad_causales[i], 
                        "tipo_ingreso" :valor[i][3],
                        "fecha" :x,
                        "alumno" :valor[i][0]
                    }

                    reporte = ReporteSerializer(data=datos_reportes)
                    reporte.is_valid(raise_exception=True)
                    reporte.save()
                    
                    if valor[i][6].lower()=="alto":
                        parti = 3
                    elif valor[i][6].lower()=="medio":
                        parti =2
                    elif valor[i][6].lower()=="bajo":
                        parti=1
                    else:
                        parti=0
                    datos_reportadas={
                        "asistencia":valor[i][5],
                        "participacion":parti,
                        "notas_ponderadas":int(valor[i][4]*10),
                        "año_semestre": semestreaño,
                        "observaciones":valor[i][7],
                        "asignatura":AsigId,
                        "reporte":RepId
                    }
                    reportadas = Asignatura_reportadaSerializer(data=datos_reportadas)
                    reportadas.is_valid(raise_exception=True)
                    reportadas.save()
              
                else:
                    for j in range(0,len(queryset4)):
                        if valor[i][8]==queryset4[j].glosa:
                            AsigId = queryset4[j].id


                    if len(queryset6)!=0:
                        RepId = len(queryset6) +1 +i
                    else:
                        RepId = 1
                    datos_alumno={
                        "rut":valor[i][0],
                        "nombre":valor[i][1],
                        #"año_nacimiento": ,
                        "correo":valor[i][2],
                        #"telefono": "",
                        #"año_ingreso": , 
                        #"semestre_ingreso": , 
                        #"carrera_origen": ,
                        #"copia_registro": ,
                        #"fecha_registro": ,
                        "estado_actual": 'reportado', 
                        "coordinador":queryset5[0].rut 
                        }
                        
                    alumno = AlumnoSerializer(data=datos_alumno)
                    alumno.is_valid(raise_exception=True)
                    alumno.save()
                    datos_reportes={
                        "año": año,
                        "semestre":semestre, 
                        #"tipo_causal":, 
                        "asignaturas_reportadas":1, 
                        "prioridad":int(prioridad), 
                        "observacion":valor[i][7], 
                        "reiteraciones_causal":cantidad_causales[i], 
                        "tipo_ingreso" :valor[i][3],
                        "fecha" :x,
                        "alumno" :valor[i][0]
                    }
                    reporte = ReporteSerializer(data=datos_reportes)
                    reporte.is_valid(raise_exception=True)
                    reporte.save()
                    
                    if valor[i][6].lower()=="alto":
                        parti = 3
                    elif valor[i][6].lower()=="medio":
                        parti =2
                    elif valor[i][6].lower()=="bajo":
                        parti=1
                    else:
                        parti=0
                    datos_reportadas={
                        "asistencia":valor[i][5],
                        "participacion":parti,
                        "notas_ponderadas":int(valor[i][4]*10),
                        "año_semestre": semestreaño,
                        "observaciones":valor[i][7],
                        "asignatura":AsigId,
                        "reporte":RepId
                    }
                    reportadas = Asignatura_reportadaSerializer(data=datos_reportadas)
                    reportadas.is_valid(raise_exception=True)
                    reportadas.save()
        else:
            for i in range(0,n):
                prioridad = cantidad_causales[i]*0.3+ valor[i][10]*0.7
                if prioridad<1:
                    prioridad=1
                elif prioridad>4:
                    prioridad=4
                prioridad = round(prioridad,0)
                if ingresado[i]:
                    if len(queryset6)!=0:
                        RepId = len(queryset6) +1+i
                    else:
                        RepId = 1                  
                    datos_reportes={
                        "año": año,
                        "semestre": semestre, 
                        "tipo_causal":valor[i][12], 
                        "asignaturas_reportadas":valor[i][10], 
                        "prioridad": int(prioridad), 
                        "observacion":valor[i][11], 
                        "reiteraciones_causal":cantidad_causales[i], 
                        "tipo_ingreso" :valor[i][9],
                        "fecha" :x,
                        "alumno" :valor[i][0]
                    }
                    reporte = ReporteSerializer(data=datos_reportes)
                    reporte.is_valid(raise_exception=True)  
                    reporte.save()

                    datos_causal={
                        "año":  año,
                        "tipo": valor[i][12],
                        "condiciones": valor[i][13],
                        "reporte":RepId
                    }
                    causal = CausalSerializer(data=datos_causal)
                    causal.is_valid(raise_exception=True)
                    causal.save()


                else:
                    if len(queryset6)!=0:
                        RepId = len(queryset6) +1+i
                    else:
                        RepId = 1
                    datos_alumno={
                        "rut":valor[i][0],
                        "nombre":valor[i][2],
                        "año_nacimiento":valor[i][3],
                        "correo":valor[i][1],
                        "telefono": valor[i][4],
                        "año_ingreso": valor[i][5], 
                        "semestre_ingreso": valor[i][6], 
                        "carrera_origen": valor[i][7],
                        #"copia_registro": ,
                        #"fecha_registro": ,
                        "estado_actual": valor[i][8], 
                        "coordinador":queryset5[0].rut 
                        }
                    alumno = AlumnoSerializer(data=datos_alumno)
                    alumno.is_valid(raise_exception=True)
                    alumno.save()
                    
                    datos_reportes={
                        "año": año,
                        "semestre": semestre, 
                        "tipo_causal":valor[i][12], 
                        "asignaturas_reportadas":valor[i][10], 
                        "prioridad": int(prioridad), 
                        "observacion":valor[i][11], 
                        "reiteraciones_causal":cantidad_causales[i], 
                        "tipo_ingreso" :valor[i][9],
                        "fecha" :x,
                        "alumno" :valor[i][0]
                    }
                    reporte = ReporteSerializer(data=datos_reportes)
                    reporte.is_valid(raise_exception=True)
                    reporte.save()

                    datos_causal={
                        "año":  año,
                        "tipo": valor[i][12],
                        "condiciones": valor[i][13],
                        "reporte":RepId
                    }
                    causal = CausalSerializer(data=datos_causal)
                    causal.is_valid(raise_exception=True)
                    causal.save()

        return Response(status=status.HTTP_202_ACCEPTED)

