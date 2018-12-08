var main = function() {
    "use strict";

}

function instructionsDropDwn() {
    var x = document.getElementById("playinstructions");
    console.log("howtoplay clicked");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//enter pressed goes to game screen
$("#entername").keyup(function(event) {
    if (event.keyCode === 13) {
      console.log("Enter was pressed in the name field!")
      $(".button").click();
    }
  });

function hideEnterName() {
    document.getElementById("entername").value = "";
}

//check if server is online
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    console.log("server online!");
    document.getElementById("serverstatus").innerHTML = "Online!";      //jquery didn't work, so just use regular js
    $('#serverstatus').css("color", "#09f228");
} else {
    document.getElementById("serverstatus").innerHTML = "Offline!";     //jquery didn't work, so just use regular js
    $('#serverstatus').css("color", "red");
    console.log("server offline!");
}

$(document).ready(main);
