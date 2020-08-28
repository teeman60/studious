
## The STUDIOUS App
A student community app for sharing ideas, setting goals and providing assistance to each other


## About
The Studious app was created with college students in mind. This app was built with Ruby on Rails as the backend and React JS as frontend. During development, I thought about adding a chat functionality and found a simple way to do that using socket.io in Node JS and so I ended up incorporating a Node JS server to make this happen. 

I used material UI, inline-styling and bootstrap to provide some beautiful effects.


## UI & Navigation
- New users can signup to get a new account

- Returning users can login to their account

- In the menu, users have four main options: ask the community a question, set up a skill acquisition appointment with other interested students, view the current forum discussions (questions that have and have not yet been answered/resolved) and also view the current skills community members are learning (they can also add any skill they'd like to learn here)

- Post owners can delete any post they no longer want

- Post owners can toggle "Unresolved" to "Resolved" when they get satisfactory answers to their question

- All members of the student community can like a post (question) 

- Users can fill a simple form for skill acquisition. Information like skill title, start and prospective completion dates as well as maximum number of partners will be required to create a skill acquisition appointment 

- Users can click the user icon on the right corner of the Navigation bar in order to see their contributions as well as the link to a chatroom for all users with similar entries for skill acquisition appointment

- Users can chat together, keep each other accountable and motivate each other to skill acquisition completion


## What's Left?
- A way for notifications to be sent when users have a match for skill acquisition (An email will be needed for this)

- User authentication/authorization before using chatrooms

- Persistence of chat messages to backend (currently there's just an array of messages displayed on screen which clears on page refresh)



## To Launch This Application:

** You'd need 3 terminals open

- Fork this repo 
- cd into server, run bundle install
- start the rails server by running rails s
- cd into client in a different terminal, run npm install
- run npm start. Type 'Y' in the prompt that follows
- cd into chat in a third terminal, run 'node server.js'
- You are now in the application and can navigate as you wish


## Tech Stack

- React js
- Ruby on Rails
- Node js 
- Socket.io
- SQLite
- Bootstrap
- Material UI

By: Taiye Salami, 2020
