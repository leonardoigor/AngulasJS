import {Carro} from './Carro'
export class Concessionaria {
    private endereco: string = ''
    private ListaDeCarros: Array<Carro>

    constructor(end: string, ListaDeCarros: Array<Carro>) {
        this.endereco = end
        this.ListaDeCarros = ListaDeCarros
    }

    public fornecer(): string {
        return this.endereco
    }
    public mostrarListaDeCarro(): Array<Carro> {
        return this.ListaDeCarros
    }

}