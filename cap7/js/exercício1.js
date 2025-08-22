function categorizarAtleta() {
    const inNome = document.getElementById("inNome");
    const inIdade = document.getElementById("inIdade");
    const outResposta = document.getElementById("outResposta");

    const nome = inNome.value;
    const idade = Number(inIdade.value);

    if (nome == "" || idade == 0 || isNaN(idade)) {
        alert("Informe os dados corretamente");
        inNome.focus();
        return;
    }
    let sublinhado = gerarTraços(nome);
    let categoria = verCategoria(idade);

    outResposta.textContent = nome + "\n" + sublinhado + "\nCategoria: " + categoria
}
const btCategorizar = document.getElementById("btCategorizar");
btCategorizar.addEventListener("click", categorizarAtleta);

function gerarTraços(nome) {
    const tam = nome.length;
    let traços = "";

    for (let i = 0; i < tam; i++) {
        if (nome.charAt(i) != " ") {
            traços += "-";
        } else {
            traços += " ";
        }
    }
    return traços
}
function verCategoria(idade) {
    let cat;
    if (idade <= 12) {
        cat = "Infantil"
    } else if (idade <= 18) {
        cat = "Juvenil"
    } else {
        cat = "Adulto"
    }
    return cat;
}