import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoSevice {

    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }
    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )
        // verificar se o item ja existe
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrinho)
        }
    }
    public totalCarrinho(): number {
        let total: number = 0
        this.itens.map((item: ItemCarrinho) => total += item.valor * item.quantidade)
        return total
    }

    public AddQuantidade(item: ItemCarrinho): void {
        let carrinho = this.itens.find((iten: ItemCarrinho) => iten.id === item.id)
        if (carrinho) {
            carrinho.quantidade += 1
            if (carrinho.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(carrinho),1)
             }
        }
    }

    public MenusQuantidade(item: ItemCarrinho): void {
        let carrinho = this.itens.find((iten: ItemCarrinho) => iten.id === item.id)
        if (carrinho) {
            carrinho.quantidade -= 1
            if (carrinho.quantidade === 0) {
               this.itens.splice(this.itens.indexOf(carrinho),1)
            }
        }
    }

}
export { CarrinhoSevice }