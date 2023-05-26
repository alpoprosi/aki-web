VERSION=0.1

up:
	docker network create aki-net || echo '' > /dev/null
	docker-compose up -d

down:
	docker-compose down

build:
	@docker build --build-arg VERSION=$(VERSION) . -t aki-web:$(VERSION) -t aki-web:latest

version:
	@echo $(VERSION)