# Software Requirements

## Vision

This project is being created to make it easy for friends to plan events together and stay in the loop with those plans.
There's always that one friend that usually makes plans that will find this app immensly useful as well as make it easier for users who are
usually bad at planning.

## Scope (In/Out)

### In

- The app will show users event in a searched area.  
- The app will allow users to share events with friends/family.  
- The app will allow users to vote on accomodations.  
- The app will allow users to save events and trips onto a database.  

### Out

- The user won't be able to buy anything on site
- The user won't be able to save multiple events in the same event handler
- The site will not be a mobile application

### Stretch

Filter data accordingly to prefer certain prices ranges.  
Have a user login setup with sessions.  
Display friends data and events that they have planned.  

### Functional Requirements

- An admin can create and delete user accounts  
- A user can update their profile information  
- A user can search and add events
- A user can invite friends to their event
- A user can access their saved event after leaving the site.

### Data Flow

The user will log into the site. They will make a request for data either as an event name or by city. the request will hit a cache in the backend server. If the data is not already saved there then the request will go to many api's to collect data and return to the cache. The cache data is then backed up in the database. The user receives data on their end that they are able to then edit or delete/manipulate as they see fit.  

### Non-Functional Requirements

Authentication needs to be good so that our users can access the site as well as their saved data. We will use auth0 to create verification tokens as well as use other tokens that can allow users to log into the site and maybe edit a profile.  

We need to have a good schema saved to efficiently store our noSQL data that is secured as well. We will be using mongo DB to store all of our data as well as using a server on heroku to handle all the requests. The less we have on the client side to handle data, the better.
