
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from . import views
from .views import MachineLearning

router = routers.DefaultRouter()
router.register('object', MachineLearning)

urlpatterns = [
    path('getObjectProperties/', include(router.urls))
]
