var nome = document.querySelector("#nome");

var cor = document.querySelector("#cor");

cor.addEventListener("change", function mudarCor() {
    nome.style.color = cor.value;
});