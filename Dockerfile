# Stage 1: Build the Vite/React app
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first for better layer caching
COPY package*.json ./
RUN npm ci

# Copy source and build (Vite outputs to /app/dist)
COPY . .
RUN npm run build

# Stage 2: Serve the static build with nginx
FROM nginx:alpine

# SPA routing + static asset caching (see nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
