var main = function () {
"use strict";

var pressenter = function () {
  console.log("Enter was pressed!")
};



$("#entername").keyup(function(event) {
  if (event.keyCode === 13) {
    console.log("Enter was pressed in the name field!")
    $(".button").click();
  }
});

};

$(document).ready(main);