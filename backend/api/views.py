from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import logging

from . import models
from . import serializers

logger = logging.getLogger(__name__)


class SocietyListView(ListAPIView):
    queryset = models.Society.objects.all()
    serializer_class = serializers.SocietySerializer

class SocietyDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.Society.objects.all()
    serializer_class = serializers.SocietySerializer

class SocietyCreateView(CreateAPIView):
    queryset = models.Society.objects.all()
    serializer_class = serializers.SocietySerializer