"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa = /** @class */ (function () {
    function Pessoa(nom, carroPre) {
        this.nome = '';
        this.carroPreferido = '';
        this.nome = nom;
        this.carroPreferido = carroPre;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPre = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.DizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
// carros
var cars = new Carro_1.Carro('Gol');
var carsB = new Carro_1.Carro('Velost');
// montar lista
var listaDecars = [cars, carsB];
var conce = new Concessionaria_1.Concessionaria('Marcilio de Noronha', listaDecars);
// console.log(conce)
// Comprar
var client = new Pessoa('igor', 'Gol');
conce.mostrarListaDeCarro().map(function (carro) {
    if (carro['modelo'] == client.dizerCarroPre()) {
        client.comprarCarro(carro);
    }
});
console.log(client.DizerCarroQueTem());
