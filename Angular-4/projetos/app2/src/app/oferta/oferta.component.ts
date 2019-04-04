import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {


  public oferta: Oferta[]
  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasService) {
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.ofertasServices.getOfertaPoId(params.id)
      .then((ofertas: Oferta[]) => this.oferta = ofertas)
      
    })
  }
}

