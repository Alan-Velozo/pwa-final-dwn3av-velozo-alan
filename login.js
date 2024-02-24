// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVFIEBHhs-OP9NojzSjQm-NcRYoa2clvk",
  authDomain: "rick-y-morty-api-17.firebaseapp.com",
  projectId: "rick-y-morty-api-17",
  storageBucket: "rick-y-morty-api-17.appspot.com",
  messagingSenderId: "280953834661",
  appId: "1:280953834661:web:82c635a3f8bbf8f114114c",
  measurementId: "G-LNY6JEYZ0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


let form = document.getElementById("login-form");
let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");

form.addEventListener("submit", function(e){
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.replace("index.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //alert(errorMessage);
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal')); 
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.innerText = errorMessage; 
    errorModal.show();
  });
})