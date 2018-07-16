import firebase from 'firebase';
require('dotenv').config();

let apiKey = process.env.API_KEY

let config = {
  apiKey: apiKey,
  authDomain: "forget-me-not-f719a.firebaseapp.com",
  databaseURL: "https://forget-me-not-f719a.firebaseio.com",
  projectId: "forget-me-not-f719a",
  storageBucket: "forget-me-not-f719a.appspot.com",
  messagingSenderId: "123044975247"
};
firebase.initializeApp(config);
export default firebase;
