import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteModule } from '../../front/compte/compte.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CompteModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
