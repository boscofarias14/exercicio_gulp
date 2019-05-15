;
function imprimirCarro(carro) {
    return 'Carro: ' + carro.marca + ' Modelo: ' + carro.modelo + ' Ano: ' + carro.ano;
}
var carro;
carro.ano = 2018;
carro.marca = 'Chevrolet';
carro.modelo = 'Ônix';
imprimirCarro(carro);
;
function calcularIdade(Pessoa) {
    return (2019 - Pessoa.nascimento);
}
function imprimirFicha(Pessoa) {
    return "Nome: " + Pessoa.nome + " Sexo: " + Pessoa.sexo + " Idade: " + calcularIdade(Pessoa);
}
var Pessoa;
Pessoa.nome = "João";
Pessoa.nascimento = 1995;
Pessoa.sexo = "Masculino";
imprimirFicha(Pessoa);
