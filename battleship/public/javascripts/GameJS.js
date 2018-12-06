// var space = 1;
// for (var r = 0; r < 10; r++) {
//     var col = "";
//     for (var c = 0; c < 10; c++) {
//         col += "<td data-pos='" + space + "'></td>"; space++;
//     }
//     $("#player").append("<tr>" + col + "</tr>");
// }

// $('document').ready(function() {

// });

var space = 1;
for (var r=0; r<10; r++) {
  var col = "";
  for (var c=0; c<10; c++) { 
    col += "<td data-pos='"+space+"'></td>"; space++; 
  }
  $("#player").append("<tr>"+col+"</tr>");
  $("#opponent").append("<tr>"+col+"</tr>");
}