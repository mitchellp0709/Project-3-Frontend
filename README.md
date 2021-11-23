# Project 3 - Retweet Front end

#### by Mitchell Paoletti, Donovan Gallaway, & Marco De Los Santos

![Retweet Logo Which Is Totally Not a Twitter Logo Knockoff](./public/twitter.png)

##Project Summary

We set out to make what can only be described as the most innovative, ground breaking piece of social media since people used literal messages tied to birds. This one-of-a-kind social media masterpiece could only be described as: **Retweet.** For the first time in recorded history, users can seamlessly send messages to friends, family, and complete strangers. Have a thought? BAM!! Retweet it. It's that simple.  

## User Stories

- A user will be able to create Retweets which will be stored on their profile page
- A user will be able to follow another user and see all of their Retweets on their home page
- A user will be able to see all the Retweets of another user on their profile page
- A user will be able to set their cover photo and profile picture
- A user will be able to edit and delete their own Retweets but not those of another user
- A user will be able to log in and out of their profile and have their Retweets and followers saved


## Pages

| URL | Page | About |
|-----|--------|--------|
| /signup| Signup Page | Page to create an account and set a cover photo and profile picture|
| /login| Login Page | Page where a user will sign into their account|
| /| Home Page | A page where a user will see the Retweets of everyone they follow|
| /user/:username| Profile Page | Page where a user will see all of the Retweets of that user|
| /user/:username/edit| Profile Edit Page | Page where users can edit their profile picture or cover photo|
| /login| Login Page | Page to sign into your account|
| /tweet/:id/edit| Tweet Edit Page | Page where users can edit their existing Retweets|

## Components

| Component  | About |
|-----|--------|
| First Header| Header for the login and signup page that will direct users to log in or create an account | 
|  Header| Header for all other pages that has a link to the main page, the user's profile page, & a link to log out  |
| Follow Bar| A side bar on the main page that shows all existing users, a link to their profile, and the option to follow them  |  

## Challenges

The biggest challenge on this project was the integration of the front end and the backend with user authentication. Merging these two was a challenge to see how we were going to utilize the user token to check if a user was logged in. 

Another large challenge was coordinating the routes with the backend. The larger the scope of the front end grew, the more paths were required on the backend. We had to add several routes to the backend as the project progressed to accomodate the scale of the front end features. 

## List of Technologies

- Node
- React
- Sass
- MongoDB