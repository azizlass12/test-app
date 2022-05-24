import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { AllCommandsComponent } from './all-commands/all-commands.component';


@NgModule({
  declarations: [
    AllCommandsComponent
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule
  ]
})
export class CommandsModule { }
