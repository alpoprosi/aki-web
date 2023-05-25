FROM golang:1.20-alpine as builder

ADD . /aki_web
WORKDIR /aki_web

ARG VERSION

RUN apk update
RUN apk add --no-cache git gcc musl-dev
RUN go build -ldflags="-X 'main.version=$(VERSION)-$(git rev-parse --short HEAD)'" -o /tmp/aki_web ./aki_web

FROM node:18.16-alpine as builderJS
ADD ./web /web
WORKDIR /web
RUN npm install
RUN npm run build
RUN mv dist /tmp/dist

FROM alpine:3.16
ENV STATIC_PATH=/var/lib/aki_web/web/

COPY --from=builderJS /tmp/dist $STATIC_PATH
COPY --from=builderGO /tmp/aki_web /usr/bin/aki_web

ENV HTTP_ADDR=0.0.0.0:8081
EXPOSE 8081
ENTRYPOINT ["/usr/bin/aki_web"]
