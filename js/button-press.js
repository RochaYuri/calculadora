export default function buttonPressed(charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const input = document.getElementById("input");
    const value = charKeyBtn.dataset.value; // Peguei o valor do data-value
    input.value += value; // Incrementei o valor que estava no input com o que eu cliquei
  });
}
