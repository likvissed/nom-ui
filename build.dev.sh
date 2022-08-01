#!/bin/bash -xe
docker-compose -f "docker-compose.dev.yml" -p nom-ui-dev down --remove-orphans
# docker volume rm nom-ui-dev_node_modules
DOCKER_BUILDKIT=1 docker-compose -f "docker-compose.dev.yml" -p nom-ui-dev build
DOCKER_BUILDKIT=1 docker-compose -f "docker-compose.dev.yml" -p nom-ui-dev up -d
