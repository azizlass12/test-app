import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoncompteComponent } from './moncompte/moncompte.component';

const routes: Routes = [
  {path:'',component:MoncompteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoncompteRoutingModule { }
