import { PersonService } from 'src/app/services/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './services/cep.service';
import { ListComponent } from './pages/person/list/list.component';
import { AddComponent } from './pages/person/add/add.component';
import { EditComponent } from './pages/person/edit/edit.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		AddComponent,
		EditComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		NgxSpinnerModule,
		MatTableModule,
		MatInputModule,
		HttpClientModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatSnackBarModule
		

	],
	providers: [CepService, PersonService, NgxSpinnerService],
	bootstrap: [AppComponent]
})
export class AppModule { }
