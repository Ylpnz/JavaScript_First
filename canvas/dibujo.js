var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

//lineaarriba(lineaSuperior,1,1,1,299);
//lineaarriba(lineaSuperior,1,299,299,299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

/*function lineaarriba(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xfinal, xinicial);
  lienzo.lineTo(yfinal, yinicial);
  lienzo.stroke();
  lienzo.closePath();
}*/

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho/lineas;
  var l = 0;
  var yi, xf;
  var colorcito = "green";
  //var lineaSuperior = "blue";

  for( l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    //lineaarriba(lineaSuperior,0, yf, xi, 300);
    dibujarLinea(colorcito, 0, yi, xf, 300,);
    console.log( "Linea " + l);
  }
  dibujarLinea( colorcito, 1, 1, 1, (ancho-1) );
  dibujarLinea( colorcito, 1, (ancho-1), (ancho-1), (ancho-1));
}
