import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ControlpanelComponent} from './controlpanel/controlpanel.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'controlPanel', component: ControlpanelComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
