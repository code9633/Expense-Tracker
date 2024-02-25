from django.urls import path, include
from .views import register, userLogin


urlpatterns = [
    path("api/register", register, name = "register"),
    path("api/login", userLogin, name = "userLogin")
]
