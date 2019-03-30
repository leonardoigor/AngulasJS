import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
import { isUndefined } from 'util';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Array<Frase> = FRASES
  public instrucao: string = "Traduza a frase"
  public resposta: string=''
  public rodada:number=0
  public rodadaFrase:Frase
  public progresso:number =0

  constructor() {
    this.atualizaRodada()
   }

  ngOnInit() {
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

  }

  public verificarResposta():void
  {
    // vericar acertos
    if(this.rodadaFrase.frasePt == this.resposta.toLowerCase())
    {
      // progesssbar start
      this.progresso=this.progresso+25
      // progressbar end
      this.rodada++ 
      if(this.rodada >= this.frases.length)
      {
        this.rodada=0
      }
      this.atualizaRodada()
      alert('Traduçao correta')
      if(this.progresso>100)
      {
        this.progresso=0
      }
      
     
    }else
    {
      alert('Traduçao errada')
    }
    
  }
  // limpar campo
      public atualizaRodada():void{
        this.rodadaFrase = this.frases[this.rodada]
        this.resposta=''
      }
}
