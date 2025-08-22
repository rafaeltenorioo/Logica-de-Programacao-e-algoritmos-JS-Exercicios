function repetirFruta() {
    const inFruta = document.getElementById("inFruta");
    const inNumero = document.getElementById("inNumero");
    const outRepeticao = document.getElementById("outRepeticao");

    const fruta = inFruta.value;
    const numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Infome um número válido");
        inNumero.focus();
        return;
    }

    let repetição = "";

    for (let i = numero; i > 0 ; i-- ) {
        repetição = repetição + fruta + "*";

    }
    //ao ultimo valor atribuido à variável 'repetição', foi adicionado a constante 'fruta'. Ou seja, na última aparição de 'fruta' não aparecerá o simbolo '*'!! 
    repetição = repetição + fruta;
    outRepeticao.textContent = repetição;
}
const btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);