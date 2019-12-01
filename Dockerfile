FROM python:3.7

MAINTAINER Mark Foley

# Install everything that you need exept libraries specific to your Django project - these come later.
RUN apt-get -y update && apt-get -y upgrade && \
    apt-get -y --no-install-recommends --no-install-suggests install libgdal-dev nginx supervisor

# COPY requirements.txt and RUN pip install BEFORE adding the rest of your code, this will cause Docker's caching mechanism
# to prevent re-installing (all your) dependencies when you made a change a line or two in your app.

COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv
RUN pipenv install --system

RUN mkdir -p /usr/src/app
# add (the rest of) our code
COPY . /usr/src/app
WORKDIR /usr/src/app/backend
# Set up all the configfiles
COPY nginx.conf /etc/nginx/sites-available/default
COPY supervisor-app.conf /etc/supervisor/conf.d/

# Expose the image's ports. We'll bind different host ports to these later
EXPOSE 80
EXPOSE 443

# When a new container is created, we'll run supervisord to start uwsgi and nginx.
CMD ["supervisord", "-n"]

# #Initial Setup, Maintainer Flag
# FROM python:3
# LABEL AUTHOR Arthur Coll
# ENV PYTHONUNBUFFERED 1
# ENV PYTHONDONTWRITEBYTECODE 1

# RUN apt update
# RUN apt install -y \
# gdal-bin \
# libproj-dev \
# binutils

# COPY Pipfile /
# COPY Pipfile.lock /
# RUN pip install pipenv
# RUN pipenv install --system

# #Move App to /usr/src
# RUN mkdir app
# COPY . /app
# WORKDIR /app/backend

# #Set WorkDir To Application
# CMD gunicorn backend.wsgi:application --workers 2 --bind :8000

# FROM tiangolo/meinheld-gunicorn:python3.7
# RUN apt update
# RUN apt install -y \
# gdal-bin \
# libproj-dev \
# binutils 

# COPY Pipfile /
# COPY Pipfile.lock /
# RUN pip install pipenv
# RUN pipenv install --system

# #Move App to /usr/src
# COPY . /app
# WORKDIR /app/backend
