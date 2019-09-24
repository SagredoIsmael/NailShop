from django.db import models

class Language(models.Model):

    abbreviation = models.CharField(max_length=3, unique=True)

    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

class Brand(models.Model):

    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name

class User(models.Model): 

    name = models.CharField("Name",max_length=60)

    surname = models.CharField("Surname",max_length=120)

    birthdate = models.DateField("Birthdate")

    telephone_number_1 = models.CharField("Phone number 1",max_length=11)

    telephone_number_2 = models.CharField("Phone number 2",max_length=11,blank=True)

    mail = models.EmailField("E-mail", unique = True)

    username = models.CharField("Username", max_length=60)

    language = models.ForeignKey(Language, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return f"{self.name} {self.surname}"


class Professional(models.Model):

    name = models.CharField("Name",max_length=120)

    surname = models.CharField("Surname",max_length=120)

    id_card = models.CharField("DNI o Passaport", max_length=100)

    telephone_number_1 = models.CharField("Phone number 1",max_length=11)

    telephone_number_2 = models.CharField("Phone number 2",max_length=11,blank=True)

    mail = models.EmailField("E-mail", unique = True)
    
    username = models.CharField("Username", max_length=60)

    languages = models.ManyToManyField("Language", related_name="professional_languages",blank=True)

    brands = models.ManyToManyField("Brand", related_name="professional_brands",blank=True)
    
    def __str__(self):  
        return self.name

class Tag(models.Model):

    description = models.TextField("Tag description")

    def __str__(self):
        return self.name

class Tip(models.Model):

    name = models.CharField("Tip name",max_length=120)
    
    description = models.TextField("Tag description")

    def __str__(self):
        return self.name

class ServiceMacroCategory(models.Model):

    name = models.CharField("Macro Category Name",max_length=120)

    def __str__(self):
        return self.name

class ServiceCategory(models.Model):

    name = models.CharField("Category Name",max_length=120)

    def __str__(self):
        return self.name



class Service(models.Model):

    name = models.CharField("Name of the service",max_length=240)

    short_description = models.TextField("Short Description")

    description = models.TextField("Description")

    duration_in_weeks = model.IntegerField("Duration of service in weeks", default=2)

    execution_time_in_hours = models.FloatField(default=0.0)

    price = models.FloatField(default=0.0)

    macro_category = models.ForeignKey(ServiceMacroCategory,on_delete=models.PROTECT)

    tags = ManyToManyField("Tag", related_name="service_tags", blank=True)

    tips = ManyToManyField("Tip", related_name="service_tips", blank=True)

    category = models.ForeignKey(ServiceCategory,on_delete=models.PROTECT)

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"

    def __str__(self):
        return self.name

        
class Review(models.Model):
    RATING_CHOICES = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    creation_datetime = models.DateTimeField("Creation date", auto_now=True)
    comment = models.TextField()
    rating = models.IntegerField(choices=RATING_CHOICES)


class Order(models.Model):

    user = models.ForeignKey(User, on_delete=models.PROTECT)

    professional = models.ForeignKey(Professional, on_delete=models.PROTECT)

    services = models.ManyToManyField("Service", related_name="order_services")

    creation_datetime = models.DateTimeField("Creation date", auto_now=True)

    scheduled_datetime = models.DateTimeField("Scheduled date")

    user_review = models.ForeignKey(Review, blank=True, null=True, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.user} - {self.professional} on {self.scheduled_datetime}"



