var segundos = 59;
var minutos = 1;

var segundosPg = $("#segundos");
var minutosPg = $("#minutos");
var control;

function inicio () {
    control = setInterval(cronometro,500);    
}

function cronometro(){
    if(segundos<=59){
        $(segundosPg).text(":"+segundos)
        $(minutosPg).text("0"+minutos);
        segundos--;
    }
    if(segundos < 0){
        minutos--;
        segundos = 59;
    }
    if(minutos < 0){
        parar();
        acabarJuego();
    }
}
function parar(){
    clearInterval(control);
    
    minutos = 0;
    segundos = 0;
    
    $(minutos).text("00");
    $(segundosPg).text(":00")
}

function reiniciar(){
    segundos = 59;
    minutos = 1;
    
    $(segundosPg).text("02");
    $(minutosPg).text(":00");
    
    clearInterval(control);
}