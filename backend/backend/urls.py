from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from main import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

router = routers.DefaultRouter()
router.register(r'main', views.PersonView, 'main')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('main.urls')),
    path('', include('django.contrib.auth.urls')),
    path('api/user/', views.current, name='api/user/'),
    path('level1/', views.index, name='level1'),
    path('level2/', views.index, name='level2'),
    path('level3/', views.index, name='level3'),
    path('level4/', views.index, name='level4'),
    path('level5/', views.index, name='level5'),
    path('level6/', views.index, name='level6'),
    path('level7/', views.index, name='level7'),
    path('level8/', views.index, name='level8'),
    path('level9/', views.index, name='level9'),
    path('level10/', views.index, name='level10'),
    path('score/', views.index, name='score'),
    path('analysis/', views.index, name='analysis'),
    path('game-over/', views.index, name='game-over'),
]

urlpatterns += staticfiles_urlpatterns()
