import os

from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, "README.rst")).read()
CHANGES = open(os.path.join(here, "CHANGES.txt")).read()

install_requires = [
    "Django>=1.4",
]

setup(
    name="django-karaage",
    version="0.0.1",
    description="",
    long_description=README + "\n\n" + CHANGES,
    classifiers=[
        "Development Status :: 4 - Beta",
        "Framework :: Django",
        "License :: OSI Approved :: MIT License",
        "Environment :: Plugins",
        "Environment :: Web Environment",
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    author="drillbits",
    author_email="drillbits.spiny@gmail.com",
    url="",
    keywords="web django karaage",
    packages=find_packages(),
    install_requires=install_requires,
    zip_safe=False,
    test_suite="tests.main",
)
