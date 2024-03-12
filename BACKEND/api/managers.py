# managers.py

from django.contrib.auth.models import BaseUserManager
from django.utils.crypto import get_random_string

class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, name, password, **extra_fields)

    def _generate_username(self, email):
        return email.split('@')[0]  # Extract username from email

    def _get_unique_username(self, email):
        username = self._generate_username(email)
        while self.model.objects.filter(username=username).exists():
            username = self._generate_username(email) + '_' + get_random_string(5)  # Append random string to ensure uniqueness
        return username

    def create_user_with_unique_username(self, email, name, password=None, **extra_fields):
        if not extra_fields.get('username'):
            extra_fields['username'] = self._get_unique_username(email)
        return self.create_user(email, name, password, **extra_fields)
