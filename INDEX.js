// Your web app's Firebase configuration
const firebaseConfig = {
    //firebase config stuff
    apiKey: "AIzaSyAOO6BwNEh97hjOdZ1_o5E9PnZEe3RfIZA",
    authDomain: "polling-1c685.firebaseapp.com",
    databaseURL: "https://polling-1c685-default-rtdb.firebaseio.com",
    projectId: "polling-1c685",
    storageBucket: "polling-1c685.appspot.com",
    messagingSenderId: "197544694710",
    appId: "1:197544694710:web:2149ae7f04342764596717",
    measurementId: "G-9YXQC0HFL4"
  };
      //Initialize Firebase
      
      const app = firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth();
      
      function signUp()
      {
        var email1 = document.getElementById("email");
        var password1 = document.getElementById("password");
        const promise = auth.createUserWithEmailAndPassword(email1.value, password1.value);
        promise.then(u => {
            alert("Signed Up");})
        promise.catch(e => alert(e.message));
      }
      
      function signIn()
      {  
        var email2 = document.getElementById("email");
        var password2 = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email2.value, password2.value);
        promise.then(u =>{
          alert("Signed In");})
        promise.catch(e => alert(e.message)); 
      }
      auth.onAuthStateChanged(function(user){
        
        if(user){
          
          var email = user.email;
          alert("Active User " + email)
          }
          else
        {
          alert("No Active User");
        }
            
      });