var firebaseConfig = {
      apiKey: "AIzaSyDaqJLSGAnxtwDhKskjeNze67QrwQ0b1B0",
      authDomain: "kwitter-ce1a2.firebaseapp.com",
      databaseURL: "https://kwitter-ce1a2-default-rtdb.firebaseio.com",
      projectId: "kwitter-ce1a2",
      storageBucket: "kwitter-ce1a2.appspot.com",
      messagingSenderId: "62828994520",
      appId: "1:62828994520:web:38b9acd8b911cc36955cad"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
