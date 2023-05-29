#################
## DEVELOPMENT ##
#################
FROM node:alpine AS development

WORKDIR /andychou/server

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

################
## PRODUCTION ##
################
FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /andychou/server

COPY --from=development /andychou/server .

EXPOSE 4000

CMD [ "node", "dist/main" ]