// cibler le body pour qu'au click il y est une redirection sur l'input
const COMMAND_BODY = document.getElementsByTagName("command_line_body");

// cibler la div pour y générer de nouveaux éléments html
const NEW_COMMAND_LINE = document.getElementById("command_line");
let currentAnswerNumber = 0;

function newElementsResponse() {
  const NEW_Div1 = document.createElement("div");
  const NEW_Div2 = document.createElement("div");
  const NEW_CodeText = document.createElement("code");
  const NEW_Input = document.createElement("input");

  NEW_CodeText.textContent = "Florian BYNENS ~$";

  NEW_Input.setAttribute("type", "text");
  NEW_Input.setAttribute("name", "userinput");
  NEW_Input.id = "input";
  NEW_Div1.classList.add("command_first_line");
  NEW_Div2.classList.add("command_response");

  NEW_Div1.appendChild(NEW_CodeText);
  NEW_Div1.appendChild(NEW_Input);
  NEW_COMMAND_LINE.appendChild(NEW_Div1);
  NEW_COMMAND_LINE.appendChild(NEW_Div2);
  let reference_to_input_user = document.getElementById("input");
  reference_to_input_user.focus();
  reference_to_input_user.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let inputUserValue = reference_to_input_user.value;

      // INJECTER DU TEXT DANS COMMAND RESPONSE
      let allCommandResponses = document.querySelectorAll(".command_response");

      switch (inputUserValue) {
        case "h":
        case "-h":
        case "help":
        case "--help":
          allCommandResponses[currentAnswerNumber].innerText =
            "Ceci est l'aide de mon invite, pour accéder à toutes les commandes : ";
          break;
        default:
          allCommandResponses[currentAnswerNumber].innerText =
            "Ceci n'est pas une commande valide";
      }

      // NETTOYAGE AVANT PROCHAIN INPUT
      currentAnswerNumber++;
      reference_to_input_user.id = "";
      reference_to_input_user.disabled = true;
      newElementsResponse();
    }
  });
  document.body.addEventListener("click", function (event) {
    if (event.target.targetName != "INPUT") {
      reference_to_input_user.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // if "enter" is press it does this :
  newElementsResponse();
  // recuperer l'input de l'utilisateur dans une variable

  // reference_to_input_user.addEventListener("keydown", (event) => {
  //   if (event.key === "Enter") {
  //     let inputUserValue = reference_to_input_user.value;
  //     // INJECTER DU TEXT DANS COMMAND RESPONSE
  //     let allCommandResponses = document.querySelectorAll(".command_response");
  //     allCommandResponses[currentAnswerNumber].innerText = inputUserValue;
  //     currentAnswerNumber++;

  //     reference_to_input_user.disabled = true;
  //     newElementsResponse();
  //   }
  // });
  // click on body -> redirection on input command
});
