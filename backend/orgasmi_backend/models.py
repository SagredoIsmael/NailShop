from django.db import models

class User(models.Model): 

    name = models.CharField("Name",max_length=60)

    surname = models.CharField("Surname",max_length=120)

    birthdate = models.DateField("Birthdate")

    telephone_number_1 = models.CharField("Phone number 1",max_length=11)

    telephone_number_2 = models.CharField("Phone number 2",max_length=11,blank=True)

    mail = models.EmailField("E-mail", unique = True)

    username = models.CharField("Username", max_length=60)

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
    
    def __str__(self):
        return self.name


class Service(models.Model):

    name = models.CharField("Name",max_length=120)

    description = models.TextField("Description")

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"

    def __str__(self):
        return self.name

class Order(models.Model):

    user = models.ForeignKey(User, on_delete=models.PROTECT)

    professional = models.ForeignKey(Professional, on_delete=models.PROTECT)

    services = models.ManyToManyField("Service", related_name="order_services")

    creation_datetime = models.DateTimeField("Creation date", auto_now=True)

    scheduled_datetime = models.DateTimeField("Scheduled date")

    user_review = models.ForeignKey(Review, on_delete=models.PROTECT)


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

