"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(end, ListaDeCarros) {
        this.endereco = '';
        this.endereco = end;
        this.ListaDeCarros = ListaDeCarros;
    }
    Concessionaria.prototype.fornecer = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarro = function () {
        return this.ListaDeCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
