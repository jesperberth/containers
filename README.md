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
