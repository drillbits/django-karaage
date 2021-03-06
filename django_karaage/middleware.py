import os

from django.conf import settings

__all__ = (
    "KaraageMiddleware",
)

IMAGE_URL = "https://dl.dropbox.com/u/28743389/karaage.jpg"


def load_js():
    filepath = os.path.join(os.path.dirname(__file__), "karaage.js")
    with open(filepath, "r") as fp:
        return fp.read()


class KaraageMiddleware(object):
    def process_response(self, request, response):
        content = response.content

        script = "<script>{0}\n\nkaraage.main('{1}')</script>\n".format(
            load_js(), getattr(settings, "KARAAGE_IMAGE_URL", IMAGE_URL))
        content = content.replace(
            "</body>",
            script + "</body>",
            1)
        response.content = content
        return response
