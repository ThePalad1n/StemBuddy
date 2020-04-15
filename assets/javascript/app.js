





function main() {
    $("#test").on("click", function (event) {
        location.href = "numberSystemCon.html";

    });
}
main();

function id(id) {
    return document.getElementById(id);
}






































/*GET
https://newton.now.sh/:operation/:expression



$(document).on('click', '.expression', function() {
    var craft = $(this).html();
    console.log(craft);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + craft + "&api_key=tOPiBguzq4Fx46PDw6EPyAELdILodTnX";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
*/
/*
Operation	API Endpoint	Result
Simplify	/simplify/2^2+2(2)	8
Factor	/factor/x^2 + 2x	x (x + 2)
Derive	/derive/x^2+2x	2 x + 2
Integrate	/integrate/x^2+2x	1/3 x^3 + x^2 + C
Find 0's	/zeroes/x^2+2x	[-2, 0]
Find Tangent	/tangent/2lx^3	12 x + -16
Area Under Curve	/area/2:4lx^3	60
Cosine	/cos/pi	-1
Sine	/sin/0	0
Tangent	/tan/0	0
Inverse Cosine	/arccos/1	0
Inverse Sine	/arcsin/0	0
Inverse Tangent	/arctan/0	0
Absolute Value	/abs/-1	1
Logarithm	/log/2l8	3
*/







/* MATH FAX
var unirest = require("unirest");

var req = unirest("GET", "https://numbersapi.p.rapidapi.com/1729/math");

req.query({
	"fragment": "true",
	"json": "true"
});

req.headers({
	"x-rapidapi-host": "numbersapi.p.rapidapi.com",
	"x-rapidapi-key": "11f8f2ce93msh3bd87d52f7ec467p1c5a9fjsn6d372328342d"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
*/
























/*
<!DOCTYPE html>
<html>
<head>
<title>Show Multiple Form Using Drop down Option - Demo Preview</title>
<meta content="noindex, nofollow" name="robots">
<!-- Importing Font Family From Google Fonts -->
<link href='http://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
<link href="multipleform.css" rel="stylesheet">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/multipleform.js"></script>
</head>
<body>
<div class="container">
<h2>Dynamically Created Form Fields Based On Selection</h2>
<div id="selected_form_code">
<select id="select_btn">
<option value="0">--Select No Of Form to Display for Registration--</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<option value="4">Four</option>
<option value="5">Five</option>
</select>
</div>
<div id="form1">
<form action="#" id="form_submit" method="post" name="form_submit">
<!-- Dynamic Registration Form Fields Creates Here -->
</form>
</div>
</div>
</body>
</html>



$(document).ready(function() {
    $('select#select_btn').change(function() {
    var sel_value = $('option:selected').val();
    if (sel_value == 0) {
    $("#form_submit").empty(); // Resetting Form
    $("#form1").css({
    'display': 'none'
    });
    } else {
    $("#form_submit").empty(); //Resetting Form
    // Below Function Creates Input Fields Dynamically
    create(sel_value);
    // Appending Submit Button To Form
    $("#form_submit").append($("<input/>", {
    type: 'submit',
    value: 'Register'
    }))
    }
    });
    function create(sel_value) {
    for (var i = 1; i <= sel_value; i++) {
    $("div#form1").slideDown('slow');
    $("div#form1").append($("#form_submit").append($("<div/>", {
    id: 'head'
    }).append($("<h3/>").text("Registration Form" + i)), $("<input/>", {
    type: 'text',
    placeholder: 'Name' + i,
    name: 'name_' + i
    }), $("<br/>"), $("<input/>", {
    type: 'text',
    placeholder: 'Email' + i,
    name: 'email_' + i
    }), $("<br/>"), $("<textarea/>", {
    placeholder: 'Message' + i,
    type: 'text',
    name: 'msg_' + i
    }), $("<br/>"), $("<hr/>"), $("<br/>")))
    }
    }
    });





    div#form1{
width:380px;
display:none;
height:auto;
border:1px solid gray;
padding:20px;
background-color:#FDE2E2;
border-radius:5px;
margin-left:40px;
box-shadow:0 0 8px gray
}
#select_btn{
width:425px;
height:30px;
margin-left:40px;
font-family:'Droid Serif',serif
}
h3{
text-align:center;
font-family:'Droid Serif',serif
}
h2{
margin-top:80px;
width:500px;
text-align:center;
text-shadow:0 0 1px gray;
font-family:'Droid Serif',serif
}
input[type=text]{
padding:5px;
width:100%;
height:40px;
border:1px solid #49b637;
margin:10px 0;
box-shadow:0 0 5px #5a5a6f;
border-radius:3px;
font-family:'Droid Serif',serif
}
input[type=submit]{
background-color:#781149;
color:#fff;
border-radius:5px;
padding:10px;
width:100%;
height:40px;
border:2px solid #fff;
font-size:16px;
font-family:'Droid Serif',serif
}
input[type=submit]:hover{
background-color:orange;
cursor:pointer
}
textarea{
padding:5px;
width:100%;
height:80px;
border:1px solid #49b637;
margin:10px 0;
box-shadow:0 0 5px #5a5a6f;
border-radius:3px;
font-family:'Droid Serif',serif
}
.container{
margin:20px auto;
width:960px;
position:relative
}
*/