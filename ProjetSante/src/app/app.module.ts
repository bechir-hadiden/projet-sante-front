import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // Importez la locale française
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifEmailComponent } from './verif-email/verif-email.component'; 


registerLocaleData(localeFr , 'fr'); 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    RegisterComponent,
    VerifEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory, // Configure l'adaptateur date-fns
    }),

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule { }
