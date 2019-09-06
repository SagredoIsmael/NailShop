from rest_framework import serializers
from orgasmi_backend.models import *


class LanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Language
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer): 

    class Meta:
        model = User
        fields = '__all__'

class ProfessionalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Professional
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = '__all__'    

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):

    user = UserSerializer()
    professional = ProfessionalSerializer()
    services = ServiceSerializer(many=True)
    user_review = ReviewSerializer()

    class Meta:
        model = Order
        fields = '__all__'