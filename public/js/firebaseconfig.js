const firebaseConfig = {
    apiKey: "AIzaSyB_xealUETBsIAa7I5fXUpRQv2O96RxlOo",
    authDomain: "tutorial-1-a83f2.firebaseapp.com",
    projectId: "tutorial-1-a83f2",
    storageBucket: "tutorial-1-a83f2.appspot.com",
    messagingSenderId: "293217439396",
    appId: "1:293217439396:web:d18382369fdcfbf466e031"
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
console.log(auth);
const provider = new firebase.auth.GoogleAuthProvider()