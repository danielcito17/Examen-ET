from django.shortcuts import render
from django.http import HttpResponse
from .models import Postulacion
# Create your views here.

def Nosotros(request):
    return render(request, 'paginas/Nosotros.html')
def index(request):
    return render(request, 'index.html')
def Registro(request):
    Registro = Postulacion.objects.all()
    return render(request, 'paginas/Registro.html')
def Productos(request):
    return render(request, 'paginas/Productos.html')
def Contacto(request):
    return render(request, 'paginas/Contacto.html')
def Carrito(request):
    return render(request, 'paginas/Carrito.html')
