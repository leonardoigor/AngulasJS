import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'types/rxjs';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { of } from 'rxjs';;
// import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  public ofertas: any
  private subjectPesquisa: Subject<string> = new Subject<string>()
  public datatesta: any
  constructor(
    private ofertasServices: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorn oferta[]
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((busca: string) => {
        if (busca.trim() == '') {
          // retorna um observable de array de oferta vazio
          return of<Oferta[]>([])
        }
        return this.ofertasServices.PesquisaOf(busca)
      }))
      .pipe(catchError((erro: any) => {
        console.log(erro)
        return of<Oferta[]>([])
      }))

    setInterval(()=>this.dates(),1000)
  }
  public pesquisa(busca: string): void {
    // console.log(`keup ${busca}`)
    this.subjectPesquisa.next(busca)
    // console.log(`keup2 ${busca}`)

  }

  public dates() {
    let date = new Date()
    this.datatesta = date
  }
  public limpaPesquisa():void{
    this.subjectPesquisa.next('')
  }
}
