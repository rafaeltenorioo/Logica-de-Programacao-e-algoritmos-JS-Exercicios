let listaDeNumeros = [];

function adicionarNumero() {
    const inNumero = document.getElementById("inNumero");
    const outNumeros = document.getElementById("outNumeros");
    const outInfo = document.getElementById("outInfo");

    const numero = Number(inNumero.value);

    if (numero === 0 || isNaN(numero) || listaDeNumeros.indexOf(numero) >= 0) {
        //se indexOf for > 0, o numero existe na lista; se for -1 é inexistente.
        alert("Informe um número válida ou inexistente na lista");
        inNumero.focus();
        return;
    }

    listaDeNumeros.push(numero);

    outNumeros.textContent = "Números: " + listaDeNumeros.join(", ") //transforma em uma string com os numeros separados por ','.

    inNumero.value = "";
    inNumero.focus();

}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);

function verificarOrdem() {
    if (listaDeNumeros.length === 0) {
        alert("Não há número na lista");
        inNumero.focus();
        return;

    }
    let info = true;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] > listaDeNumeros[i + 1]) {
            info = false;
            break
        }
        
    }
    document.getElementById("outInfo").textContent = info ? "Ok! Número estão em ordem crescente" : "Atenção... Números não estão em ordem crescente";
}
const btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);