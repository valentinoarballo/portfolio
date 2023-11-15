$(document).ready(function() {
    $("#home").click(function(){
        $("body").addClass("home-page");
        $("#contenido").load("home.html");
    });

    $("#works").click(function(){
        $("body").removeClass("home-page");
        $("#contenido").load("works.html");
    });
    
    $("#contact").click(function(){
        $("body").removeClass("home-page");
        $("#contenido").load("contact.html");
    });

    $("body").addClass("home-page");
    $("#contenido").load("home.html");
});