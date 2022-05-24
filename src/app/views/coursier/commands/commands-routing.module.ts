import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCommandsComponent } from './all-commands/all-commands.component';

const routes: Routes = [
  {path:'',component:AllCommandsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandsRoutingModule { }
