import { PersonService } from './../../../services/person.service';
import { PersonModel } from './../../../models/PersonModel';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { Constants } from 'src/app/shared/constSwal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  persons: MatTableDataSource<PersonModel>
  selectedPerson: any

  columns: string[] = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions']
	loading: any

  constructor(
    private personSrv: PersonService,
    private matSnack: MatSnackBar,

  ) { }

  async ngOnInit() {
    if (!this.personSrv.get() || !JSON.parse(this.personSrv.get()).length) this.personSrv.populateTable()
    const person = JSON.parse(this.personSrv.get())
    this.persons = new MatTableDataSource(person)
   
  }

  filter(value: string) {
    this.persons.filter = value.trim().toLowerCase()
  }

  addPerson() {
		this.selectedPerson = {}
	}

	editPerson(person) {
		this.selectedPerson = { ...person }
  }

 
  
  async deletePerson(person) {

    const options: any = {
      ... Constants.confirm_swal_options, text: `Deseja realmente exluir o usuário ${person.name}`
    }

    const { value } = await Swal.fire(options)

		this.personSrv.remove(value)
    this.persons = JSON.parse(this.personSrv.get())
    
    this.matSnack.open('Usuário deletado com sucesso!', undefined, {duration: 2000}) 

	}

}
