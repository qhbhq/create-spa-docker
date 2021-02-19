REGISTRY = <%= imageRegistry ? imageRegistry + '/' : '' %>
NAME = <%= imageName %>
TAG = latest

base:
	echo building ${NAME}-base:latest
	cp docker/base/Dockerfile .
	docker build -t ${REGISTRY}${NAME}-base:latest .
	rm Dockerfile
	docker push ${REGISTRY}${NAME}-base:latest

beta: base
	echo building ${NAME}:${TAG}
	cp docker/beta/Dockerfile .
	docker build -t ${REGISTRY}${NAME}:${TAG} .
	rm Dockerfile
	docker push ${REGISTRY}${NAME}:${TAG}

prod: base
	echo building ${NAME}:${TAG}
	cp docker/prod/Dockerfile .
	docker build -t ${REGISTRY}${NAME}:${TAG} .
	rm Dockerfile
	docker push ${REGISTRY}${NAME}:${TAG}
