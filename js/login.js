var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( username == "sarah@chronoshack.club" && password == "epichack2021"){
alert ("Login successfully");
window.location = "sarah.html"; // Redirecting to other page.
return false;
}
else if(username == "marilyn@chronoshack.club" && password == "epichack2021"){
    alert ("Login successfully");
window.location = "marilyn.html"; // Redirecting to other page.
return false;
}
else if(username == "ganesh@chronoshack.club" && password == "epichack2021"){
    alert ("Login successfully");
window.location = "ganesh.html"; // Redirecting to other page.
return false;
}
else if(username == "faculty@chronoshack.club" && password == "epichack2021"){
    alert ("Login successfully");
window.location = "faculty.html"; // Redirecting to other page.
return false;
}
else if(username == "abhimanyu@chronoshack.club" && password == "epichack2021"){
    alert ("Login successfully");
window.location = "abhimanyu.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}