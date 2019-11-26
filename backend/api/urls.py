from django.urls import path

from . import views

urlpatterns = [
    path('', views.SocietyListView.as_view()),
]