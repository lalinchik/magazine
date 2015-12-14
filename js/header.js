document.querySelector("#profile-button").addEventListener("click", function(event){
    var style = document.querySelector("#profile-block").style;
    if(style.visibility == "visible"){
       style.visibility = "hidden";
   } else {
       style.visibility = "visible";
   }
});

document.querySelector("#profile-button-menu").addEventListener("click", function(event){
    var style = document.querySelector("#profile-block").style;
    if(style.visibility == "visible"){
        style.visibility = "hidden";
    } else {
        style.visibility = "visible";
    }
});

document.querySelector("#menu-button").addEventListener("click", function(event){
    var style = document.querySelector("#menu-block").style;
    if(style.visibility == "visible"){
        style.visibility = "hidden";
    } else {
        style.visibility = "visible";
    }
});


