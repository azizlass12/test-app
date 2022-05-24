import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteLivreurRoutingModule } from './compte-livreur-routing.module';
import { CompteLivreurComponent } from './compte-livreur/compte-livreur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompteLivreurComponent
  ],
  imports: [
    CommonModule,
    CompteLivreurRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompteLivreurModule { }
