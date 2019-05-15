interface Carro{
    marca: string,
    modelo: string,
    ano: number
};

function imprimirCarro(carro: Carro): string{
    return 'Carro: ' + carro.marca + ' Modelo: ' + carro.modelo + ' Ano: ' + carro.ano;
}

let carro: Carro;
carro.ano = 2018;
carro.marca = 'Chevrolet';
carro.modelo = 'Ônix';

imprimirCarro(carro);