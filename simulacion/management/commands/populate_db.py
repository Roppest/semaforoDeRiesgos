from django.core.management.base import BaseCommand
from simulacion.models import Caso
import pandas as pd

data = pd.read_csv('casos_simulados.csv')

class Command(BaseCommand):

    def populate(self):
        for index,row in data.iterrows():
            caso = Caso(
            mag = row['Mag'],
            s_lat = ['Slat'],
            s_long = ['Slong'],
            d_fis = ['dfis'],
            d_sen = ['dsen'],
            u = ['U'],
            p_lat = ['Plat'],
            p_long = ['Plong'],
            p = ['P'],
            v = ['V'],
            ir = ['IR'],
            sem = ['S'],
            )
            caso.save()
    def handle(self):
        self.populate()
