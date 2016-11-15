// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function shape(){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx","50")
  circle.setAttribute("cy","70")
  circle.setAttribute("r","20")
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function xxx(){
  var rect = document.createElementNS(namespace, "rectangle")
rect.setAttribute()
  canvas.appendChild(line)
}
