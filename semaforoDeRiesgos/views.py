from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def home(request):
    return render(request,'semaforoDeRiesgos/home.html',{})
