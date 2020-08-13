import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAH-JLst5OAcoNvwjuaSyD7sprU4SGfXC4",
    authDomain: "discord-style-chat-app.firebaseapp.com",
    databaseURL: "https://discord-style-chat-app.firebaseio.com",
    projectId: "discord-style-chat-app",
    storageBucket: "discord-style-chat-app.appspot.com",
    messagingSenderId: "596026101224",
    appId: "1:596026101224:web:97120654fadcefbb08a85d",
    measurementId: "G-QP3EKRZRSK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;