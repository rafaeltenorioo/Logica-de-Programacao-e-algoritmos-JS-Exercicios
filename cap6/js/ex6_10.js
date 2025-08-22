const taxaMulta = 2 / 100;
const taxaJuros = 0.33 / 100;

function calcularMultaJuros() {
    const inDataVenc = document.getElementById("inDataVenc");
    const inValor = document.getElementById("inValor");
    const outMulta = document.getElementById("outMulta");
    const outJuros = document.getElementById("outJuros");
    const outTotal = document.getElementById("outTotal");

    const dataVenc = inDataVenc.value;
    const valor = Number(inValor.value);

    if (dataVenc == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados da conta corretamente");
        inDataVenc.focus();
        return;
    }

    const hoje = new Date();
    const vencimento = new Date();
    // a data vem no formato aaaa-mm-dd

    const partes = dataVenc.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1] - 1));
    vencimento.setFullYear(Number(partes[0]));

    const atraso = hoje - vencimento;

    let multa = 0;
    let juros = 0;

    if (atraso > 0) {
        // converte os milissegundos da diferença em dias
        // (1 dia = 24hor x 60min x 60seg x 1000mseg: 86400000)
        // round(): necessário para períodos envolvendo horário de verão
        const dias = Math.round(atraso/86400000);

        multa = valor*taxaMulta;
        juros = (valor*taxaJuros)*dias;
    }

    const total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);
}
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos() {
    location.reload();
}
const btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos);