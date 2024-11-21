import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  {path: "login", component : LoginComponent},
  {path: "plan", component : PlanComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "home", component: AccueilComponent},
  {path:"register", component:RegisterComponent},
  { path: 'verifEmail', component: VerifEmailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
