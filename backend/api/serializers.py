from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import (User, Administrador, Coordinador, Profesor, Alumno,
                     Reporte, Asignatura, Asignatura_reportada, Causal, Contacto,
                     Derivacion, Reunion, Problema_asociado, Recomendacion)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AdministradorSerializer(UserSerializer):
    def validate_password(self, value: str) -> str:
        return make_password(value)

    class Meta(UserSerializer.Meta):
        model = Administrador
        

class CoordinadorSerializer(UserSerializer):
    def validate_password(self, value: str) -> str:
        return make_password(value)

    class Meta(UserSerializer.Meta):
        model = Coordinador
        

class ProfesorSerializer(UserSerializer):
    def validate_password(self, value: str) -> str:
        return make_password(value)

    class Meta(UserSerializer.Meta):
        model = Profesor
        

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Alumno
        fields = '__all__'

class ReporteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Reporte
        fields = '__all__'

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Asignatura
        fields = '__all__'

class Asignatura_reportadaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Asignatura_reportada
        fields = '__all__'

class CausalSerializer(serializers.ModelSerializer):
    class Meta:
        model= Causal
        fields = '__all__'

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contacto
        fields = '__all__'

class DerivacionSerializer(serializers.ModelSerializer):
    class Meta:
        model= Derivacion
        fields = '__all__'

class ReunionSerializer(serializers.ModelSerializer):
    class Meta:
        model= Reunion
        fields = '__all__'

class Problema_asociadoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Problema_asociado
        fields = '__all__'

class RecomendacionSerializer(serializers.ModelSerializer):
    class Meta:
        model= Recomendacion
        fields = '__all__'
