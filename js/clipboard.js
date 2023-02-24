export default function copyToClipboard(ev) {
  const resultInput = document.getElementById("result");
  const button = ev.currentTarget; // Selecionei o botão que foi clicado e armazenei dentro
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success"); // Adicionei a classe 'success'
    navigator.clipboard.writeText(resultInput.value); // Enviei para o clipboard o resultado
  } else {
    button.innerText = "Copy";
    button.classList.remove("success"); // Retirei a classe 'success'
  }
}
