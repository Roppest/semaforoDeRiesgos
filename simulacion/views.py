from django.shortcuts import render
from django.template import loader
# Create your views here.

def home(request):
    loader.get_template('simulacion/home.html')
    return render(request,'simulacion/home.html',{})
