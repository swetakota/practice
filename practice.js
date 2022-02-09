var firebaseConfig = {
  apiKey: "AIzaSyDG7k3cWPHgZ-nm3zZDKVL3ySSY5qMKDR0",
  authDomain: "fdcsx-31bb5.firebaseapp.com",
  databaseURL: "https://fdcsx-31bb5-default-rtdb.firebaseio.com",
  projectId: "fdcsx-31bb5",
  storageBucket: "fdcsx-31bb5.appspot.com",
  messagingSenderId: "1050121406038",
  appId: "1:1050121406038:web:9143ab3e83335cd0bd1df7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


