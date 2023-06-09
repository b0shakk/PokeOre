from django.urls import path
from . import views
from .views import UpdateView, PersonView, NegateView, TryAgainView

urlpatterns = [
    path('', views.index, name='index'),
    path('index/', views.index, name='index'),
    path('sign-up/', views.sign_up, name='sign-up'),
    path('getAddress/', views.address, name='getAddress'),
    # path('user', views.current, name='api/user'),
    path('login-api/', views.login_request, name='login-api'),
    path('logout/', views.logout_request, name='logout'),
    # path('update-person/', views.update_request, name='update-person')
    path('update-person/', UpdateView.as_view(), name='update-person'),
    # path('get-person/', PersonView.as_view(), name='get-person'),
    path('api/score/', views.fetchScore, name='scor3'),
    path('negate-person/', NegateView.as_view(), name='negate-person'),
    path('try-again/', TryAgainView.as_view(), name='try-again'),
    path('pie-chart/', views.pie_chart, name='pie-chart'),
]