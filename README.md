# TutorelloSwengProject

For the basic blog and faq page:

You need mongoDB 
Google mongo and download it and install. There are steps on the official website for installing.
Press windows key to open Search and go to sevices. In services and make sure mongo has started and is running as a service.

view video: https://drive.google.com/drive/folders/1v-5b4-nXQUFSZCU3Wrk90c7K7_aE3Fle?usp=sharing

Download and extract the folder (if using the .zip)

Open 2 terminals (command prompt)

Make your way in till

..

In both terminals/command lines

Open client in one:
cd client

npm i

Open server in the other:
cd server

npm i

npm i -S path express body-parser express-session cors errorhandler mongoose morgan

npm install --g nodemon


In server: 
node app.js

In client: 
npm start

Give it a few minutes and it should open in localhost 8080

The "blog" contains 2 pages : Admin and Users.
Admin is aimed at being the one that you can integrate into admin panel and has functionality to add article, edit article and delete article.
User can only display the article. This way users can't edit the articles.

The "faq" contains the main faq page with the questions and answers and a request ticket page. Currently this request ticket page is a very simple email form, but we have included an upgraded form if you prefer that.
