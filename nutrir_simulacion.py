import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'semaforoDeRiesgos.settings')

import django
django.setup()

from simulacion.models import Caso
import pandas as pd

def nutrir():
    data = pd.read_csv('casos_simulados.csv')
    for index,row in data.iterrows():
        caso = Caso(
        mag = row['Mag'],
        s_lat = row['Slat'],
        s_long = row['Slong'],
        d_fis = row['dfis'],
        d_sen = row['dsen'],
        u = row['U'],
        p_lat = row['Plat'],
        p_long = row['Plong'],
        p = row['P'],
        v = row['V'],
        ir = row['IR'],
        sem = row['Sem'],
        )
        caso.save()
if __name__== '__main__':
    print('Nutriendo BD de simulacion...')
    nutrir()
