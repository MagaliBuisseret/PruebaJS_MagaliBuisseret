$(document).ready(function() {
   $(".col__der").on("click", ".tweet__contenido-like", function(e){
        $(this).children().addClass("tweet__contenido-like-red");
        var count = $(this).siblings("div").children().text();
        count = parseInt(count);
        count = count + 1;
        $(this).siblings("div").children().text(count);
        e.preventDefault();
   })

   $(".col__der").on("click", ".tweet__contenido-cancel", function(e){
        $(this).parentsUntil(".tweet").remove();
        e.preventDefault();
    })
    $(".create__contenido--boton").children().on("click", function(e){
        var usuario = $(".create__contenido--usuario").children().val();
        var tweeter = $(".create__contenido--texto").children().val();
        var new_tweet = $('.tweet').children().eq(0).clone();
        new_tweet.appendTo('.tweet');
        new_tweet.show();
        new_tweet.find(".tweet__contenido--usuario").children().text(usuario);
        new_tweet.find(".tweet__contenido--texto").children().text(tweeter);
        new_tweet.find(".tweet__contenido-contador").children().text("0");
        $(".create__contenido--usuario").children().attr("placeholder", "Escribe tu nombre de usuario");
        $(".create__contenido--texto").children().attr("placeholder", "Escribe tu Tweet");
        e.preventDefault();
   })
});
