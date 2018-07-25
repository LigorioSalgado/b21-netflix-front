import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyBAB7_gy3n_y49d1GxvUZvFXJIwBWVKwHQ",
        authDomain: "nectflix.firebaseapp.com",
        databaseURL: "https://nectflix.firebaseio.com",
        projectId: "nectflix",
        storageBucket: "nectflix.appspot.com",
        messagingSenderId: "790532185455"
      };

export default firebase.initializeApp(config);
    