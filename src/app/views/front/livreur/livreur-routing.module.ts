import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreurComponent } from './livreur/livreur.component';

const routes: Routes = [
  {path:'',component:LivreurComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreurRoutingModule { }
