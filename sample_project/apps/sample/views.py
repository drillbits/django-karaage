import urllib2

from django.http import HttpResponse
from django.template.response import TemplateResponse
from django.views.generic import View


class IndexView(View):
    def get(self, request):
        template = "sample/index.html"
        context = {}
        response = TemplateResponse(request, template, context)
        return response


class ContentsView(View):
    def get(self, request):
        url = request.GET.get("url", "http://www.yahoo.co.jp/")
        contents = urllib2.urlopen(url).read()
        contents = contents.replace("=\"/", "=\"{0}".format(url))
        return HttpResponse(contents)
