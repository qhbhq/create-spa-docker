NAME = <%= imageName %>
TAG = latest

base:
	echo building ${NAME}-base:latest
	cp docker/base/Dockerfile .
	docker build -t ${NAME}-base:latest .
	rm Dockerfile

beta: base
	echo building ${NAME}:${TAG}
	cp docker/beta/Dockerfile .
	docker build -t ${NAME}:${TAG} .
	rm Dockerfile

prod: base
	echo building ${NAME}:${TAG}
	cp docker/prod/Dockerfile .
	docker build -t ${NAME}:${TAG} .
	rm Dockerfile
