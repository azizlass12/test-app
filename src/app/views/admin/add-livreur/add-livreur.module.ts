import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLivreurRoutingModule } from './add-livreur-routing.module';
import { AddLivreurComponent } from './add-livreur/add-livreur.component';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddLivreurComponent
  ],
  imports: [
    CommonModule,
    AddLivreurRoutingModule,
    FormsModule
  ]
})
export class AddLivreurModule { }
