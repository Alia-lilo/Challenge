# Project Name

This repository contains a Dockerized setup for a web application with Laravel API, Nuxt.js client, MySQL database, and Nginx proxy server.

## Setup

### Prerequisites

- Docker and Docker Compose and Git installed on your machine.

### Clone the Repository

Clone the repository to your local machine:
https://github.com/Alia-lilo/Challenge

```bash
git clone https://github.com/Alia-lilo/challenge.git
cd your-repository



FILES:
-----------
# Create a Dockerfile in the challenge/api directory
# Create a Dockerfile in the challenge/client directory
# Create/update a docker-compose.yml file at the root directory ~/Challenge
# Create/update a nginx.conf file inside client/ directory
# Create/update a default.conf file inside client/nginx directory



COMMANDS:
-----------
# to build and start the services:
     docker-compose up -d --build

# To stop the application and remove containers:
     docker-compose down

# listing the running containers:
     docker ps

# check the logs of the services for errors:
     docker-compose logs { db, api, client, or nginx}

# restart 
     docker-compose restart 'nginx'




SCREENSHOTS:
---------------

- ![screenshot1 for running application] (\Challenge\Screenshots)
- screenshot3 for http://localhost " Welcome to nginx"
- screenshot4 for Configuring the Nginx service to listen on port 443


# Created two separate workflows (api.yml and client.yml) in the .github/workflows directory.
Push Changes to the Main Branch

### Final Steps:

- Commit changes to Git and push them to GitHub repository.
- Verify that `README.md` file renders correctly on GitHub with all necessary instructions and screenshots.



to push changes to GitHub repository: git push origin main

