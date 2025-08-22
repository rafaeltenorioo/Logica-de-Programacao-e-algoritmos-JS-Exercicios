function exibirVelas() {
    const inIdade = document.getElementById('inIdade');
    const outImagens = document.getElementById('outImagens');

    const idade = inIdade.value;

    if (idade <= 0 || idade > 120 || isNaN(idade)) {
        alert('Digite uma idade entre 1 e 120 anos');
        inIdade.focus();
        return;
    }

    const arrayDosNumeros = idade.split('');

    arrayDosNumeros.forEach(digito => {
        const imagem = document.createElement('img')

        imagem.src = `./img/${digito}.png`
        imagem.alt = `Dígito ${digito}`;
        imagem.classList.add('digito-imagem');
        
        outImagens.appendChild(imagem)
    });
    
}
const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', exibirVelas);