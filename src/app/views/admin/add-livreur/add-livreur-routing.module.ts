import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreurComponent } from './add-livreur/add-livreur.component';

const routes: Routes = [
  {path:'',component:AddLivreurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLivreurRoutingModule { }
