// Get the modal
var firebaseConfig = {
    apiKey: "AIzaSyDuWQ_x8kUq8bWrdvSYIOVlnQYUuFI1YxQ",
    authDomain: "stembuddy-4fd02.firebaseapp.com",
    databaseURL: "https://stembuddy-4fd02.firebaseio.com",
    projectId: "stembuddy-4fd02",
    storageBucket: "stembuddy-4fd02.appspot.com",
    messagingSenderId: "396823292169",
    appId: "1:396823292169:web:442dfc8893fe1ce332cbd8",
    measurementId: "G-SNEKH5E8E7"
};

// Initialize Firebase
var database = firebase.database();
firebase.analytics();

function signupPage() {
    $("#su").on("click", function (event) {
        event.preventDefault();
        location.href = "signup.html";
    });

    $("#signupbtn").on("click", function (event) {
        event.preventDefault();
        var newUserEmail = $("#inputEmail").val();
        console.log(newUserEmail);
        var newUserPassword = $("#inputPassword").val();
        console.log(newUserPassword);
        var re = $("#inputPassword2").val();
        console.log(re);

        var emailChars = newUserEmail.split("");
        console.log(emailChars)


        if (emailChars.includes("@")) {
            if (newUserPassword === re) {
                console.log("success")
                
                var x = firebase.database().ref('Users');
                var newUser = x.push();
                newUser.set({
                    emailfb: newUserEmail,
                    passfb: newUserPassword,
                });
                
                location.href = "signin.html";
            }
            else {
                console.log("pass dont match")
            }
        }
        else {
            console.log("invalid email")
            signupPage();
        }
    });

    $("#cancelbtn").on("click", function (event) {
        event.preventDefault();
        location.href = "signin.html";
    });

}

signupPage();












/*
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
*/