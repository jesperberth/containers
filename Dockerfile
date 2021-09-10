FROM busybox:latest
WORKDIR /code
RUN echo "hello world" > text.txt
CMD cat text.txt