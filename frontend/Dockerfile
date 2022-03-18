FROM node:15-alpine as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM busybox
COPY --from=builder /usr/src/app/build /usr/share/nginx/memo
VOLUME /usr/share/nginx/memo
