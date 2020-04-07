//app.js

/* goals for app:
create a login/sign up page
    save previous conversions
    option to download solutions

select what type of calculations you want via button
    then drop down of different types of calculations
    select one then make a form to fit each ie perimeter (square, rectangle, triangle, etc)
        form will have place for each sides value.

*/

function main(){
    $("#Geometry").on("click", function (event) {
        location.href = "geometry.html";
    });
    $("#Perimeter").on("click", function (event) {
        SurfaceArea_Select();
    });
    $("#SurfaceArea").on("click", function (event) {
        SurfaceArea_Select();
    });
    $("#Area").on("click", function (event) {
        Area_Select();
    });
    $("#Volume").on("click", function (event) {
        Volume_Select();
    });
    $("#Conversion").on("click", function (event) {
        location.href = "conversions.html";
    });
}
    //prompt user on main page with buttons

    /*
	cout << "Welcome To StemBuddy!\n";
	cout << "Please choose an option:\n";
	cout << "1 - Perimeter\n";
	cout << "2 - Surface Area\n";
	cout << "3 - Area\n";
	cout << "4 - Volume\n";
	cout << "5 - Conversion\n";
	cout << "6 - Exit\n";
	cin >> mm_option;
    */
//This is the end of the main function
function Perimeter_Select(){
    alert("test");
};
function SurfaceArea_Select(){
    alert("test");
};
function Area_Select(){
    alert("test");
};
function Volume_Select(){
    alert("test");
};
function Conversion_Select(){
    alert("test");
};
function exit_select(){

};
main();