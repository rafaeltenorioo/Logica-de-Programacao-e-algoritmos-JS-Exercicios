function calcularPeso() {
    const inNome = document.getElementById("inNome");
    const rdMasculino = document.getElementById("rdMasculino");
    const rdFeminino = document.getElementById("rdFeminino");
    const inAltura = document.getElementById("inAltura");
    const outResposta = document.getElementById("outResposta");

    const nome = inNome.value;
    const masculino = rdMasculino.checked;
    const feminino = rdFeminino.checked;
    const altura = Number(inAltura.value);

    //verifica se o nome foi preenchido e o sexo selecionado
    if (nome === "" || (!masculino && !feminino)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus(); //posiciona no campo de edição inNome
        return;
    }
    // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if (altura === 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }
    
    let peso;

    // se masculino (significa se masculino == true)
    if (masculino) {
        peso = 22 * Math.pow(altura, 2); //eleva ao quadrado

    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
    //recarrega a página
    location.reload();
    //joga o foco no inNome
    document.getElementById("inNome").focus();
}
const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);

// Observe que a propriedade value, antes utilizada para obter o conteúdo de um campo, é agora empregada para atribuir um conteúdo vazio para os campos do formulário.