function mostrarDados() {
    const inModelo = document.getElementById("inModelo");
    const inAno = document.getElementById("inAno");
    const inPreço = document.getElementById("inPreço");
    const outClassif = document.getElementById("outClassif");
    const outPreçoVenda = document.getElementById("outPreçoVenda");

    const modelo = inModelo.value;
    const ano = Number(inAno.value);
    const preço = Number(inPreço.value);

    if (modelo == "" || ano == 0 || preço == 0 || isNaN(ano) || isNaN(preço)) {
        alert("Informe od dados corretamente");
        inModelo.focus();
        return;
    }
    
    const classificação = classificarVeiculo(ano);
    const preçoVenda = classificarVenda(preço, classificação);

    outClassif.textContent = modelo + " - " + classificação;
    outPreçoVenda.textContent = "Preço de Venda R$: " + preçoVenda.toFixed(2);

}
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);

function classificarVeiculo(ano) {
    const anoAtual = new Date().getFullYear();
    let classif;

    if (ano == anoAtual) {
        classif = "Novo"
    } else if(ano == anoAtual - 1 || ano == anoAtual - 2){
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }
    return classif;
}

function classificarVenda(valor, status) {
    const prVenda = (status == "Novo") ? valor*1.08 : valor*1.1;
    return prVenda;
}