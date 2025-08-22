function trocarClube() {
    const imgClube = document.getElementById("imgClube");
    const divTitulo = document.getElementById("divTitulo");

    let clube;

    if (rbBrasil.checked) {
        clube = "Brasil"
    } else if (rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    divTitulo.className = "row cores" + clube;

    imgClube.src = "img/" + clube.toLowerCase() + ".png";
    imgClube.className = "exibe";
    imgClube.alt = "Símbolo do " + clube

    localStorage.setItem("clube", clube);
}

const inputsRadio = document.getElementsByTagName("input");
for (let i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener("change", trocarClube)
    
}

function verificarClube() {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if (clube == "Brasil") {
            rbBrasil.checked = true;
        } else if (clube == "Pelotas") {
            rbPelotas.checked = true;
        } else {
            rbFarroupilha.checked = true;
        }

        trocarClube();
    }
}
verificarClube();
