import { Pedido } from './shared/pedido.model';

export class OrdemCompraService{
    public efetivarcompra(pedido:Pedido):void{
        console.log(pedido)
    }
}