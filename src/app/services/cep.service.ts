import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner'


@Injectable({
	providedIn: 'root'
})
export class CepService {
	
	constructor(
		public http: HttpClient,
		private spinner: NgxSpinnerService,
		) { }
		
	getCep(cep) {
		return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
		
	}
}
