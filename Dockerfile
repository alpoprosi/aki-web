FROM golang:1.20-alpine as builder

ADD . /aki-web
WORKDIR /aki-web

ARG VERSION

RUN apk update
RUN apk add --no-cache git gcc musl-dev
RUN go build -o /tmp/aki-web ./

FROM node:18.16-alpine as builderjs
ADD ./web /web
WORKDIR /web
RUN npm install
RUN npm run build
RUN mv dist /tmp/dist

FROM alpine:3.16
ENV STATIC_PATH=/var/lib/aki-web/web/
ENV CONFIG_YAML=/var/lib/aki-web/config.yaml

COPY --from=builderjs /tmp/dist $STATIC_PATH
COPY --from=builder /tmp/aki-web /usr/bin/aki-web
COPY --from=builder /aki-web/config.yaml /var/lib/aki-web/config.yaml

ENV HTTP_ADDR=127.0.0.1
ENV HTTP_PORT=8081
EXPOSE 8081
ENTRYPOINT ["/usr/bin/aki-web"]
