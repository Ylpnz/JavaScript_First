var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender()
{
  var bombillito = new jf.Led(9);
  var rojito = new jd.Led(13)
  bombillito.blink(200);
  rojito.blink(700)
  console.log("Holissssss estoy programando un arduino");
}
