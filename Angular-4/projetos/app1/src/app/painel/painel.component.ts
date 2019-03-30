import { Component, OnInit ,OnChanges, EventEmitter, Output} from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
import { isUndefined } from 'util';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnChanges,Output {
  public frases: Array<Frase> = FRASES
  public instrucao: string = "Traduza a frase"
  public resposta: string=''
  public rodada:number=0
  public rodadaFrase:Frase
  public progresso:number =0
  public tentativas:number =3
  public menssage:string=''
  public menssagemGreen:string = `mensagem alert-success `
  public menssagemRed:string = `mensagem  alert-danger`
  public ClassMensagem:string
  @Output() public encerrarJogo:EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
    this.MenssagemEndGame()
   }

  ngOnInit() {
    
  }
  ngOnChanges()
  {
    this.MenssagemEndGame()
   
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
      this.progresso=this.progresso+(100 / this.frases.length)
      // progressbar end
      this.rodada++ 
      if(this.progresso===100)
      {
        this.menssage='ganhou'
        this.encerrarJogo.emit('vitoria')
      }

      if(this.rodada >= this.frases.length)
      {
        this.rodada=0
      }
      this.atualizaRodada()
      if(this.progresso <100)
      {
        this.menssage ='Traduçao correta'
      }
      if(this.progresso>100)
      {
        this.progresso=0
        // this.ide=true
      }
      
     
    }else
    {
      this.menssage ='Traduçao errada'
      // lost life
      this.tentativas--
      if(this.tentativas == -1)
      {
        this.menssage ='Voce perdeu todas tentativas'
        this.encerrarJogo.emit('derrota')
        this.tentativas=0
        // this.ide=false
      }
      // console.log(this.tentativas)
    }
    
  }
  // limpar campo
      public atualizaRodada():void{
        this.rodadaFrase = this.frases[this.rodada]
        this.resposta=''
      }

      // change class front-end
      public MenssagemEndGame():void
      {
        let ide:boolean =true
        console.log(ide)
        if(ide)
        {
          this.ClassMensagem = this.menssagemGreen
        }else{
          this.ClassMensagem = this.menssagemRed
        }
      }
}
