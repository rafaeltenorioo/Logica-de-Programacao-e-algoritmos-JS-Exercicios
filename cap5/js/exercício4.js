let noticias = [];
const inNoticia = document.getElementById("inNoticia");
const outNoticias = document.getElementById("outNoticias");

function adicionar() {

    const outNumNoticia = document.getElementById("outNumNoticias");

    const noticia = inNoticia.value;

    if (noticia == "") {
        alert("Digite uma noticia.");
        inNoticia.focus();
        return;
    }
    noticias.push(noticia); /* utilize os métodos unshift() e push(), que inserem, respectivamente, um novo elemento no início e no nal do vetor. Já a exclusão pode ser realizada com os métodos shift() e pop(), para remover o primeiro e o último elemento da lista.*/

    outNumNoticia.textContent = "Notícias Cadastradas: " + noticias.length;


    inNoticia.value = ""
    inNoticia.focus();
    console.log(noticias)
}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionar);

function listar() {
    if (noticias.length === 0) {
        alert("Não há notícias por aqui. Digite uma noticia.");
        inNoticia.focus();
        return;
    }
    const numDeNoticiasQueDesejaVisualizar = Number(prompt("Quantas notícias você deseja visualizar?"));

    if (isNaN(numDeNoticiasQueDesejaVisualizar) || numDeNoticiasQueDesejaVisualizar <= 0 || numDeNoticiasQueDesejaVisualizar > noticias.length) {
        alert(`Por favor, insira um número válido entre 1 e ${noticias.length}.`);
        return;
    }

    let copia = noticias.slice().reverse().slice(0, numDeNoticiasQueDesejaVisualizar);

    let listaCompleta = `${numDeNoticiasQueDesejaVisualizar} Últimas Notícias\n-------------------------------------------------------------------\n`;

    for (let i = 0; i < copia.length; i++) {
        const noticiaAtual = copia[i];
        const numeracao = noticias.length - i;

        listaCompleta += `${numeracao}°) ${noticiaAtual}\n`;
    }

    outNoticias.textContent = listaCompleta;
}
const btListar = document.getElementById("btListar");
btListar.addEventListener("click", listar);