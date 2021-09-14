# Container Show

## docker

### docker build run

docker build -t mycont:latest .

docker run mycont:latest

docker run -it mycont:latest /bin/sh

ls

echo "something" > newtext.txt

ls

cat newtext.txt

exit

docker run -it mycont:latest /bin/sh

ls

### docker build run webserver

cd website

docker build -t website:latest .

docker run --name web -d -p 8080:80 website:latest

### docker push

docker tag website:latest jesperberth/website:latest

docker login

docker push jesperberth/website:latest

## Kubernetes

git clone https://github.com/jesperberth/containers.git

cd containers

kubectl get nodes

kubectl get pods

kubectl get services

kubectl apply -f chuck_deployment.yml

kubectl apply -f chuck_service.yaml

kubectl get pods

kubectl get services

kubectl get deployments

### Keen

kubectl apply -f keen.yml

kubectl get services
