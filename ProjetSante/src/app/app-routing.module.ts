import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { FormationComponent } from './formation/formation.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path: "login", component : LoginComponent},
  {path: "plan", component : PlanComponent},
  {path: "formation", component : FormationComponent},
  {path: "slider", component : SliderComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
