# Stage 1: Serve the ngnx application using a lightweight server
FROM nginx:1.24.0-alpine

# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80
EXPOSE 443

# Start the nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
