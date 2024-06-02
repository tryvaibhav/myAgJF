import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent ,
 children:[
  { path:'auth',loadChildren:()=>import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)}
 ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
