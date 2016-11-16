// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var message = "sup"
function shape(){
  if(message == "sup"){
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","50")
    circle.setAttribute("cy","70")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","red")

  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  message = "peace"
}

}
var boi = "boii"
function  middle(){
  if(boi == "boii"){
    var cir
  }
}
