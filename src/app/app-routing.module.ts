import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UndefinedComponent } from './undefined/undefined.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent },
  {path:'movies-details/:id' , component:MoviesDetailsComponent },
  {path:'login' , component:LoginComponent },
  {path:'logout' , component:LoginComponent },
  {path:'register' , component:RegisterComponent },
  {path:'**' , component:UndefinedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
