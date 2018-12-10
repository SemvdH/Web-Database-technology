// var main = function () {
//     "use strict";

//function for the dropdown menu
    function instructionsDropDwn() {
        var x = document.getElementById("playinstructions");
        console.log("howtoplay clicked");
        //display if it's not displayed yet
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            //else make it dissappear again
            x.style.display = "none";
        }
    };

    //enter pressed goes to game screen
    $(function enterPressesButton() {
        $("#entername").keyup(function (event) {
            //enter keycode is 13
            if (event.keyCode === 13) {
                console.log("Enter was pressed in the name field!")
                //if enter is pressed, start button is clicked
                $(".button").click();
            }
        });
    });

    

    //on enter name field click, "enter name" dissappears
    function hideEnterName() {
        document.getElementById("entername").value = "";
    };

    //check if server is online
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        //if the host name is localhost or local ip, server is online
        console.log("server online!");
        document.getElementById("serverstatus").innerHTML = "Online!"; //jquery didn't work, so just use regular js
        $('#serverstatus').css("color", "#09f228");
    } else {
        document.getElementById("serverstatus").innerHTML = "Offline!"; //jquery didn't work, so just use regular js
        $('#serverstatus').css("color", "red");
        console.log("server offline!");
    }

    function goToGameScreen() {
        var PlayerName = (".start-button input").value;
        console.log(PlayerName);
        // window.location.href='Game.html';
    };
    // document.cookie = "timesVisited=1";
    // var x = document.cookie;
    // console.log("cookie is " + x);
// };

// $(document).ready(main);
