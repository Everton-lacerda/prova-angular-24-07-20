import { PersonModel } from './../../../models/PersonModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { PersonService } from 'src/app/services/person.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  selectedPerson: PersonModel = new PersonModel();
  loading: boolean;

  persons: MatTableDataSource<PersonModel>
  columns: string[] = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions']

  constructor(
    public cep: CepService,
	private personSrv: PersonService,
	private matSnack: MatSnackBar,
	private router: Router
	) { }

  ngOnInit() {
  }

  changeCep(event) {
		var cep = event.target.value
		if (cep.length == 8) {
			this.loading = true
			this.cep.getCep(cep).then((apiResponse: any) => {
				if (apiResponse.erro) {
					this.matSnack.open('Cep não encontrado', undefined, {duration: 2000})
				} else {
					this.selectedPerson = {
						...this.selectedPerson,
						cep: apiResponse.cep.replace('-', ''),
						state: apiResponse.uf,
						city: apiResponse.localidade,
						street: apiResponse.logradouro
					}
				}
			}).catch(error => {
				this.matSnack.open('Erro ao buscar o cep', undefined, {duration: 2000})
				console.error(error)
			}).finally(() => this.loading = false)
		}
	}

	cancel() {
		this.selectedPerson = null
	}

	submit(person) {
		var error = false
		this.columns.forEach(key => {
			if (key != 'actions' && !person[key]) {
				error = true
			}
		})

		if (error) {
			this.matSnack.open('Erro! Preencha todos os campos!', undefined, {duration: 2000}) 
		} else {
			this.personSrv.save(person)
			this.persons = JSON.parse(this.personSrv.get())
			this.selectedPerson = null
			this.matSnack.open('Usuário cadastrado com sucesso!', undefined, {duration: 2000}) 
			this.router.navigateByUrl('/home')

		}
	}

}
