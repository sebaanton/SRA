from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now

class User(AbstractUser):
    pass

class Administrador(User):
    rut = models.CharField(max_length=10, primary_key=True, blank=False, unique=True)
    nombre = models.CharField(max_length=50, blank=False)
    telefono = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Administrador'

class Coordinador(User):
    rut = models.CharField(max_length=10, primary_key=True, blank=False, unique=True)
    nombre = models.CharField(max_length=50, blank=False)
    telefono = models.IntegerField(null=True, blank=True)
    admin = models.ForeignKey(Administrador, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Coordinador'

class Profesor(User):
    nombre = models.CharField(max_length=50, blank=False)
    telefono = models.IntegerField(null=True, blank=True)
    jornada = models.SmallIntegerField(null=True, blank=True)
    admin = models.ForeignKey(Administrador, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Profesor'

class Alumno(models.Model):
    rut = models.CharField(max_length=10, primary_key=True, blank=False, unique=True)
    nombre = models.CharField(max_length=50, blank=False)
    año_nacimiento = models.SmallIntegerField(null=False, blank=False, default=0)
    correo = models.CharField(max_length=50, blank=False)
    telefono = models.IntegerField(null=False, blank=False)
    carrera_origen = models.TextField(blank=True)
    fecha_registro = models.DateTimeField(default=now, editable=False)
    estado_actual = models.CharField(max_length=50, blank=False)
    coordinador = models.ForeignKey(Coordinador, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.nombre

class Reporte(models.Model):
    año = models.SmallIntegerField(null=False, blank=False, default=2010)
    semestre = models.SmallIntegerField(null=False, blank=False, default=1)
    tipo_causal = models.IntegerField(null=False, blank=False, default=0)
    asignaturas_reportadas = models.SmallIntegerField(null=False, blank=False, default=0)
    prioridad = models.SmallIntegerField(null=False, blank=False, default=0)
    observacion = models.CharField(max_length=50, null=False, blank=False, default='')
    reiteraciones_causal = models.SmallIntegerField(null=False, blank=False, default=0)
    tipo_ingreso = models.CharField(max_length=50, blank=False)
    fecha = models.DateTimeField(default=now, editable=False)
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)

class Asignatura(models.Model):
    codigo_asignatura = models.SmallIntegerField(null=False, blank=False, default=0)
    glosa = models.CharField(max_length=40, blank=True)
    profesor = models.ForeignKey(Profesor, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.codigo_asignatura

class Asignatura_reportada(models.Model):
    asistencia = models.SmallIntegerField(null=False, blank=False, default=0)
    participacion = models.SmallIntegerField(null=False, blank=False, default=1)
    notas_ponderadas = models.SmallIntegerField(null=False, blank=False, default=1)
    año_semestre = models.IntegerField(null=False, blank=False, default=12010)
    observaciones = models.TextField(blank=True)
    asignatura = models.ForeignKey(Asignatura, on_delete=models.DO_NOTHING)
    reporte = models.ForeignKey(Reporte, on_delete=models.CASCADE)

class Causal(models.Model):
    año = models.SmallIntegerField(null=False, blank=False, default=2010)
    tipo = models.SmallIntegerField(null=False, blank=False, default=0)
    condiciones = models.TextField(null=True, blank=True)
    reporte = models.ForeignKey(Reporte, on_delete=models.CASCADE)

class Contacto(models.Model):
    fecha = models.DateTimeField(null=False, blank=False, default=now)
    hora = models.SmallIntegerField(null=False, blank=False, default=0000)
    interes = models.BooleanField(null=False, blank=False, default=False)
    medio_contacto = models.CharField(max_length=40, blank=False)
    autogestion = models.BooleanField(null=False, blank=False, default=True)
    nombre_contacto = models.CharField(max_length=50, blank=False)
    reporte = models.ForeignKey(Reporte, on_delete=models.CASCADE)

class Derivacion(models.Model):
    entidad_derivacion = models.CharField(max_length=50, blank=False)
    fecha = models.DateTimeField(null=False, blank=False, default=now)
    observacion = models.TextField(blank=True)
    contacto = models.ForeignKey(Contacto, on_delete=models.CASCADE)

class Reunion(models.Model):
    nombre = models.CharField(max_length=50, blank=False)
    fecha = models.DateTimeField(null=False, blank=False, default=now)
    hora = models.SmallIntegerField(null=False, blank=False, default=0000)
    realizacion = models.BooleanField(null=False, blank=False, default=False)
    cumplimiento_objetivos = models.BooleanField(null=False, blank=False, default=False)
    medio_reunion = models.CharField(max_length=50, blank=False)
    observaciones = models.TextField(blank=False, default='')
    iniciales_academico = models.CharField(max_length=10, blank=False, default='')
    contacto = models.ForeignKey(Contacto, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Problema_asociado(models.Model):
    tipo = models.SmallIntegerField(null=False, blank=False)
    explicacion = models.TextField(blank=False, default='')
    estado = models.CharField(max_length=10, blank=False, default='')
    reunion = models.ForeignKey(Reunion, on_delete=models.CASCADE)

class Recomendacion(models.Model):
    tipo = models.SmallIntegerField(null=False, blank=False)
    estado = models.CharField(max_length=10, blank=False, default='')
    reunion = models.ForeignKey(Reunion, on_delete=models.CASCADE)
