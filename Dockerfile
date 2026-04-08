FROM node:22

WORKDIR /app

COPY . .

# Install root, server, and both clients
RUN npm install
RUN cd server && npm install
RUN cd client-swoggerslol && npm install
RUN cd client-deadlab && npm install

# Build both clients
RUN npm run build

EXPOSE 3000

CMD ["node", "server/server.mjs"]