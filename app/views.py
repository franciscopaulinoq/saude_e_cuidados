from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'app/index.html')

def imc(request):
    return render(request, 'app/imc.html')