import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte/compte.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompteComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompteModule { }
