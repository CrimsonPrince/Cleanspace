from rest_framework import serializers
from . import models




class SocietySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Society
        fields = ('id', 'email', 'name', 'description', 'category')