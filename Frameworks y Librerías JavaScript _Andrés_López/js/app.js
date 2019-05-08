function animarTitulo()
{
    var color1 = '#FFFFFF';
    var color2 = '#DCFF0E';
    

    $(".main-titulo").delay(500).animate({color: color1},100, function()
    {
        $(this).delay(500).animate({color: color2},100, function()
        {
          animarTitulo();
        });
    });
}

function agregarImagenes(selector){
    
    var colJuego = $(selector);
    
    for(var i=0; i<=6; i++){
        var numero = Math.floor(Math.random() * (5 - 1)) + 1;
        var imagen = document.createElement("img");
        $(imagen).attr("src","image/"+numero+".png");
        $(imagen).addClass("elemento");
        $(imagen).addClass("img-"+i);
        $(imagen).appendTo(colJuego);    
    }
    
}

function posicionFichas(){
    $(".elemento").draggable({
        revert: true
    });
    var movimientos = 0;
    $(".elemento").droppable({
        
        drop: function(event, ui){
            var elementoDg = $(ui.draggable).attr("src");
            var elementoDp = $(this).attr("src")
            
            $(this).attr("src", elementoDg);
            $(ui.draggable).attr("src", elementoDp);
            reglasJuego();
            $("#movimientos-text").text(aumentarMovimientos);
            
            
        }
    })
}

function darMatriz(i){
    var fil = $("div[class*='col-"+i+"']").find("img");
    return fil;
}

function animar(selector){
    var puntuacion = $("#score-text").text();
    $(selector).hide("fast",function(){
        $(this).remove();
    })
              

}

function reglasJuego(){
    for(var i=1;i<=7;i++){
        for(var j=0;j<=6;j++){
            if(i != j && j != i){
                if($(darMatriz(i)[j]).attr("src")==$(darMatriz(i)[j+1]).attr("src") && $(darMatriz(i)[j]).attr("src")==$(darMatriz(i)[j+2]).attr("src")){
                    $("#score-text").text(aumentarPuntuacion);
                    animar(darMatriz(i)[j]);
                    animar(darMatriz(i)[j+1]);
                    animar(darMatriz(i)[j+2]);
                }
                else if($(darMatriz(i)[j]).attr("src")==$(darMatriz(i)[j-1]).attr("src") && $(darMatriz(i)[j]).attr("src")==$(darMatriz(i)[j-2]).attr("src")){
                    $("#score-text").text(aumentarPuntuacion);
                    animar(darMatriz(i)[j]);
                    animar(darMatriz(i)[j-1]);
                    animar(darMatriz(i)[j-2]);
                }
                else if($(darMatriz(i)[j]).attr("src")==$(darMatriz(i+1)[j]).attr("src") && $(darMatriz(i)[j]).attr("src")==$(darMatriz(i+2)[j]).attr("src")){
                    $("#score-text").text(aumentarPuntuacion);
                    animar(darMatriz(i)[j]);
                    animar(darMatriz(i+1)[j]);
                    animar(darMatriz(i+2)[j]);
                }
                else if($(darMatriz(i)[j]).attr("src")==$(darMatriz(i-1)[j]).attr("src") && $(darMatriz(i)[j]).attr("src")==$(darMatriz(i-2)[j]).attr("src")){
                    $("#score-text").text(aumentarPuntuacion);
                    animar(darMatriz(i)[j]);
                    animar(darMatriz(i-1)[j]);
                    animar(darMatriz(i-2)[j]);
                }   
            }                
        }
    }
}

function rellenarTablero(){
    var constante = 7;
    for(var i=1; i<=7; i++){
        var imagenesCol = $("div[class*='col-"+i+"']").find("img");
        var selector = $("div[class*='col-"+i+"']");
        var imgRestantes = imagenesCol.length;
        var imgFaltantes = constante-imgRestantes;
        
        if(imgRestantes != 7){
            for(var j=1; j<=imgFaltantes; j++){
                var numero = Math.floor(Math.random() * (5 - 1)) + 1;
                var imagen = document.createElement("img");
                $(imagen).attr("src","image/"+numero+".png");
                $(imagen).addClass("elemento");
                $(imagen).appendTo(selector);
            }
        }
    }
    
}

function aumentarPuntuacion(){
    var punt = parseInt($("#score-text").text());
    return punt+5;
}

function aumentarMovimientos(){
    var mov = parseInt($("#movimientos-text").text());
    return mov+1;
}

function acabarJuego(){
    $(".panel-tablero").hide(1600)
    
    
    $(".time").hide("size");
    
    $(".titulo-final").animate({
            opacity: 1
    }, 1000);
    
    $(".panel-score").animate({
        width: 1200
    },600);
    
}

$(function(){
    animarTitulo();
    
    
    $(".btn-reinicio").on("click",function(){
        for(var i=1; i<8; i++){
            agregarImagenes($(".col-"+i));    
        }
        $(this).attr("disabled","true");
        posicionFichas();
        inicio();
        //darMatriz();
        //reglasJuego();
        /* if($("div[class*='col-1']").find("img").length<7)
        {
             var numero = Math.floor(Math.random() * (5 - 1)) + 1;
            var imagen = document.createElement("img");
            $(imagen).attr("src","image/"+numero+".png");
            $(imagen).addClass("elemento");
            
            $(imagen).appendTo($("div[class*='col-1']"));
        }*/
        $(".elemento").hover(function(){
        rellenarTablero();
        posicionFichas();
        })
        
    });
   
    
    
    
    
    
})