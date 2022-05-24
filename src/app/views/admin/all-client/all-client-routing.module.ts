import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientComponent } from './all-client/all-client.component';

const routes: Routes = [
  {path:'',component:AllClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllClientRoutingModule { }
