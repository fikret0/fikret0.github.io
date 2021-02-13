window.onload = function() {
    var projeler = "<ul>";

    $.getJSON("https://api.github.com/users/fikret0/repos", function(data){
        $.each(data, function(i, value){
            if(value.fork === false && value.name != "fikret0" && value.name != "fikret0.github.io"){
                projeler = projeler + "<li><a href=\"" + value.html_url + "\">" + value.name + "</a></li>";
            }
        });

        projeler = projeler + "</ul>";

        console.log(projeler);
    
        $("#projeMain").html(projeler);
    });
}