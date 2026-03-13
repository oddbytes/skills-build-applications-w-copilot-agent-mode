
from djongo import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
	email = models.EmailField(unique=True)
	team = models.ForeignKey('Team', null=True, blank=True, on_delete=models.SET_NULL, related_name='members')
	def __str__(self):
		return self.username

class Team(models.Model):
	name = models.CharField(max_length=100, unique=True)
	description = models.TextField(blank=True)
	def __str__(self):
		return self.name

class Activity(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities')
	type = models.CharField(max_length=50)
	duration = models.PositiveIntegerField(help_text='Duration in minutes')
	date = models.DateField()
	def __str__(self):
		return f"{self.user.username} - {self.type} ({self.date})"

class Workout(models.Model):
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True)
	suggested_for = models.ManyToManyField(Team, blank=True)
	def __str__(self):
		return self.name

class Leaderboard(models.Model):
	team = models.OneToOneField(Team, on_delete=models.CASCADE, related_name='leaderboard')
	points = models.PositiveIntegerField(default=0)
	def __str__(self):
		return f"{self.team.name} - {self.points} pts"
