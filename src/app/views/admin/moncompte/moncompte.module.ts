import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoncompteRoutingModule } from './moncompte-routing.module';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoncompteComponent
  ],
  imports: [
    CommonModule,
    MoncompteRoutingModule,
    ReactiveFormsModule
  ]
})
export class MoncompteModule { }
