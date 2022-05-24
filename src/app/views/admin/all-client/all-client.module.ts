import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllClientRoutingModule } from './all-client-routing.module';
import { AllClientComponent } from './all-client/all-client.component';


@NgModule({
  declarations: [
    AllClientComponent
  ],
  imports: [
    CommonModule,
    AllClientRoutingModule
  ]
})
export class AllClientModule { }
