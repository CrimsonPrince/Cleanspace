FROM python:3.7

LABEL NAME = backend
LABEL VERSION = 1.0.0
LABEL AUTHOR kingr4@protonmail.ch

#Install System Dependencies
RUN apt-get -y update && apt-get -y upgrade && \
    apt-get -y --no-install-recommends --no-install-suggests install libgdal-dev nginx supervisor

#Install Dependencies with Pipenv  
COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv
RUN pipenv install --system

#Create App Folder & Add Configs
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app/backend
COPY nginx.conf /etc/nginx/sites-available/default
COPY supervisor-app.conf /etc/supervisor/conf.d/

COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80

#Run Start Script
CMD ["/start.sh"]