var display = "";
var valor1 = 0;
var valor2 = 0;
var resultado = 0;
var operacion = "";

$("#clear").click(function(){   
   display = "."
   $("#lbl").text(display);
   display="";
   valor1 = 0;
   valor2 = 0;
   operacion = "";
});

/* Operaciones */

$("#sumar").on ("click", function(){
    valor1 = parseInt(display);
    display = "."
    $("#lbl").text(display);
    display="";
    operacion = "sumar";
});

$("#menos").on ("click", function(){
    valor1 = parseInt(display);
    display = "."
    $("#lbl").text(display);
    display="";
    operacion = "menos";
});

$("#multiplicar").on ("click", function(){
    valor1 = parseInt(display);
    display = "."
    $("#lbl").text(display);
    display="";
    operacion = "multiplicar";
});

$("#dividir").on ("click", function(){
    valor1 = parseInt(display);
    display = "."
    $("#lbl").text(display);
    display="";
    operacion = "dividir";
});

$("#igual").on ("click", function(){
    valor2 = parseInt(display);

    switch(operacion){
         case "sumar":
            resultado = valor1 + valor2;
            $("#lbl").text(resultado);
             /* Clear */
             valor1 = 0;
             valor2 = 0;
             resultado = 0;
             display="";
             operacion="";
             break;

         case "menos":
            resultado = valor1 - valor2;
            $("#lbl").text(resultado);
            /* Clear */
            valor1 = 0;
            valor2 = 0;
            resultado = 0;
            display="";
            operacion="";
            break;
         
         case "multiplicar":
            resultado = valor1 * valor2;
            $("#lbl").text(resultado);
            /* Clear */
            valor1 = 0;
            valor2 = 0;
            resultado = 0;
            display="";
            operacion="";
            break;
        
         case "dividir":
            if (valor1 > 0){
                resultado = valor1 / valor2;
                $("#lbl").text(Math.floor(resultado));

            } else {
                $("#lbl").text("err");
            }
                        
            /* Clear */
            valor1 = 0;
            valor2 = 0;
            resultado = 0;
            display="";
            operacion="";
            break;
    }
});

/* Números */

$("#nueve").on ("click", function(){
    display = display + "9";
    $("#lbl").text(display);
});

$("#ocho").on ("click", function(){
    display = display + "8";
    $("#lbl").text(display);
});

$("#siete").on ("click", function(){
    display = display + "7";
    $("#lbl").text(display);
});

$("#seis").on ("click", function(){
    display = display + "6";
    $("#lbl").text(display);
});

$("#cinco").on ("click", function(){
    display = display + "5";
    $("#lbl").text(display);
});

$("#cuatro").on ("click", function(){
    display = display + "4";
    $("#lbl").text(display);
});

$("#tres").on ("click", function(){
    display = display + "3";
    $("#lbl").text(display);
});

$("#dos").on ("click", function(){
    display = display + "2";
    $("#lbl").text(display);
});

$("#uno").on ("click", function(){
    display = display + "1";
    $("#lbl").text(display);
});

$("#cero").on ("click", function(){
    display = display + "0";
    $("#lbl").text(display);
});