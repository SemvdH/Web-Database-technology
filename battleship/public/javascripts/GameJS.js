var main = function () {
  "use strict";

  //create table in js
  var space = 1;
  //make colums
  for (var r = 0; r < 10; r++) {
    var col = "";
    //make cells
    for (var c = 0; c < 10; c++) {
      //add id to cells
      col += "<td id='" + r + "." + c + "'</td>";
      col = col.replace('< td', ''); //tried to replace weird part with empty string, but didn't work
      space++;

    }

    // add table to DOM
    $(".player").append("<tr>" + col + "</tr>");
    $(".opponent").append("<tr>" + col + "</tr>");
  }

  var hits = 0;
  $(function clickOnCell() {

    $('.player tr td').click(function () {
      var cellClasses = document.getElementById(this.id).classList;
      console.log("classes is " + cellClasses);
      //add clicked class to cell if it doesn't already have it
      if (!cellClasses.contains("clicked")) {
        cellClasses.add("clicked");
        if (cellClasses.contains("hasShip")) {
          //amount of hits increases
          hits++;
          console.log(hits);
          //if all ships are hit, the player has won
          if (hits === 17) {
            $(alert("Congratulations! You won the game!"));
          }
        }

      } else if (cellClasses.contains("clicked")) {
        console.log("Has already been pressed");
      }

      console.log("classes is now " + cellClasses);
      //$(this).css('background-color', '#aaa');
      console.log(this.id);
    });
  });

  //alert player if he tries to click on own board
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

  //Placing the actual ships
  function placingships(cell, shiplength, rotation) {
    var Cell = cell;
    if (rotation === 0) {
      for (var i = 1; i <= shiplength; i++) {
        //add ship class to cells in ship order
        Cell.classList.add('hasShip');
        //add ship class to cells underneath
        var sum = parseFloat(cell.id) + i;
        Cell = document.getElementById(sum);
      };
    };
    if (rotation === 1) {
      //also add ship class
      for (var i = 1; i <= shiplength; i++) {
        Cell.classList.add('hasShip');
        //add ship class to cells next to it
        var sum = parseFloat(cell.id) + i / 10;
        Cell = document.getElementById(sum);
      };
    };
  };

  //random placement of ships
  function shipplacer(shiplength, rotation) {
    var cell = document.getElementById(randomCell());
    //check if the cells where you want to place it are available
    if (checkCells(cell, shiplength, rotation)) {
      //call the placing the cells funtion if the target cells are accepted
      placingships(cell, shiplength, rotation)
    } 
    //try again but with a starting cell and target cells to place the ship in
    else {
      shipplacer(shiplength, rotation);
    };
  };

  //Check if the target cells are available to place an ship
  function checkCells(cell, length, rotation) {
    try {
      for (var i = 0; i < length; i++) {
        if (rotation === 0) {
          var Tcell = document.getElementById(parseFloat(cell.id) + i);
          var tcellclass = Tcell.classList;
          var pt = parseFloat(Tcell);
          pt = (pt * 10) % 10
          if (tcellclass.contains("hasShip") || pt > 9) {3
            return false;
          }
        }

        if (rotation === 1) {
          var Tcell = document.getElementById(parseFloat(cell.id) + i / 10);
          var tcellclass = Tcell.classList;
          var pt = parseFloat(Tcell);
          if (tcellclass.contains("hasShip") || pt > 9.9) {
            return false;
          }
        }
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  $(function ships() {
    for (var i = 5; i > 1; i--) {
      var x = int0or1();
      shipplacer(i, x);
    };
    shipplacer(3, int0or1());
  });

  //generate random int between 0 or 1
  //for vertical or horizontal ship placement
  function int0or1() {

    var min = Math.ceil(0);
    var max = Math.floor(1);
    var randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
    return randomNumber;
  }


  // ------ begin code for timer ------

  //get DOM elements
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  //initialize seconds to 0
  var totalSeconds = 0;

  //set interval to 1 second
  setInterval(setTime, 1000);

  function setTime() {
    //total seconds incremented by 1
    ++totalSeconds;
    //seconds is remainder of division by 60
    secondsLabel.innerHTML = calculateTime(totalSeconds % 60);
    //minutes is just divided by 60
    //always an int, so anything below 60 is 0, above is 1 etc
    minutesLabel.innerHTML = calculateTime(parseInt(totalSeconds / 60));
  }

  //calculate the time if it needs a 0 before it or not
  function calculateTime(val) {
    var valString = val + "";
    //add a 0 if the time is only 1 digit
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
  // ------ end code for timer ------

};


$(document).ready(main);