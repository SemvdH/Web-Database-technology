var main = function () {
  "use strict";

  var space = 1;
  for (var r = 0; r < 10; r++) {
    var col = "";
    for (var c = 0; c < 10; c++) {
      col += "<td id='" + r + "." + c + "'</td>";
      col = col.replace('< td', ''); //tried to replace weird part with empty string, but didn't work
      space++;

    }

    // 
    $(".player").append("<tr>" + col + "</tr>");
    $(".opponent").append("<tr>" + col + "</tr>");
  }

  $(function clickOnCell() {

    $('.player tr td').click(function () {
      var cellClasses = document.getElementById(this.id).classList;
      console.log("classes is " + cellClasses);
      if (!cellClasses.contains("clicked")) {
        cellClasses.add("clicked");

      } else if (cellClasses.contains("clicked")) {
        console.log("Has already been pressed");
      }

      console.log("classes is now " + cellClasses);
      //$(this).css('background-color', '#aaa');
      console.log(this.id);
    });
  });

  $(function alertclick() {
    $('.opponent tr td').click(function () {
      alert("Hey! You can't attack your own ships!");
    });
  });


//function that generates a random cell
  function randomCell() {
    // numbers need to be between and including 0 and 9
      var min = Math.ceil(0);
      var max = Math.floor(9);
      // generate 2 random numbers for coordinates (formula found online)
      var randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
      var randomNumber2 = (Math.floor(Math.random() * (max - min + 1)) + min);
      var randomGeneratedCell = (randomNumber + "." + randomNumber2);
      // console.log(randomGeneratedCell);
      return randomGeneratedCell;
  };

  // place a ship on a random cell
  $(function randomShipPlacer() {
    var opponenttable = document.getElementsByClassName("opponent");
    console.log(opponenttable);
    // total amount of cells for ships is 17
      for (var i = 0; i < 17; i++) {
        var cell = document.getElementById(randomCell());
        console.log(cell);
        var classes = cell.classList;
        console.log(classes);
        //add hasship class to cell if it doesn't have it already
        if (!classes.contains('hasShip')) {
          classes.add('hasShip');
        };
      };
    });

  

  
  // ------ begin code for timer ------

  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;

  //set interval to 1 second
  setInterval(setTime, 1000);

  function setTime() {
    //total seconds incremented by 1
    ++totalSeconds;
    //seconds is remainder of division by 60
    secondsLabel.innerHTML = calculateTime(totalSeconds % 60);
    //minutes is just divided by 60
    minutesLabel.innerHTML = calculateTime(parseInt(totalSeconds / 60));
  }

  function calculateTime(val) {
    var valString = val + "";
    //add a 0 if the time is only 1 digit
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  setInterval(getPlayerName, 5000);

  function getPlayerName() {
    var IGN;
    IGN = $(".start-button input");
    console.log(IGN);
  }
  // ------ end code for timer ------

};


$(document).ready(main);