# Generated by Django 5.0.7 on 2024-09-11 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_alter_tracking_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='profile_image',
            field=models.ImageField(null=True, upload_to='media/profile_images/'),
        ),
    ]
