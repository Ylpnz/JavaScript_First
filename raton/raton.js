var color = document.getElementById("seleccionaColor");
var cuadro = document.getElementById("ratoncito");
var papel = cuadro.getContext("2d");

cuadro.addEventListener("mousedown", clickMouse);
cuadro.addEventListener("mousemove", moverMouse);
cuadro.addEventListener("mouseup", soltarMouse);

let mouse = false;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 10;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function clickMouse()
{
    mouse = true;
}

function soltarMouse()
{
  mouse = false;
}

function moverMouse(event)
{
  if(mouse == true){
    dibujarLinea(color.value, event.layerX - 1, event.layerY -1 , event.layerX + 1, event.layerY + 1, papel);
  }
}
