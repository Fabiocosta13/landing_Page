const btnMenu = document.getElementById("menu");
const meuContato = document.querySelector("button");
const logoF = document.getElementById("logoBtn");

function pagHome() {
  btnMenu.addEventListener("click");
}

function btnMeuContato() {
  meuContato.addEventListener("click", () => {
    window.location.href = "contato.html";
  });
}

function btnLogo() {
  logoF.addEventListener("click", () => {
    alert("BEM VINDOS !");
  });
}
