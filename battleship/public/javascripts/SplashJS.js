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

$(document).ready(main);