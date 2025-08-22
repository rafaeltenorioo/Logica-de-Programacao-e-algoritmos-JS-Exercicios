function montarDica() {
    const inFruta = document.getElementById("inFruta");
    const outDica = document.getElementById("outDica");

    const fruta = inFruta.value.toUpperCase();

    if (fruta === "") {
        alert("Informe a fruta...")
        inFruta.focus();
        return;
    }
    let resposta = "";
    let estrelas = "*";
    const tam = fruta.length;

    for (let i = 0; i < tam; i++) {
        if (fruta.charAt(i) == fruta.charAt(0)) {
           resposta += fruta.charAt(0); 
        } else {
            resposta += "_";
        }
        estrelas += "*"
    }

// Observe que na repetição realizamos uma comparação para vericar se o caractere da posição da variável de controle (i) é igual ao caractere inicial da string. Se for, ele é concatenado. Caso contrário adiciona-se o underline (“_”).
    
    outDica.textContent = resposta;
    inFruta.value = estrelas;
}
const btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarDica);