from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Eliminar datos previos
        User.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Usuarios eliminados.'))

        # Crear usuarios de ejemplo
        marvel = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='1234')
        dc = User.objects.create_user(username='batman', email='batman@dc.com', password='1234')
        self.stdout.write(self.style.SUCCESS('Usuarios de ejemplo creados.'))
        # Aquí agregarías lógica para teams, activities, leaderboard, workouts
        # usando modelos Django personalizados
        self.stdout.write(self.style.SUCCESS('¡Base de datos poblada con datos de ejemplo!'))
