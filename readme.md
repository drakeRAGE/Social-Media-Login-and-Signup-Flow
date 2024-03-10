Topop Internship Project
This project was created as a task for an internship process. It showcases the basics of web development using Reactjs, Express.js , MongoDB, Next.js as a MERN full stack project with the use of firebase. The goal was to demonstrate responsiveness and provide a simple and functional social media login and signup work-flow.

Technologies Used
React js
Express.js
MongoDB
Next.js
Fireabase

Project Overview
The project includes the following components:

my-app/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── GoogleSignIn.js
│ │ │ ├── EmailPasswordSignIn.js
│ │ ├── App.js
│ │ ├── index.js
│ ├── package.json
├── backend/
│ ├── models/
│ │ ├── User.js
│ ├── routes/
│ │ ├── auth.js
│ ├── app.js
│ ├── package.json
├── package.json

Must change:

1. firebaseConfig in firebase.js
2. In profile page change

const qrCodeData = `https://localhost:3000/profile/${currentUser.uid}`;

this to the custom url of your deployment !

How to Use
1.Clone the repository.

2.install the dependencies by running the command : npm install
3.run the web page using command : npm start

Feel free to explore and provide feedback!
