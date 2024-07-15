from django.db import models

# Create your models here.

class Postulacion(models.Model):
    rut = models.CharField(max_length=12)  
    nombre = models.CharField(max_length=100)  
    email = models.EmailField()
    celular = models.CharField(max_length=15)  

    def __str__(self):
        return f"{self.nombre} - {self.email}"