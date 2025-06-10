# First step : base image
FROM node:20-alpine

# Second step : set working directory
WORKDIR /app

# Third step : copy package.json and package-lock.json
COPY package*.json ./

# Fourth step : install dependencies
RUN npm install

# Fifth step : copy the rest of the application code
COPY . .

# Sixth step : expose the port the app runs on
EXPOSE 3000

# Seventh step : define the command to run the app
CMD ["npx", "ts-node", "src/index.ts"]

