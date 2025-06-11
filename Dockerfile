FROM node:22

WORKDIR /app

# COPY server.js .
# COPY package.json .
# COPY schemas .
COPY . .

RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["node", "server/server.mjs"]