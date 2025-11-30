FROM node:20-alpine AS builder
WORKDIR /app
COPY portfolio-modernizado/package.json portfolio-modernizado/package-lock.json ./
RUN npm ci
COPY portfolio-modernizado ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
