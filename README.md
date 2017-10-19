# Pupper


## Setup

- Download PostgreSQL and set up a user and database for development
    + Create user: pupper_user, password: pupper_user.
         + `createuser -P -s -e pupper_user`

    + Create Database:
         + `createdb -h localhost -U pupper_user pupper_development`
         
- Install the dependencies in the local folder
    + `npm install`

## Explanations

- `/config/config.json`
    + This file contains the credentials for connecting to your postgres database. You need to make sure these details match your DB setup.
- `/controllers`
    + This is where you should store all the logic handling URL routes and business logic for your app.
    + `index.js` is where you load up the different files
- `/models`
    + This is where your sequelize models will go.
    + `index.js`: you **do not** have to modify this file. This file connects to the Postgres database for you, loads up all models in the folder, and sets up all associations.
- `app.js`
    + This file sets up the basic packages for our projects. Feel free to add more as you see fit.
    + This file already loads up your controllers, so no additional loading is necessary for that to work.
