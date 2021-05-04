
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCqqNqgJzYMJcbRzIM8wrwCCFI58q2wsQQ",
      authDomain: "kwitter-a5299.firebaseapp.com",
      databaseURL: "https://kwitter-a5299-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5299",
      storageBucket: "kwitter-a5299.appspot.com",
      messagingSenderId: "1037636155107",
      appId: "1:1037636155107:web:a7de5cfcfeefeac4c037d6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function addRoom()
    {

          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";     
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}