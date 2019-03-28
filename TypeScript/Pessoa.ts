import {Carro} from './Carro'
import {Concessionaria} from './Concessionaria'
export class Pessoa {
    private nome: string = ''
    private carroPreferido: string = ''
    private carro: any
    constructor(nom: string, carroPre: string) {
        this.nome = nom
        this.carroPreferido = carroPre
    }
    public dizerNome(): string {
        return this.nome
    }
    public dizerCarroPre(): string {
        return this.carroPreferido
    }
    public comprarCarro(carro: any): void {
        this.carro = carro
    }
    public DizerCarroQueTem(): Carro {
        return this.carro
    }
}

// carros
let cars = new Carro('Gol')
let carsB = new Carro('Velost')

// montar lista
let listaDecars: Array<Carro> = [cars, carsB]

let conce = new Concessionaria('Marcilio de Noronha', listaDecars)
// console.log(conce)

// Comprar

let client = new Pessoa('igor', 'Gol')

conce.mostrarListaDeCarro().map((carro: Carro) => {
   if(carro['modelo'] == client.dizerCarroPre())
   {
       client.comprarCarro(carro)
   }
})
console.log(client.DizerCarroQueTem())