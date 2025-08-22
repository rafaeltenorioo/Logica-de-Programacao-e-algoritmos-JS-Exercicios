let erros = [];

let sorteado = Math.floor(Math.random()*100) + 1;

const CHANCES = 6;

function apostarNumero() {
    const inNumero = document.getElementById("inNumero");
    const numero = Number(inNumero.value);

    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido");
        inNumero.focus();
        return;
    }
    const outDica = document.getElementById("outDica");
    const outErros = document.getElementById("outErros");
    const outChances = document.getElementById("outChances");

    if (numero == sorteado) {
        
        alert("Voce acertou, Parabéns!!");

        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert("Voce já apostou o número" + numero + ". Tente outro...");
        } else {
            erros.push(numero); 
            const numErros = erros.length;
            const numChances = CHANCES - numErros;

            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over!! Número sorteado: " + sorteado;
            } else {
                let dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    inNumero.value = "";
    inNumero.focus();
}
const btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
    location.reload();
}
const btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente)