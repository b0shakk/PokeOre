from rest_framework import serializers
from .models import Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('username','score', 'current_level', 'wrong_attempts')

class UpdateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(validators=[])
    class Meta:
        model = Person
        fields = ('username', 'score', 'current_level', 'wrong_attempts')