var main = function () {
  "use strict";

  var space = 1;
  for (var r = 0; r < 10; r++) {
    var col = "";
    for (var c = 0; c < 10; c++) {
      col += "<td id='" + r + "." + c + "'</td>";
      col = col.replace('< td', '');  //tried to replace weird part with empty string, but didn't work
      space++;
      
    }

    // 
    $(".player").append("<tr>" + col + "</tr>");
    $(".opponent").append("<tr>" + col + "</tr>");
  }

  $(function changeColor() {
    var cell = ".player tr td";

    $('.player tr td').click(function () {
      var cellClasses = document.getElementById(this.id).classList;
      console.log("classes is " + cellClasses);
      if (!cellClasses.contains("clicked")) {
        cellClasses.add("clicked");
      }
      else if (cellClasses.contains("clicked")) {
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
  // ------ end code for timer ------
};

$(document).ready(main);