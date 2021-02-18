from django.db import models

# Create your models here.
class Caso(models.Model):
    mag = models.DecimalField(max_digits=2, decimal_places=1)
    s_lat = models.DecimalField(max_digits=9, decimal_places=3)
    s_long = models.DecimalField(max_digits=9, decimal_places=3)
    d_fis = models.DecimalField(max_digits=2, decimal_places=1)
    d_sen = models.DecimalField(max_digits=2, decimal_places=1)
    u = models.DecimalField(max_digits=2, decimal_places=1)
    p_lat = models.DecimalField(max_digits=9, decimal_places=5)
    p_long = models.DecimalField(max_digits=9, decimal_places=5)
    p = models.DecimalField(max_digits=2, decimal_places=1)
    v = models.DecimalField(max_digits=2, decimal_places=1)
    ir = models.DecimalField(max_digits=3, decimal_places=2)
    sem = models.CharField(max_length=10)
