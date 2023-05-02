from django.db import models


class Person(models.Model):
    username = models.CharField(max_length=100, unique= True)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    current_level=models.IntegerField()
    score=models.IntegerField()
    wrong_attempts=models.IntegerField()
    # last_answer=models.CharField(max_length=100)


