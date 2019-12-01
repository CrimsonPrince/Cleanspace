#! /usr/bin/env sh
set -e
echo "Startup Script"

echo "Creating Migrations"
python manage.py makemigrations
echo "Applying Migrations"
python manage.py migrate
# Start Supervisor, with Nginx and uWSGI
exec /usr/bin/supervisord -n