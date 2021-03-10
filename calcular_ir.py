import sys, getopt, argparse, os
import pandas as pd
from tabulate import tabulate
import reverse_geocoder as rg
import geopy.distance as distance

parser = argparse.ArgumentParser(
    description='''Programa para consola que calcula indice de riesgo para un caso particular.''',
    epilog='''Los casos simulados se basan en ubicaciones reales de sismos obtenidos por el SSN.'''
)
parser.add_argument('vector_sismo', nargs='*', default=[], help='Vector de valores para sismo, default vacio (vector aleatorio).')
parser.add_argument('vector_persona', nargs='*', default=[], help='Vector de valores para la persona, default vacio (vector aleatorio).')
args=parser.parse_args()

def caso_aleatorio():
    print('Calculando caso simulado...')
    try:
        archivo = 'casos_simulados.csv'
        data = pd.read_csv(archivo)
    except FileNotFoundError:
        print ('El archivo', archivo, 'no se ha encontrado. Puede ser descargado en https://github.com/Roppest/semaforoDeRiesgos/blob/f427c5bbca71f3e9a8d64eb94aeb5a0ed0601b00/casos_simulados.csv')
        sys.exit(2)
    caso_random = data.sample()
    geo , sismo = geo_loc(caso_random.Slat.values[0],caso_random.Slong.values[0])
    lat, lon = geo_loc(caso_random.Plat.values[0],caso_random.Plong.values[0])
    screen_clear()
    print('Datos del Sismo')
    print('---------------')
    print('Magnitud:', caso_random.Mag.values[0])
    print('Epicentro:',geo,',',sismo)
    print()
    print('Datos de la Persona')
    print('-------------------')
    print('Ubicacion: ',lat,',',lon)
    print('Distancia del Epicentro: ',distancia((caso_random.Slat.values[0],caso_random.Slong.values[0]),(caso_random.Plat.values[0],caso_random.Plong.values[0])), 'km.')

def distancia(g1,g2):
    distancia = round(distance.distance(g1,g2).km)
    return distancia

def ponderacion_distancia(distancia):
    if distancia < 80:
        return 2.5
    elif 80 <= distancia and distancia < 140:
        return 2
    elif 140 <= distancia and distancia < 200:
        return 1.5
    elif 200 <= distancia and distancia < 300:
        return 1
    elif 300 <= distancia and distancia < 400:
        return 0.5
    
def geo_loc(lat, long):
    loc = rg.search((lat,long))
    return loc[0]['name'],loc[0]['admin1']

def main(argv):
    if len(argv) == 1:
        caso_aleatorio()

def screen_clear():
   # for mac and linux(here, os.name is 'posix')
   if os.name == 'posix':
      _ = os.system('clear')
   else:
      # for windows platfrom
      _ = os.system('cls')

if __name__ == '__main__':
    main(sys.argv)