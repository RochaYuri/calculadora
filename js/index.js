import calculate from "./calculate.js";
import themeSwitcher from "./theme-switcher.js";
import copyToClipboard from "./clipboard.js";
import clear from "./clear.js";
import allowedKeys from "./allowed-keys.js";
import buttonPressed from "./button-press.js";

// Evento para adicionar cada caractere no input quando for digitado ou clicado sem apagar os outros
document.querySelectorAll(".charKey").forEach(buttonPressed);

// Evento para limpar o input quando clicar na tecla "C" (clear);
document.getElementById("clear").addEventListener("click", clear);

// Evento que verifica se a tecla digitada no teclado faz parte do array de caracteres permtidos
input.addEventListener("keydown", allowedKeys);

// Peguei o botão de igual e passei a função de calcular
document.getElementById("equal").addEventListener("click", calculate);

// Evento para copiar o resultado
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

// Evento para a troca de tema
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
