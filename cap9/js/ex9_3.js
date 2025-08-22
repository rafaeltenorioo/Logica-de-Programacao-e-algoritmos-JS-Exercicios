function adicionarFilme() {
    const inTitulo = document.getElementById('inTitulo');
    const inGenero = document.getElementById('inGenero');

    const titulo = inTitulo.value;
    const genero = inGenero.value;

    if (titulo == '' || genero == '') {
        alert("Informe corretamente os dados");
        inTitulo.focus();
        return;
    }

    const tbFilmes = document.getElementById('tbFilmes');

    inserirLinha(tbFilmes, titulo, genero); // chamada da função que insere os filmes na tabela.

    gravarFilme(titulo, genero); // chamada da função para gravar dados em localStorage.

    inTitulo.value = '';
    inGenero.value = '';
    inTitulo.focus();
}
const btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarFilme);

function inserirLinha(tabela, titulo, genero) {
    const linha = tabela.insertRow(-1); //adiciona uma linha na tabela. (-1) indica que a linha será inserida no fim da tabela, ou seja, a cada clique o elemente vai para o fim da tabela.

    // cria colunas na linha inserida.
    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    //joga um conteúdo em cada cédula
    col1.textContent = titulo;
    col2.textContent = genero;
    col3.innerHTML = "<input type ='checkbox'>";
}

function gravarFilme(titulo, genero) {
    if (localStorage.getItem('filmesTitulo')) {
        const filmesTitulo = localStorage.getItem('filmesTitulo') + ';' + titulo;
        const filmesGenero = localStorage.getItem('filmesGenero') + ';' + genero;

        localStorage.setItem('filmesTitulo', filmesTitulo);
        localStorage.setItem('filmesGenero', filmesGenero);
    } else {
        //primeira inclusão (localStorage vazio)
        localStorage.setItem('filmesTitulo', titulo);
        localStorage.setItem('filmesGenero', genero);
    }
}

function recuperarFilmes() {
    if (localStorage.getItem('filmesTitulo')) {
        const titulos = localStorage.getItem('filmesTitulo').split(';');
        const generos = localStorage.getItem('filmesGenero').split(';');

        const tbFilmes = document.getElementById('tbFilmes');

        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(tbFilmes, titulos[i], generos[i]);
        }
    }
}
recuperarFilmes();

const ckTodos = document.getElementById('ckTodos');
//executa função anonima ao mudar o status
ckTodos.addEventListener('change', function () {
    const tbFilmes = document.getElementById('tbFilmes');

    //todos os 'inputs' filhos de tbFilmes são recuperados...
    const ckExcluir = tbFilmes.getElementsByTagName('input');

    const status = ckTodos.checked //obtém o status do checkbox 'todos' e, em seguida, aplica aos demais input's

    for (let i = 1; i < ckExcluir.length; i++) {
        ckExcluir[i].checked = status;
    }
});

function removerFilmes() {
    const tbFilmes = document.getElementById("tbFilmes");
    const ckExcluir = tbFilmes.getElementsByTagName("input");

    let temSelecionado = false;

    for (let i = 1; i < ckExcluir.length; i++) {
        if (ckExcluir[i].checked) {// se está selecionado...
            temSelecionado = true;
            break;
        }
    }

    if (!temSelecionado) {
        alert('Não há filmes selecionados para exclusão');
        return;
    }
    if (confirm('Confirma exlusão?')) {
        localStorage.removeItem('filmesTitulo');
        localStorage.removeItem('filmesGenero');

        for (let i = 0; i < ckExcluir.length; i++) {
            if (!ckExcluir[i].checked) {
                const titulo = tbFilmes.rows[i].cells[0].textContent;
                const genero = tbFilmes.rows[i].cells[1].textContent;
                gravarFilme(titulo, genero);
            }
        }

        //remove linhas selecionada
        for (i = ckExcluir.length - 1; i > 0; i--) {
            if (ckExcluir[i].checked) {
                tbFilmes.deleteRow(i); // remove a linha
            }
        }
        ckExcluir[0].checked = false; // desmarca ckTodos
    }
}
const btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener('click', removerFilmes);