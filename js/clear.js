export default function clear() {
  const input = document.getElementById("input");
  input.value = ""; // Apaguei o value do input
  input.focus(); // Coloquei o input como foco
}
