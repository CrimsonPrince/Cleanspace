from django.urls import path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('', views.SocietyListView.as_view()),
        path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
]