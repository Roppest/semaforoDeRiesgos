from django.db import models

# Create your models here.
class Sismo(models.Model):
    fecha = models.DateTimeField('Fecha')
    epicentro = models.CharField(max_length=150)
    profundidad = models.DecimalField(max_digits=6, decimal_places=1)
    magnitud = models.DecimalField(max_digits=2, decimal_places=1)
    latitud = models.DecimalField(max_digits=3, decimal_places=3)
    longitud = models.DecimalField(max_digits=3, decimal_places=3)

    def __str__(self):
        str = str(self.fecha), str(self.magnitud) , self.epicentro
        return str
