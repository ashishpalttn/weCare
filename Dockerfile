FROM node:14

# Install any additional dependencies here, if needed

# Set up a non-root user (optional but recommended)
RUN groupadd -r jenkins && useradd -m -r -g jenkins jenkins

USER jenkins

# Set working directory
WORKDIR /var/lib/jenkins/workspace

# Run any additional setup commands here, if needed
