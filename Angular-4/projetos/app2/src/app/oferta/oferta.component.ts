import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import {CarrinhoSevice} from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {


  public oferta 
  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasService,
    private carrinhoService: CarrinhoSevice
    ) {
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    // console.log(this.carrinhoService.exibirItens())

    this.getItens()
  }

  public getItens(){
    this.route.params.subscribe((params:Params)=>{

      this.ofertasServices.getOfertaPoId(params.id)
      .then((ofertas: Oferta[]) => this.oferta = ofertas)
      
    })
  }
  public AddItensCarrinho():void{
    this.carrinhoService.incluirItem(this.oferta)
  }

}

