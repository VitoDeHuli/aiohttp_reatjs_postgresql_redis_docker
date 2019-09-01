start:
	docker-compose up

stop:
	docker-compose down

build:
	docker-compose build

restart:
	docker-compose down
	docker-compose up

rebuild:
	docker-compose stop server
	docker-compose build server
	docker-compose start server
