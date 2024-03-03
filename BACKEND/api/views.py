from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer
from .models import CustomUser
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = UserSerializer(data = data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            if CustomUser.objects.filter(email = email).exists():
                return JsonResponse({"error": 'User with this email already exist'}, status = 400)
            serializer.save()
            return JsonResponse({"success": 'User registered sucessfully '}, status = 201)
        else :
            return JsonResponse(serializer.errors, status =  400)      
    else:
        return JsonResponse({"error": 'Method not allowed'}, status = 405)

@csrf_exempt
def userLogin(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request, email = email, password = password)

        if user is not None:
            login(request, user)
            return JsonResponse({"success" : "Login successfull", "userName" : user.name})

        else :
            return JsonResponse({'error' : "Invalid email or password"}, status = 400)

    else :
        return JsonResponse({'error' : 'Method not allowed'}, status = 405)

        