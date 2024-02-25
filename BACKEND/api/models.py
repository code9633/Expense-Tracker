from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(unique = True)
    name = models.CharField(max_length = 100)
    password = models.CharField(max_length = 128)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []



    