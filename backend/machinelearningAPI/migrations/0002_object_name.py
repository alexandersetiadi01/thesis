# Generated by Django 4.0.6 on 2022-07-06 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machinelearningAPI', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='object',
            name='name',
            field=models.CharField(blank=True, max_length=40),
        ),
    ]
