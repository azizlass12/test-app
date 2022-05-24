import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrapideComponent } from './livrapide/livrapide.component';

const routes: Routes = [
  {path:'',component:LivrapideComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrapideRoutingModule { }
