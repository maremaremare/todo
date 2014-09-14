# -*- coding: utf-8 -*-
from django.db import models

class Task(models.Model):

    title = models.CharField(max_length=500)
    #parent = models.ForeignKey(self, null=True, blank=True)

    class Meta:
        verbose_name = ('Task')
        verbose_name_plural = ('Tasks')

    def __unicode__(self):
        return self.title
    