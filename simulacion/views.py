from django.shortcuts import render
from django.http import Http404
from django.template import loader
from .models import Caso
import random

def home(request):
    loader.get_template('simulacion/home.html')
    return render(request,'simulacion/home.html',{})
def caso(request):
    casos = Caso.objects.all()
    if(not len(casos)):
        raise Http404('No existe información')
    caso_random = random.choice(casos)
    loader.get_template('simulacion/caso.html')
    return render(request,'simulacion/caso.html',{'caso_random':caso_random})
