$(document).ready(function() {
   $(".col__der").on("click", ".tweet__contenido-like", function(e){
        $(".fa-heart").addClass("tweet__contenido-like-red");
        var count = $(".tweet__contenido-contador").children().text();
        count = parseInt(count);
        count = count + 1;
        $(".tweet__contenido-contador").children().text(count);
        e.preventDefault();
   })

   $(".col__der").on("click", ".tweet__contenido-cancel", function(e){
        $(this).parentsUntil(".tweet").remove();
        e.preventDefault();
    })
});