from django.db import models

# Create your models here.
class People(models.Model):
    company = models.CharField(max_length = 200)
    department = models.CharField(max_length = 200)
    tubNum = models.CharField(max_length = 50)
    lastName = models.CharField(max_length = 50)
    firstName = models.CharField(max_length = 50)
    middleName = models.CharField(max_length = 50)
    passport = models.CharField(max_length = 50)
    numberPassport = models.CharField(max_length = 50)
    datePassport = models.CharField(max_length = 50)
    address = models.CharField(max_length = 50)
    phone = models.CharField(max_length = 50)


