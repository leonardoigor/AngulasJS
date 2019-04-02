import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
// import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {
	constructor(private http: Http) {

	}
	// private url_api = "http://localhost:3000/ofertas"

	public getOfertas(): Promise<Oferta[]> {
		// efetuar uma requisiçao http
		return this.http.get(`${URL_API}/ofertas?destaque=true`)
			.toPromise()
			.then((resposta: any) => resposta.json())
		// retornar um promise oferta[]
	}

	public getOfertasPoCategorias(categoria: string): Promise<Oferta[]> {
		return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
		.toPromise()
		.then((resposta:any) =>resposta.json())
	}
	public getOfertaPoId(id:number):Promise<Oferta[]>
	{
		return this.http.get(`${URL_API}/ofertas?id=${id}`)
		.toPromise()
		.then((resposta:any) => resposta.json().shift())
	}
	public getComoUsarPorId(id:number):Promise<string>{
		return this.http.get(`${URL_API}/como-usar?id=${id}`)
		.toPromise()
		.then((resposta:any)=> resposta.json().shift().descricao)
	}
	public getOndeFicaPorId(id:number):Promise<string>{
		return this.http.get(`${URL_API}/onde-fica?id=${id}`)
		.toPromise()
		.then((resposta:any)=> resposta.json().shift().descricao)
	}










	// public getOfertas2(): Promise<Oferta[]> {
	// 	return new Promise((revolve, reject) => {
	// 		// algum tipo de processamento, que ao finalizar, chama a funçao no escopro
	// 		// console.log(`Passou?`)  
	// 		let ok = true
	// 		if (ok) {
	// 			setTimeout(()=>revolve(this.ofertas),3000)
	// 			// revolve(this.ofertas)
	// 		} else {
	// 			reject({ codico_error: 404, mensagem_erro: 'Servidor nao encontrado' })
	// 		}
	// 	})
	// 	.then((ofertas:Oferta[])=>
	// 	{console.log(1)
	// 		return ofertas
	// 	})
	// 	.then(( ofertas:Oferta[]) =>
	// 	{console.log(2)
	// 		return new Promise((resolve2,reject2) =>{
	// 			setTimeout(()=>{ resolve2( ofertas) },3000)
	// 		})
	// 	})
	// 	.then((ofertas:Oferta[])=>{
	// 		console.log(3)
	// 		return ofertas
	// 	})
	// }
}