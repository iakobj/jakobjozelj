#!/bin/bash

COMPOSE="/usr/bin/docker compose --ansi never"
DOCKER="/usr/bin/docker"

cd /root/jakobjozelj/
$COMPOSE run certbot renew && $COMPOSE kill -s SIGHUP ingress
$DOCKER system prune -af