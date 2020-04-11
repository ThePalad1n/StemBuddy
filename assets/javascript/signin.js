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

function signinPage() {
    $("#signin").on("click", function (event) {
        event.preventDefault();
        var userEmail = $("#inputEmail").val().trim();
        var userPassword = $("#inputPassword").val().trim();

        var ref = database.ref('Users/');
        ref.on('value', gotData_long, errData_long); //binds new events

        function gotData_long(data) {
            var creds = data.val();
            var keys = Object.keys(creds);
            var temp = false;
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                var e = creds[k].emailfb;
                var p = creds[k].passfb;
                if (e === userEmail && p === userPassword) {
                    temp = true;
                    break;
                }
            }

            if (temp) {
                location.href = "index.html";
            }
            else {
                console.log("Error");
            }

        }

    });

    function errData_long(err) {
        console.log("Error");
        console.log(err);
    }

}

signinPage();