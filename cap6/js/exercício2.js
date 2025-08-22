function gerarCitação() {

    const inNome = document.getElementById("inNome");
    const outCitação = document.getElementById("outCitação");
    
    const nome = inNome.value;

    if (nome === "" || nome.indexOf(" ") === -1) {
        alert("Informe o nome completo do participante...");
        inNome.focus();
        return;
    }

    const partesDoNome = nome.split(" ");
    let citação = "";
    const tam = partesDoNome.length;

    for (let i = 0; i < tam - 1; i++) {
        citação += partesDoNome[i].charAt(0) + ".";
    }
    citação = partesDoNome[tam - 1] + ", " + citação

    outCitação.textContent = citação.toUpperCase();
       
}
const btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCitação);


