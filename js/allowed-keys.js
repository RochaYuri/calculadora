export default function allowedKeys(ev) {
  const input = document.getElementById("input");

  // Criei uma array para definir quais serão os caracteres aceitos no input
  const allowedKeysArr = [
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

  ev.preventDefault();
  if (allowedKeysArr.includes(ev.key)) {
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
}
