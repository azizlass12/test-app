import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteLivreurComponent } from './compte-livreur/compte-livreur.component';

const routes: Routes = [
  {path:'',component:CompteLivreurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteLivreurRoutingModule { }
