  // Set the configuration for your app
  // TODO: Replace with your project's config object
  
  
  var firebaseConfig = {
    apiKey: "AIzaSyBrq64wJUJVtToctLgXFOCo7qSEoYqmV-A",
    authDomain: "somosconfra.firebaseapp.com",
    databaseURL: "https://somosconfra.firebaseio.com",
    projectId: "somosconfra",
    storageBucket: "somosconfra.appspot.com",
    messagingSenderId: "248802239386",
    appId: "1:248802239386:web:e8223ce7f2d9d366b8d023",
    measurementId: "G-GMY2XT8XM2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Get a reference to the database service
  var database = firebase.database();



var userId = "FTATzabvwCfW3qXA9Jw0YT4zjXq1";
firebase.database().ref('/usuarios/' + userId).once('value').then(function(snapshot) {
  var userName = (snapshot.val().nombre + " " + snapshot.val().apellido)|| 'Anonymous';
  document.write(userName);
});

/*
function writeUserData() {
  var userId = "FTATzabvwCfW3qXA9Jw0YT4zjXq1";

  firebase.database().ref('usuarios/' + userId).set({
    avatar: "avatar";
  });
}

firebase.database().ref('usuarios/FTATzabvwCfW3qXA9Jw0YT4zjXq1);

*/
//writeUserData();