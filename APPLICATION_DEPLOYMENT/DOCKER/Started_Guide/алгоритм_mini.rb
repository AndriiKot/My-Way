1.Installed  Docker Desktop
2.Installed Git client
3.Recommends using Visual Studio Code
4.
git clone https://github.com/docker/getting-started-app.git MyApp 
5.
$:
  cd MyApp/
  type nul > Dockerfile
Dockerfile:
    Dockerfile:
        FROM node:18-alpine
        WORKDIR /app
        COPY . .
        RUN yarn install --production
        CMD ["node", "src/index.js"]
        EXPOSE 3000
6.!!! Развернуть Containers - Docker Desktop !!!
7.
docker build -t getting-started .
8.
docker run -dp 127.0.0.1:3000:3000 getting-started
9.
 http://localhost:3000


UPDATE THE APPLICATION
1.
        In the src/static/js/app.js file, update line 56 to use the new empty text
            - <p className="text-center">No items yet! Add one above!</p>
            + <p className="text-center">You have no todo items yet! Add one above!</p>
2.
docker stop <hash>
docker rm <hash>
2.
docker rm -f <hash>
docker rm -f <name-container>

        

    




