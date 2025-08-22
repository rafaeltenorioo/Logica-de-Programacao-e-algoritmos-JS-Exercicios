function exibirNomes() {
    const inNome = document.getElementById('inNome');
    const outNomes = document.getElementById('outNomes');

    const nome = inNome.value;

    if (nome == '' || nome.indexOf(' ') == -1) {
        alert('Informe um nome completo');
        inNome.focus();
        return;
    }

    const partesDoNome = nome.split(' ');
    console.log(partesDoNome)

    partesDoNome.forEach(element => {
        const novoH3 = document.createElement('h3');
        novoH3.textContent = element;

        novoH3.style.color = gerarCorAleatoria();

        outNomes.appendChild(novoH3)

    });
}
const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', exibirNomes);

function gerarCorAleatoria() {
    const letrasHex = '0123456789ABCDEF'; //contém todos os caracteres possíveis em um códdigo hexadecimal

    let cor = '#'

    //execute 6 vezes, para gerar 6 caracteres...
    //depois gera um número decimal entre 0 e 16...
    //depois arredonda esse numero para baixo, gerando numeros entre 0 e 15...
    //depois seleciona um caractere aleatório de letraHex
    //e esses caracteres são concatenados para formar a cor!! 
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random()*16)];     
    }
    return cor;
}