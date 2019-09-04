# Generated by Django 2.2.4 on 2019-09-04 06:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Professional',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120, verbose_name='Name')),
                ('surname', models.CharField(max_length=120, verbose_name='Surname')),
                ('id_card', models.CharField(max_length=100, verbose_name='DNI o Passaport')),
                ('telephone_number_1', models.CharField(max_length=11, verbose_name='Phone number 1')),
                ('telephone_number_2', models.CharField(blank=True, max_length=11, verbose_name='Phone number 2')),
                ('mail', models.EmailField(max_length=254, unique=True, verbose_name='E-mail')),
                ('username', models.CharField(max_length=60, verbose_name='Username')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creation_datetime', models.DateTimeField(auto_now=True, verbose_name='Creation date')),
                ('comment', models.TextField()),
                ('rating', models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120, verbose_name='Name')),
                ('description', models.TextField(verbose_name='Description')),
            ],
            options={
                'verbose_name': 'Service',
                'verbose_name_plural': 'Services',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60, verbose_name='Name')),
                ('surname', models.CharField(max_length=120, verbose_name='Surname')),
                ('birthdate', models.DateField(verbose_name='Birthdate')),
                ('telephone_number_1', models.CharField(max_length=11, verbose_name='Phone number 1')),
                ('telephone_number_2', models.CharField(blank=True, max_length=11, verbose_name='Phone number 2')),
                ('mail', models.EmailField(max_length=254, unique=True, verbose_name='E-mail')),
                ('username', models.CharField(max_length=60, verbose_name='Username')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creation_datetime', models.DateTimeField(auto_now=True, verbose_name='Creation date')),
                ('scheduled_datetime', models.DateTimeField(verbose_name='Scheduled date')),
                ('professional', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='orgasmi_backend.Professional')),
                ('services', models.ManyToManyField(related_name='order_services', to='orgasmi_backend.Service')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='orgasmi_backend.User')),
                ('user_review', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='orgasmi_backend.Review')),
            ],
        ),
    ]
