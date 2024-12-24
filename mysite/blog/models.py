# filepath: /c:/Users/Administrator/Desktop/Wagcms/mysite/blog/models.py
from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField
from wagtail.images.blocks import ImageChooserBlock     #wagtail.images才是正确的模块
from wagtail import blocks      #自 Wagtail 2.13 版本起，wagtail.core 模块已被拆分并重新组织。应该使用 wagtail.blocks 模块来导入

class BlogPage(Page):
    intro = RichTextField(blank=True)
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
        FieldPanel('body'),
    ]

    template = "blog/index.html"

class BlogListPage(Page):
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
    ]
    template = "blog/list.html"

class BlogDetailPage(Page):
    body = StreamField(
        [
            ('heading', blocks.CharBlock(classname="full title")),
            ('paragraph', blocks.RichTextBlock()),
            ('image', ImageChooserBlock()),
        ], null=True, blank=True
    )

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]   

    template = "blog/detail.html"