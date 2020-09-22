# Yet ANOTHER To-Do List

We'll use this exercise to rotate through breakout groups and develop a To-Do App using Node/Express/Postgresql

## The App

Create an app to track a to-do list for a user. 

## The Requirements

* A user can register/login
* Once a user is logged in, they can create a list of task
* By default, _all_ items start as incomplete.  
* The user can mark items complete as they're done.

## Stretch Goals

* Mark multiple tasks compelete at once
* Duplicate a task

## Sprint 1

* Map out user flow/How does the app work?
* Sketch out (in notes/on paper) the following:
* How many views?
* What types of models?
* What kind of routes?

## Sprint 2

* Create Database Schema
* Create a database on ElephantSQL

## Sprint 3
Scaffold out the app.

Create your root folder.
* Install the necessary npm modules (refer to a previous package.json)
* Create all your necessary folders for the app
* eg: views, models, routes, public
* Create your index.js (or app.js)

Set a host and port number
* Make sure to load all the necessary modules
* Refer to previous examples for the required app.use and/or app.set statements.
* Create a default (aka index.js) route.

Create a default route that just returns a status of 200 and the text "OK" when a user browses to your site.

## Sprint 4
Start working on the MODELS. Use your database to determine how to structure these.

Think about how many models you'll need:
* eg: Users Model, Tasks Model
Think about the methods you'll need for each model
* eg: Users Model needs methods for registration/login/logout

## Sprint 5
Start working on the ROUTES (aka CONTROLLERS).

ROUTES + PostMan (the app) can be used to test your MODELS.

* Think about the kind of requests you'll need to make
* How are task related pages different from the homepage (if they are)?
* How many POST routes will I need?
* How many GET routes will I need?
* Do I need any PUT or DELETE routes?

## Sprint 6
Start working on the VIEWS

* What should the homepage look like?
* What does an authenticated user see?
* What does a guest see?
* How are the tasks viewed?

## Sprint 7
Does it work?

* Test out the user experience.
* Does it work as expected?
* Fix any bugs you find in the process.