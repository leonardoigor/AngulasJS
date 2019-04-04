import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  // pedido
  public pedido: Pedido = new Pedido('', '', '', '')

  // controles de validaçao dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean
  // estados primitivos dos campos (pristine)
  public enderecoEstadoPrimivo: boolean = true
  public numeroEstadoPrimivo: boolean = true
  public complementoEstadoPrimivo: boolean = true
  public formaPagamentoEstadoPrimivo: boolean = true

  //  controlar botao
  public formEstado: string = 'desabled'


  constructor(private ordemCompra: OrdemCompraService) { }

  ngOnInit() {
    // this.ordemCompra.efetivarcompra()
  }

  public attEndereco(end: string): void {
    this.endereco = end
    // console.log(this.endereco)
    this.enderecoEstadoPrimivo = false
    // se string for maior a 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilitaForm()
  }

  public attNumero(num: string): void {
    this.numero = num
    this.numeroEstadoPrimivo = false
    // console.log(this.numero)
    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }
  public attComplemento(compl: string): void {
    this.complemento = compl
    this.complementoEstadoPrimivo = false
    // console.log(this.complemento)
    if (this.complemento.length > 0) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }
    this.habilitaForm()
  }
  public attFormPagamento(paga: string): void {
    this.formaPagamento = paga
    this.formaPagamentoEstadoPrimivo = false
    // console.log(this.formaPagamento)
    if (this.formaPagamento == '') {
      this.formaPagamentoValido = false
    }
    else {
      this.formaPagamentoValido = true
    }
    this.habilitaForm()
  }
  public habilitaForm(): void {
    if (this.enderecoValido == true && this.numeroValido == true && this.formaPagamentoValido == true) {
      this.formEstado = ''
    }
    else {
      this.formEstado = 'disabled'
    }
  }
  public comfirmaCompra(): void {
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento
    this.ordemCompra.efetivarcompra(this.pedido)
  }
}
