from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics, mixins
from .models import (Administrador, Coordinador, Profesor, Alumno, Reporte,
                     Asignatura, Asignatura_reportada, Causal, Contacto, Derivacion,
                     Reunion, Problema_asociado, Recomendacion)
from .serializers import (AdministradorSerializer, CoordinadorSerializer, ProfesorSerializer,
                          AlumnoSerializer, ReporteSerializer, AsignaturaSerializer,
                          Asignatura_reportadaSerializer, CausalSerializer, ContactoSerializer,
                          DerivacionSerializer, ReunionSerializer, Problema_asociadoSerializer,
                          RecomendacionSerializer)
from django.db import connection
from rest_framework.views import APIView

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


