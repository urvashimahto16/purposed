
'use strict';

var boolVisited = false;
var boolPurposeWanted = true;

function save(){
    var purposeInput =document.getElementById('purposeBox').value;
    document.getElementById("logg")= purposeInput;
    localStorage.setItem("ThePurpose", purposeInput); // save the item
    //toFacebook();
}
document.getElementById("purposeEntered").onclick = save();

/*$(function(){
    $('purposeEntered').click(function(){
        var purposeInnerds = $("#purposeBox").val();
        if (purposeInnerds){
            chrome.storage.sync.set({"purposeBox" : purposeInnerds}, toFacebook())
        }
    })
})*/

/*function toFacebook() {
   if (!boolVisited) {
        window.location.assign("https://www.facebook.com");
        boolVisited = true;
    }
}*/

function setPurposeWantedToFalse(){
    boolPurposeWanted = false;
    localStorage.setItem("ThePurpose", "none");
}
document.getElementById("noPurpose").onclick = setPurposeWantedToFalse();
