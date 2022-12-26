# Generated by Django 4.0.6 on 2022-12-25 05:26

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import the_indegenous_backend.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Publisher',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('authors', models.ManyToManyField(to='the_indegenous_backend.author')),
                ('country', models.ManyToManyField(to='the_indegenous_backend.country')),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('year', models.PositiveIntegerField(blank=True, default=2022, null=True, validators=[django.core.validators.MinValueValidator(1), the_indegenous_backend.models.max_value_current_year])),
                ('description', models.TextField()),
                ('url', models.URLField()),
                ('author', models.ManyToManyField(blank=True, null=True, to='the_indegenous_backend.author')),
                ('countries', models.ManyToManyField(blank=True, null=True, to='the_indegenous_backend.country')),
                ('genre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bookgenre', to='the_indegenous_backend.genre')),
                ('language', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='the_indegenous_backend.language')),
                ('publisher', models.ManyToManyField(blank=True, null=True, to='the_indegenous_backend.publisher')),
                ('sub_genre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='booksubgenre', to='the_indegenous_backend.genre')),
            ],
        ),
        migrations.AddField(
            model_name='author',
            name='country',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='the_indegenous_backend.country'),
        ),
    ]
