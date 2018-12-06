
var space = 1;
for (var r=0; r<10; r++) {
  var col = "";
  for (var c=0; c<10; c++) { 
    col += "<td></td>"; space++; 
  } 
  // data-pos='"+space+"'
  $(".player").append("<tr>"+col+"</tr>");
  $(".opponent").append("<tr>"+col+"</tr>");
}

$( function changeColor() {
  var cell = ".player tr td";
  $('.player tr td').click(function () {
    //$(this).css('background-color', '#aaa');
    // $(this).css('border', '2px solid black');
    $(this).toggleClass('clicked');   //doesn't want to work?
  });
});

// timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
