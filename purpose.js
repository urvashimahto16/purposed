
'use strict';

var boolVisited = false;

function save(){
var purposeInput =document.getElementById('purposeBox').value;
localStorage.setItem("ThePurpose", purposeInput); // save the item
}

function toFacebook() {
   if (!boolVisited) {
    window.location.assign("https://www.facebook.com");
    boolVisited = true;
    document.getElementById("purpose").innerHTML = save();
    }
}
