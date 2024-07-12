// cibler le body pour qu'au click il y est une redirection sur l'input
const COMMAND_BODY = document.getElementsByClassName("command_line_body");
// cibler la command_line_header
const COMMAND_HEADER = document.getElementsByClassName("command_line_header");
// cibler la div pour y générer de nouveaux éléments html
const NEW_COMMAND_LINE = document.getElementById("command_line");
// cibler tout l'invit de command
const ENTIRE_COMMAND = document.getElementById("entire_command");
// référence au dernier input.value
let currentAnswerNumber = 0;
//fermeture au click de l'icone
const CLOSE_BUTTON = document.getElementById("button_fake_close");
// init du tableau des commandes
// Init du tableau de mes experiences
const COMMAND_EXP = 0;
// historique des INPUTS
let inputHistory = [];
// index actuel
let currentInputIndex = -1;

// document.addEventListener("mousemove", function (event) {
//   console.log(event);
// });

function creatCommandList() {
  const NEW_COMMAND_LIST_UL = document.createElement("ul");

  for (let i = 0; i < 5; i++) {
    const NEW_COMMAND_LIST_LI = document.createElement("li");
    NEW_COMMAND_LIST_UL.appendChild(NEW_COMMAND_LIST_LI);
  }

  return NEW_COMMAND_LIST_UL;
}
function newElementsResponse() {
  const NEW_Div1 = document.createElement("div");
  const NEW_Div2 = document.createElement("div");
  const NEW_CodeText = document.createElement("code");
  const NEW_Input = document.createElement("input");

  NEW_CodeText.textContent = "Florian BYNENS ~$";

  NEW_Input.setAttribute("type", "text");
  NEW_Input.setAttribute("name", "userinput");
  NEW_Input.setAttribute("autocomplete", "off");
  NEW_Input.id = "input";
  NEW_Div1.classList.add("command_first_line");
  NEW_Div2.classList.add("command_response");

  NEW_Div1.appendChild(NEW_CodeText);
  NEW_Div1.appendChild(NEW_Input);
  NEW_COMMAND_LINE.appendChild(NEW_Div1);
  NEW_COMMAND_LINE.appendChild(NEW_Div2);
  let reference_to_input_user = document.getElementById("input");
  // Lancer un focus direct sur l'input à la création
  reference_to_input_user.focus();
  reference_to_input_user.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let inputUserValue = reference_to_input_user.value;

      // Ajouter l'input actuel à l'historique
      inputHistory.push(inputUserValue);
      // Réinitialiser l'index actuel
      currentInputIndex = inputHistory.length;
      // INJECTER DU TEXT DANS COMMAND RESPONSE
      let allCommandResponses = document.querySelectorAll(".command_response");
      switch (inputUserValue) {
        case "h":
        case "-h":
        case "help":
        case "-help":
        case "--help":
          allCommandResponses[currentAnswerNumber].innerText =
            "Voici les commandes : ";
          allCommandResponses[currentAnswerNumber].appendChild(
            creatCommandList()
          );
          break;
        case "clear":
          // Actualise le DOM pour clear le command_body
          window.location.reload();
          break;
        case "ls":
          allCommandResponses[currentAnswerNumber].innerText =
            "Vous êtes sur votre machine";
          break;
        default:
          allCommandResponses[currentAnswerNumber].innerText =
            "Ceci n'est pas une commande valide";
      }
      console.log(inputUserValue);
      // NETTOYAGE AVANT PROCHAIN INPUT
      currentAnswerNumber++;
      reference_to_input_user.id = "";
      reference_to_input_user.disabled = true;
      newElementsResponse();
    } else if (event.key === "ArrowUp") {
      // recuperation de l'input dans l'historique
      if (inputHistory.length > 0 && currentInputIndex > 0) {
        currentInputIndex--;
        reference_to_input_user.value = inputHistory[currentInputIndex];
      }
    }
  });

  document.body.addEventListener("click", function (event) {
    if (event.target.targetName != "INPUT") {
      reference_to_input_user.focus();
    }
  });
}
// deplacement de l'invit de command avec la souris dragAndDrop
// COMMAND_HEADER.addEventListener("mousemove", function(event){

// })
// suppression de l'invit de command au click du button
CLOSE_BUTTON.addEventListener("click", function (event) {
  event.preventDefault();
  ENTIRE_COMMAND.remove();
});

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
