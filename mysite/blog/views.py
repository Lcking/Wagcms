# filepath: /c:/Users/Administrator/Desktop/Wagcms/mysite/blog/views.py
from django.views.generic import ListView, DetailView
from .models import BlogPage, BlogListPage, BlogDetailPage

class BlogListView(ListView):
    model = BlogListPage
    template_name = "blog/list.html"
    context_object_name = 'blogs'

class BlogDetailView(DetailView):
    model = BlogDetailPage
    template_name = "blog/detail.html"
    context_object_name = 'blog'
