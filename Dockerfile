FROM node:20-alpine

WORKDIR /app

COPY api/package*.json ./
RUN npm install

COPY api ./

EXPOSE 3000

CMD ["node", "--loader", "ts-node/esm", "index.ts"]

