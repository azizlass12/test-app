import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionsRoutingModule } from './missions-routing.module';
import { MissionsComponent } from './missions/missions.component';


@NgModule({
  declarations: [
    MissionsComponent
  ],
  imports: [
    CommonModule,
    MissionsRoutingModule
  ]
})
export class MissionsModule { }
