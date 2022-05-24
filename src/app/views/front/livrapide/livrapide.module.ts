import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrapideRoutingModule } from './livrapide-routing.module';
import { LivrapideComponent } from './livrapide/livrapide.component';


@NgModule({
  declarations: [
    LivrapideComponent
  ],
  imports: [
    CommonModule,
    LivrapideRoutingModule
  ]
})
export class LivrapideModule { }
