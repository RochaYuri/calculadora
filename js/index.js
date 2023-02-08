// COletando os elementos necessários
const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

// Criei uma array para definir quais serão os caracteres aceitos no input
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "=",
  "c",
  ".",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  "%",
  " ",
];

// Evento para adicionar cada caractere no input quando for digitado ou clicado sem apagar os outros
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value; // Peguei o valor do data-value
    input.value += value; // Incrementei o valor que estava no input com o que eu cliquei
  });
});

// Evento para limpar o input quando clicar na tecla "C" (clear);
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""; // Apaguei o value do input
  input.focus(); // Coloquei o input como foco
});

// Evento que verifica se a tecla digitada no teclado faz parte do array de caracteres permtidos
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    // Se permitido
    input.value += ev.key; // O valor do imnput recebe essa nova tecla
    return; // retorna o input
  }

  if (ev.key === "Backspace") {
    // Se for pressionado o backspace
    input.value = input.value.slice(0, -1); // Apago o último número
  }

  if (ev.key === "Enter") {
    // Se for pressionado o enter
    calculate(); // Executo a função calculate
  }
});

document.getElementById("equal").addEventListener("click", calculate); // Peguei o botão de igual e passei a função de calcular

function calculate() {
  resultInput.value = "ERROR"; // Adiciona o texto de ERROR no input (PARA TRATAR ERRO)
  resultInput.classList.add("error"); // Adiciona a classe 'error' no input (PARA TRATAR ERRO)

  const result = eval(input.value); // Executa o cálculo
  resultInput.value = ""; // Zera o valor do input de resultado
  resultInput.value += result; // Adiciona o resultado do cálculo

  resultInput.classList.remove("error"); // Remove a classe 'error' (Sò será executada caso não aconteça nenhum erro anterior)
}

// Evento para copiar o resultado
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget; // Selecionei o botão que foi clicado e armazenei dentro
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success"); // Adicionei a classe 'success'
      navigator.clipboard.writeText(resultInput.value); // Enviei para o clipboard o resultado
    } else {
      button.innerText = "Copy";
      button.classList.remove("success"); // Retirei a classe 'success'
    }
  });

// Evento para a troca de tema
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--primary-color", "#26834a");
    root.style.setProperty("--font-color", "#212529");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--primary-color", "#4dff91");
    root.style.setProperty("--font-color", "#f1f5f9");
    main.dataset.theme = "dark";
  }
});
