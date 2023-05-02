from django.urls import path
from . import views
from .views import UpdateView, PersonView, NegateView, TryAgainView

urlpatterns = [
    path('', views.index, name='index'),
    path('index/', views.index, name='index'),
    path('sign-up/', views.sign_up, name='sign-up'),
    # path('user', views.current, name='api/user'),
    # path('login/', views.login_request, name='login'),
    path('logout/', views.logout_request, name='logout'),
    # path('update-person/', views.update_request, name='update-person')
    path('update-person/', UpdateView.as_view(), name='update-person'),
    path('negate-person/', NegateView.as_view(), name='negate-person'),
    path('try-again/', TryAgainView.as_view(), name='try-again'),
]