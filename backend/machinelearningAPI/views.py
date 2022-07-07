from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from .serializer import ObjectSerializer
from .models import Object
from rest_framework import viewsets
# Create your views here.

class MachineLearning(viewsets.ModelViewSet):

    queryset = Object.objects.all()
    serializer_class = ObjectSerializer

    # objects = Object.objects.all()
    # name = ''
    # for object in objects:
    #     name += f'the object name is {object.name} \n'

    # def get(self, request):
    #     return HttpResponse(self.name)
