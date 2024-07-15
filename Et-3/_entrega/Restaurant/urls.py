from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Nosotros/', views.Nosotros, name='Nosotros'),
    path('Registro/', views.Registro, name='Registro'),
    path('Productos/', views.Productos, name='Productos'),
    path('Contacto/', views.Contacto, name='Contacto'),
    path('Carrito/', views.Carrito, name='Carrito'),
]