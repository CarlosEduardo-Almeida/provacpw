/*const search = window.location.search;
const params = new URLSearchParams(search);

const valor = params.get("valor");
console.log(valor)

const taxa = params.get("taxa");
console.log(taxa)

const parcelas = params.get("parcelas");
console.log(parcelas)

//valorReal = valorEmprestado * (1 + (taxaJuros/100) * nroParcelas)
const valorReal = valor * (1 + (taxa/100) * parcelas);
const valorParcela = valorReal / parcelas

var valorDoEmprestimo = document.getElementById('valorDoEmprestimo')
var valorDeCadaParcela = document.getElementById('valorDeCadaParcela')

valorDoEmprestimo.innerText= valorReal
valorDeCadaParcela.innerText = valorParcela*/

const search = window.location.search;
const params = new URLSearchParams(search);

const valor = parseFloat(params.get("valor"));
const taxa = parseFloat(params.get("taxa"));
const parcelas = parseInt(params.get("parcelas"));

const valorReal = valor * (1 + (taxa / 100) * parcelas);
const valorParcela = valorReal / parcelas;

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '').trim();
}

document.getElementById('valorDoEmprestimo').innerText = formatCurrency(valorReal);
document.getElementById('valorDeCadaParcela').innerText = formatCurrency(valorParcela);



