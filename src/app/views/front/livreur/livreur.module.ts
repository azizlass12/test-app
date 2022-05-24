import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivreurRoutingModule } from './livreur-routing.module';
import { LivreurComponent } from './livreur/livreur.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LivreurComponent
  ],
  imports: [
    CommonModule,
    LivreurRoutingModule,
    HttpClientModule,
 
  ]
})
export class LivreurModule { }
