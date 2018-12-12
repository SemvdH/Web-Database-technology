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
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1" ) {
        //if the host name is localhost or local ip, server is online
        console.log("server online!");
        document.getElementById("serverstatus").innerHTML = "Online!"; //jquery didn't work, so just use regular js
        $('#serverstatus').css("color", "#09f228");
    } else {
        document.getElementById("serverstatus").innerHTML = "Offline!"; //jquery didn't work, so just use regular js
        $('#serverstatus').css("color", "red");
        console.log("server offline!");
    }

    function setCookie(number) {
        document.cookie = "GamesPlayed=" + number + ";";
        }

    function getCookie() {
        var Cookie = decodeURIComponent(document.cookie);
        var c = Cookie.split("=");
        if(c[2] !== "") {
            var Cnumber = parseFloat(c[2]);
            return Cnumber;
        }
        else {
            return null;
        }
    };

    $(function Cookie() {
        var koek = getCookie();
        if(koek > 0) {
            koek++;
            document.getElementById("Cookieid").innerHTML = koek;
            setCookie(koek);
        }
        else {
            setCookie(1, 30);
            koek = 1;
            $(".Cookieclass").innerHTML = koek;
        }
    });