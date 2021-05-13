var input = document.querySelector("#input");
var outpot = document.querySelector("#outpot");
var stringIn = "";
var stringOut = "";
var button = document.querySelector("button");

button.addEventListener("click", clickHandler, false );

function clickHandler()
{
  stringIn = input.value;

  if (stringIn === "hola" ) {
    stringOut = "Hola que tal";
  }
  else if (stringIn.includes("bien")) {
    stringOut = ("que bueno");
  }
  else if (stringIn.includes("¿Eres hombre o mujer?")) {
    stringOut = ("Soy mas hombre que tu");
  }
  else{
      stringOut = "No comprendo lo que dices";
  }


  outpot.innerHTML = stringOut;
  input.value = "";
  input.focus ();


}
