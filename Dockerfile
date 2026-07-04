FROM node:24-alpine AS build
WORKDIR /app
RUN npm install --global pnpm@11.9.0
COPY package.json pnpm-workspace.yaml ./
RUN pnpm install --no-frozen-lockfile --network-concurrency=4 --child-concurrency=1
COPY . .
RUN pnpm generate

FROM nginx:1.29-alpine
COPY --from=build /app/.output/public /usr/share/nginx/html
EXPOSE 80
