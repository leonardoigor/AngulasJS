export class Carro {
    private modelo: string = ''
    private numeroDePortas: number = 0
    private velocidade: number = 0

    constructor(model: string) {
        this.modelo = model
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public para(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade;
    }
}