# Base image
FROM node:20-alpine

# Env
ENV NODE_ENV=development

# Set working dir
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app
COPY . .

# Expose port
EXPOSE 3000

# Default command for development
CMD ["npm", "run", "start:dev"]
