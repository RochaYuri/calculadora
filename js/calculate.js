export default function calculate() {
  const resultInput = document.getElementById("result");
  resultInput.value = "ERROR"; // Adiciona o texto de ERROR no input (PARA TRATAR ERRO)
  resultInput.classList.add("error"); // Adiciona a classe 'error' no input (PARA TRATAR ERRO)

  const result = eval(input.value); // Executa o cálculo
  resultInput.value = ""; // Zera o valor do input de resultado
  resultInput.value += result; // Adiciona o resultado do cálculo

  resultInput.classList.remove("error"); // Remove a classe 'error' (Sò será executada caso não aconteça nenhum erro anterior)
}
