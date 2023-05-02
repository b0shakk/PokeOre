import json
from django.shortcuts import render, redirect
from .forms import RegisterForm
from .forms import LoginForm
from .models import Person
from django.contrib.auth import login, logout, authenticate
from .serializers import PersonSerializer, UpdateSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView

def index(request):
    if request.user.is_authenticated:
        return render(request, 'index.html')
    else:
        return redirect('/login')

def login_request(request):

    if request.method == 'POST':
        body_uni=request.body.decode('utf-8')
        body=json.loads(body_uni)

        username=body['username']
        password=body['password']
        
        queryset = Person.objects.filter(username=username)
        person= queryset[0]

        print(username, password)
        if person.password==password:
            return JsonResponse({'username':username})
    # return redirect('/login')
    # return render(request, 'registration/login.html', {"form": form})
    return JsonResponse({'username':''})


def current(request):
    if request.user.is_authenticated:
        queryset= Person.objects.filter(username= request.user.username)
        person= queryset[0]
        print(person.current_level)
        context = {
                'user': request.user.username,
                'level': person.current_level
            }
        return JsonResponse(context)
    return JsonResponse({})  

def address(request):
    if request.method=='POST':
        body_uni=request.body.decode('utf-8')
        body=json.loads(body_uni)

        username=body['username']
        queryset= Person.objects.filter(username=username)
        if len(queryset)==0:
            return JsonResponse({})
        person= queryset[0]
        print(person.current_level)
        context = {
                'level': person.current_level
            }
        return JsonResponse(context)
    return JsonResponse({})
    

def logout_request(request):
    logout(request)
    return redirect("/login")

def sign_up(request):
    if request.method == 'POST':
        body_uni=request.body.decode('utf-8')
        body=json.loads(body_uni)

        username=body['name']
        password=body['password']
        email=body['email']
        
        user=Person(username=username, email=email, password=password, score=0, current_level=1, wrong_attempts=0)
        user.save()    
        return JsonResponse({'username':username}) 
        

    return JsonResponse({'username':''})
    
        

def pie_chart(request):
    labels = []
    data = []

    queryset = Person.objects.order_by('score')[:5]
    for person in queryset:
        labels.append(person.username)
        data.append(person.score)

    return render(request, 'pie_chart.html', {
        'labels': labels,
        'data': data,
    })

def fetchScore(request):
    queryset = Person.objects.all()
    per=[]
    for person in queryset:
        per.append({"username":person.username, "score":person.score, "wrong_attempts":person.wrong_attempts, "current_level":person.current_level})
    # print(per)
    return JsonResponse({"data": per})

class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()


class UpdateView(APIView):
    serializer_class= UpdateSerializer
    def post(self, request, format=None):
        print("inside post")
        serializer = self.serializer_class(data= request.data)
        print(serializer)
        if serializer.is_valid():
            username = serializer.data.get('username')
            print(username)
            queryset = Person.objects.filter(username=username)

            if not queryset.exists():
                return Response({'msg': "not found"}, status=status.HTTP_404_NOT_FOUND)
            
            person= queryset[0]
            person.score +=100
            if(person.score>900):
                person.score= 900
            person.current_level +=1
            if(person.current_level>10):
                person.current_level=10
            print(person.score)
            print(person.current_level)
            person.save(update_fields=['score', 'current_level'])
            return Response(PersonSerializer(person).data, status=status.HTTP_200_OK)

        return Response({'Bad Request': "Invalid username"}, status=status.HTTP_400_BAD_REQUEST)

class NegateView(APIView):
    serializer_class= UpdateSerializer
    def post(self, request, format=None):
        print("inside post neg")
        serializer = self.serializer_class(data= request.data)
        print(serializer)
        if serializer.is_valid():
            username = serializer.data.get('username')
            print(username)
            queryset = Person.objects.filter(username=username)

            if not queryset.exists():
                return Response({'msg': "not found"}, status=status.HTTP_404_NOT_FOUND)
            
            person= queryset[0]
            
            person.wrong_attempts+=1
            print(person.wrong_attempts)
            person.save(update_fields=['wrong_attempts'])
            return Response(PersonSerializer(person).data, status=status.HTTP_200_OK)

        return Response({'Bad Request': "Invalid username"}, status=status.HTTP_400_BAD_REQUEST)
    
class TryAgainView(APIView):
    serializer_class= UpdateSerializer
    def post(self, request, format=None):
        print("inside post try")
        serializer = self.serializer_class(data= request.data)
        print(serializer)
        if serializer.is_valid():
            username = serializer.data.get('username')
            print(username)
            queryset = Person.objects.filter(username=username)

            if not queryset.exists():
                return Response({'msg': "not found"}, status=status.HTTP_404_NOT_FOUND)
            
            person= queryset[0]
            person.score= 0
            person.current_level= 1
            person.wrong_attempts=0
            person.save(update_fields=['score', 'current_level','wrong_attempts'])
            return Response(PersonSerializer(person).data, status=status.HTTP_200_OK)

        return Response({'Bad Request': "Invalid username"}, status=status.HTTP_400_BAD_REQUEST)