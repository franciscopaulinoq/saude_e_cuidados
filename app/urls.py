# app/urls.py

from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('imc/', views.imc, name='imc'),
]