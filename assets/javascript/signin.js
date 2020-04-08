// Your web app's Firebase configuration
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
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
firebase.analytics();
var newUser;


$("#signin").on("click", function (event) {
    event.preventDefault();
    var userEmail = $("#inputEmail").val().trim();
    console.log(userEmail);
    var userPassword = $("#inputPassword").val().trim();
    console.log(userPassword);


    var ref = database.ref('Users/');
    ref.on('value', gotData_long, errData_long); //binds new events
    function gotData_long(data) {
        var dat = data.val();
        console.log(dat);
        var keys = Object.keys(dat);
        console.log(keys);
        for(var i = 0; i < keys.length; i++){
            var k = keys[i];
            var emails = dat[k].emailfb;
            var passwords = dat[k].passfb;
            console.log(emails);
            console.log(passwords);
        }
        if (userEmail != emails && userPasswords != passwords){
            alert("please try again");
        }
        //else{
            //location.href = "index.html";
        //}
    }

    function errData_long(err) {
        console.log("Error");
        console.log(err);
    }


    //insert user/pass check here
    var x = database.ref('Users');
    var newUser = x.push();

    newUser.set({
        emailfb: userEmail,
        passfb: userPassword,
    });
});
