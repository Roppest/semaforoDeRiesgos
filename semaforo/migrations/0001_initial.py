# Generated by Django 3.1.5 on 2021-01-21 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sismo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(verbose_name='Fecha')),
                ('epicentro', models.CharField(max_length=150)),
                ('profundidad', models.DecimalField(decimal_places=1, max_digits=6)),
                ('magnitud', models.DecimalField(decimal_places=1, max_digits=2)),
                ('latitud', models.DecimalField(decimal_places=3, max_digits=3)),
                ('longitud', models.DecimalField(decimal_places=3, max_digits=3)),
            ],
        ),
    ]
