from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Person


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=False)

    class Meta:
        model= User
        fields = ["username", "email", "password1", "password2"]


class LoginForm(forms.ModelForm):
    class Meta:
        model = Person
        fields = ["username", "password"]