const consulta = document.getElementById("consulta");
const cracha = document.getElementById("cracha");

consulta.addEventListener("click", (e) => {
  e.preventDefault();
  cracha.hidden = !cracha.hidden;
});