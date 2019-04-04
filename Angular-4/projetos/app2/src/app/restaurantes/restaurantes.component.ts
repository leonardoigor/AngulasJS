import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Oferta[]
  

  constructor(private ofertasservice: OfertasService) { }

  ngOnInit() {
    this.ofertasservice.getOfertasPoCategorias('restaurante')
      .then((ofertas: Oferta[]) => {
        // console.log(ofertas)
        this.ofertas = ofertas
      })
      
  }
  
  
}
