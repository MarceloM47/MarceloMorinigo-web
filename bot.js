var input = document.querySelector("#input");
var outpot = document.querySelector("#outpot");
var stringIn = "";
var stringOut = "";
var button = document.querySelector("button");

button.addEventListener("click", clickHandler, false );

function clickHandler()
{
  stringIn = input.value;

  if (stringIn === "Hola") {
    stringOut = "Hola que tal"
  }
  else if(stringIn === "Bien") {
    stringOut = "Me alegro mucho"
  }
  else if(stringIn === "¿Quien eres?") {
    stringOut = "Soy un bot creado por Marcelo Morinigo, programado para responder una cantidad limitada de preguntas..."
  }
  else if(stringIn === "¿Eres hombre o mujer?") {
    stringOut = "Soy mas hombre que tu XD"
  }
  else if(stringIn === "¿Como te llamas?") {
    stringOut = "Mi creador aun no se le ocurrio un nombre &#128514;"
  }
  else if(stringIn === "Marcelo Morinigo") {
    stringOut = "Es mi guapo creador &#128516;"
  }
  else if(stringIn === "¿Que puedes hacer?" || "¿Que sabes hacer?") {
    stringOut = "Pues la verdad solo contestar limitadas preguntas :("
  }


  else(stringOut = "No comprendo lo que dices")


  outpot.innerHTML = stringOut;
  input.value = "";
  input.focus ();


}
