import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreursRoutingModule } from './livreurs-routing.module';
import { LivreursComponent } from './livreurs/livreurs.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LivreursComponent
  ],
  imports: [
    CommonModule,
    LivreursRoutingModule,
    FormsModule,

  ]
})
export class LivreursModule {


 }
