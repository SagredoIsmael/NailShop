from orgasmi_backend.models import *
from orgasmi_backend.serializers import *
from rest_framework import viewsets
import json



class UsersViewSet(viewsets.ModelViewSet):

        queryset = User.objects.all()
        serializer_class = UserSerializer

class ProfessionalViewSet(viewsets.ModelViewSet):

        queryset = Professional.objects.all()
        serializer_class = ProfessionalSerializer

class ServicesViewSet(viewsets.ModelViewSet):

        queryset = Service.objects.all()
        serializer_class = ServiceSerializer        

class OrdersViewSet(viewsets.ModelViewSet):

        queryset = Order.objects.all()
        serializer_class = OrderSerializer        