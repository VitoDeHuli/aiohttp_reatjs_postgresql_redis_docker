start:
	docker-compose up

stop:
	docker-compose down

restart:
	docker-compose down
	docker-compose up

rebuild:
	docker-compose stop server
	docker-compose build server
	docker-compose start server
