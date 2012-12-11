from django.conf.urls import patterns, url

from apps.sample import views


urlpatterns = patterns(
    "apps.sample.views",
    url(r"^$", views.IndexView.as_view(), name="sample_index"),
    url(r"^contents$", views.ContentsView.as_view(), name="sample_contents"),
)
