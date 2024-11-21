import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { CommonModule, registerLocaleData } from '@angular/common';
<<<<<<< HEAD
import localeFr from '@angular/common/locales/fr'; 
import { FormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PlanComponent } from './plan/plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'; 
=======
import localeFr from '@angular/common/locales/fr'; // Importez la locale française
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifEmailComponent } from './verif-email/verif-email.component'; 
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NavbarComponent } from './navbar/navbar.component';

>>>>>>> d211a6a365f5e412bfaed1bacfee03ce34a22244

registerLocaleData(localeFr , 'fr'); 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    PlanComponent
=======
    AccueilComponent,
    RegisterComponent,
    VerifEmailComponent,
    QuestionnaireComponent,
    NavbarComponent
>>>>>>> d211a6a365f5e412bfaed1bacfee03ce34a22244
    
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
    BrowserAnimationsModule ,
    
    


    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule { }
