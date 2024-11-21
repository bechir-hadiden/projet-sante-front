import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
<<<<<<< HEAD
import { FormationComponent } from './formation/formation.component';
import { SliderComponent } from './slider/slider.component';
=======
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
>>>>>>> d211a6a365f5e412bfaed1bacfee03ce34a22244

const routes: Routes = [
  {path: "login", component : LoginComponent},
  {path: "plan", component : PlanComponent},
<<<<<<< HEAD
  {path: "formation", component : FormationComponent},
  {path: "slider", component : SliderComponent}

=======
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "home", component: AccueilComponent},
  {path:"register", component:RegisterComponent},
  { path: 'verifEmail', component: VerifEmailComponent }
>>>>>>> d211a6a365f5e412bfaed1bacfee03ce34a22244


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
