FROM node:lts-alpine as builder

ARG REACT_APP_BASE_URL_REST
ARG REACT_APP_IS_MOCKUP

ENV REACT_APP_BASE_URL_REST ${REACT_APP_BASE_URL_REST}
ENV REACT_APP_IS_MOCKUP true

ADD . /app
WORKDIR /app
RUN npm install & npm run build

FROM nginx
EXPOSE 80
ADD deploy/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/build /usr/share/nginx/html
