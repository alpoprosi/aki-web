up:
	docker network create aki-net || echo '' > /dev/null
	docker-compose up -d

down:
	docker-compose down