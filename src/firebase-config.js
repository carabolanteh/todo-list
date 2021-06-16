  import firebase from 'firebase/app';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBhAteNEWiV1YQ7oH3CN5QecypgjWPCWTI",
    authDomain: "todo-list-f6b1b.firebaseapp.com",
    projectId: "todo-list-f6b1b",
    storageBucket: "todo-list-f6b1b.appspot.com",
    messagingSenderId: "446092711948",
    appId: "1:446092711948:web:f12db192dd759796793629"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
export  const db = fb.firestore();