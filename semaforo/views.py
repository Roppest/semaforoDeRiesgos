from django.shortcuts import render
from django.http import HttpResponse
import geocoder

def index(request):
    g = geocoder.ip('me')
    mis_coordenadas = g.latlng

    return HttpResponse('Último Sismo Detectado: ')
