interface Humano{
    nome: string,
    sexo: string,
    nascimento: number
};

function calcularIdade(Pessoa: Humano): number{
    return (2019 - Pessoa.nascimento);
}

function imprimirFicha(Pessoa: Humano) : string{
    return "Nome: " + Pessoa.nome + " Sexo: " + Pessoa.sexo + " Idade: " + calcularIdade(Pessoa);
}
let Pessoa: Humano;
Pessoa.nome = "João";
Pessoa.nascimento = 1995;
Pessoa.sexo = "Masculino";

imprimirFicha(Pessoa);