// Cuando el contador llegue a 0:
// Remover la clase on-time
// Agregar la clase time-is-up
// Agregar el mensaje 'tu tiempo se ha terminado'
// Aparecer un boton que diga 'Reiniciar contador' que al darle click reinicie el contador (usando --alguna animación de jQuery)

// Al dar click sobre el boto 'Reiniciar contador'
// Desaparecer el botón usando alguna animación de jquery
// Ejecutar de nuevo a la función countdown

function countdown(){
    var countdown = 5;
    var eachSecond = setInterval(timer, 1000);
    
    function timer(){
        if (countdown == 0){
            clearInterval(eachSecond);
            $("#timer").removeClass("on-time");
            $("#timer").addClass("time-is-up");
            $("span").after("<p>Tu tiempo se ha terminado</p><br> <button type='button'>Reiniciar Contador</button>");
            $("button").hide();
            $("button").show(300);
            $("button").click(function(){
                $(this).hide(300);
                $("p").hide(300);
            });
        } else{
            countdown--;
            $("#timer").text(countdown);
        }
        
    } 
};

countdown();