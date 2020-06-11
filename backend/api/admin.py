from django.contrib import admin
from .models import Administrador, Coordinador, Profesor, Alumno, Reporte, Asignatura, Asignatura_reportada, Causal, Contacto, Derivacion, Reunion, Problema_asociado, Recomendacion

admin.site.register(Administrador)
admin.site.register(Coordinador)
admin.site.register(Profesor)
admin.site.register(Alumno)
admin.site.register(Reporte)
admin.site.register(Asignatura)
admin.site.register(Asignatura_reportada)
admin.site.register(Causal)
admin.site.register(Contacto)
admin.site.register(Derivacion)
admin.site.register(Reunion)
admin.site.register(Problema_asociado)
admin.site.register(Recomendacion)