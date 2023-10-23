FROM alpine:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
COPY .env .
RUN apk add --no-cache nodejs npm
RUN npm install
EXPOSE 3000
CMD ["node", "app"]