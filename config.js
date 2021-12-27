import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBeasOyCqksuguGq3F95eA10EXwPrkl1VQ",
  authDomain: "complaint-forum-e164f.firebaseapp.com",
  projectId: "complaint-forum-e164f",
  storageBucket: "complaint-forum-e164f.appspot.com",
  messagingSenderId: "106407071794",
  appId: "1:106407071794:web:3942ae90a21d2c11c6ac2b"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

