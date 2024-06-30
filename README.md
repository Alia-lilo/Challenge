### Running the Application with Docker Compose

This guide provides step-by-step instructions on how to set up and run the application using Docker Compose.

### Prerequisites

Make sure you have the following installed:
- Docker: [Install Docker](https://docs.docker.com/get-docker/)
(https://docs.docker.com/compose/install/)

### Setup Instructions

1. **Clone the Repository:**

   git clone https://github.com/Alia-lilo/challenge.git
       cd your-repository


2. Environment Variables:
Ensure you have set up the necessary environment variables for your application. Example .env files



3. Build and Run the Containers:

Run the following command to build and start the containers:
       docker-compose up -d --build

This command will create and start containers for MySQL (db), Laravel API (api), Nuxt.js Client (client), and Nginx (nginx).



4. Accessing the Application:
Once the containers are up and running, you can access the application:
http://localhost




5. To stop the application and remove the containers, run:
           docker-compose down

This command will stop and remove all containers defined in the docker-compose.yml file.






USED COMMANDS:
-----------
#### to build and start the services:
     docker-compose up -d --build

#### To stop the application and remove containers:
     docker-compose down

#### listing the running containers:
     docker ps

#### check the logs of the services for errors:
     docker-compose logs { db, api, client, or nginx}

#### restart 
     docker-compose restart 'nginx'

#### show image existed
     docker images

#### tag it with your Docker Hub 
     docker tag challenge-api:latest alialilo/challenge:latest

#### push the tagged image to Docker Hub
     docker push alialilo/challenge:latest


#### rebuilding and pushing (client or api)
     docker-compose -f docker-compose.yml -f docker-compose.client.yml build client
     docker-compose -f docker-compose.yml -f docker-compose.client.yml push client

#### to push changes to GitHub repository:
     git push origin main




SCREENSHOTS:
---------------

- screenshot1 for running application
- screenshot3 for http://localhost " Welcome to nginx"
- screenshot4 for Configuring the Nginx service to listen on port 443
- screenshot6 for Push the built images to Docker Hub
- screenshot7 for Trigger workflows on pushes


#### Created two separate workflows (api.yml and client.yml) in the .github/workflows directory.
Push Changes to the Main Branch

#### Final Steps:

- Commit changes to Git and push them to GitHub repository.
- Verify that `README.md` file renders correctly on GitHub with all necessary instructions and screenshots.



