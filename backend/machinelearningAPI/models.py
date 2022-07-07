from django.db import models

# Create your models here.

class Object (models.Model):
    name = models.CharField(max_length=40, blank=True)
    image = models.ImageField(upload_to='images')

