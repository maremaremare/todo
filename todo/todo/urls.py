from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from rest_framework import routers, serializers, viewsets

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf import settings
from tasks.models import Task
admin.autodiscover()


class TaskSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Task
        fields = ('title','id')


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = patterns('',
                       url(r'^$',
                           TemplateView.as_view(template_name='base.html')),
                       url(r'^', include(router.urls)),
                       url(r'^api-auth/', include('rest_framework.urls',
                                                  namespace='rest_framework')),
                       url(r'^admin/', include(admin.site.urls)),
                       )
urlpatterns += patterns('',
(r'^static/(?P.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
)