# filepath: /c:/Users/Administrator/Desktop/Wagcms/mysite/blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('list/', views.BlogListView.as_view, name='blog_list'),
    path('<slug:slug>', views.BlogDetailView.as_view, name='blog_detail'),
]