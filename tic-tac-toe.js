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
var turn = "player1"
function move(){
  if(turn == "player1"){
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","50")
    circle.setAttribute("cy","70")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","red")

  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  turn ="player2"
}else{
  var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","50")
    circle.setAttribute("cy","70")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","purple")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  turn = "player1"
}
}
var turn = "player1"
function movemake(){
  if(turn == "player1"){
  var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","160")
    circle.setAttribute("cy","70")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
turn = "player2"
  }else{
    var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx","160")
      circle.setAttribute("cy","70")
      circle.setAttribute("r","20")
    circle.setAttribute("fill","purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    turn = "player1"

  }
}
var turn = "player1"
function tictac(){
  if(turn == "player1"){
    var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx","265")
      circle.setAttribute("cy","70")
      circle.setAttribute("r","20")
    circle.setAttribute("fill","red")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  turn = "player2"
}else{
  var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","265")
    circle.setAttribute("cy","70")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","purple")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  turn = "player1"

}

}


var turn = "player1"
function tictoe(){
  if(turn == "player1"){
    var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx","50")
      circle.setAttribute("cy","178")
      circle.setAttribute("r","20")
    circle.setAttribute("fill","red")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  turn = "player2"
}else{
  var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","50")
    circle.setAttribute("cy","178")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","purple")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  turn = "player1"

}

}
var turn = "player1"
function tichoe(){
  if(turn == "player1"){
    var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx","50")
      circle.setAttribute("cy","178")
      circle.setAttribute("r","20")
    circle.setAttribute("fill","red")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  turn = "player2"
}else{
  var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx","50")
    circle.setAttribute("cy","178")
    circle.setAttribute("r","20")
  circle.setAttribute("fill","purple")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  turn = "player1"

}

}
