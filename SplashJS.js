function instructionsDropDwn() {
    var x = document.getElementById("playinstructions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideEnterName() {
    document.getElementById("entername").value = "";
}