FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

# Final Stage (Nginx serving the built React app)
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]