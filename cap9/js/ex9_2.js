function exibirMoedas() {
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    const divMoedas = document.getElementById('divMoedas');

    const alt1_00 = "Moedas de 1 real";
    const alt0_50 = "Moedas de 50 centavos";
    const alt0_25 = "Moedas de 25 centavos";
    const alt0_10 = "Moedas de 10 centavos";

    criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
    criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
    criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
    criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");
}
exibirMoedas();

function criarMoedas(num, pai, moeda, textoAlt, classe) {
    for (let i = 0; i <= num; i++) {
        const novaMoeda = document.createElement('img');
        novaMoeda.src = "img/" + moeda;
        novaMoeda.textoAlt = textoAlt;
        novaMoeda.className = classe;
        pai.appendChild(novaMoeda);
    }
    const br = document.createElement('br'); // cria  uma quebra de linha
    pai.appendChild(br);
}
function conferirSoma() {
    const inSoma = document.getElementById("inSoma");
    const soma = inSoma.value;

    if (soma == "0" || isNaN(soma)) {
        alert('Informe o valor da soma');
        inSoma.focus()
        return;
    }
    const divMoedas = document.getElementById('divMoedas');
    const moedas = divMoedas.getElementsByTagName('img');

    let totalMoedas = 0;

    for (let i = 0; i < moedas.length; i++) {
        if (moedas[i].className == 'moeda1_00') {
            totalMoedas += 1
        } else if (moedas[i].className == 'moeda0_50') {
            totalMoedas += 0.5;
        } else if (moedas[i].className == 'moeda0_25') {
            totalMoedas += 0.25;
        } else {
            totalMoedas += 0.1
        }
    }
    // é criada uma div, filha do divMoedas e utilizada uma caixa estilizada pelo bootstrap
    const div = document.createElement('div');
    const h3 = document.createElement('h3');

    let mensagem = "";

    if (soma == totalMoedas.toFixed(2)) {
        div.className = 'alert alert-success';
        mensagem = "Parabéns!! Voce acertou";
    } else {
        div.className = 'alert alert-danger';
        mensagem = "Ops... a resposta correta é " + totalMoedas.toFixed(2);
    }
    const texto = document.createTextNode(mensagem);
    h3.appendChild(texto);
    div.appendChild(h3);
    divMoedas.appendChild(div)

    btConferir.disabled = true // desabilita botão, resposta já foi exibida
}
const btConferir = document.getElementById('btConferir');
btConferir.addEventListener('click', conferirSoma);

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', function() {
    location.reload();
});