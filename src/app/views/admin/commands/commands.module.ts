import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsComponent } from './commands/commands.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommandsComponent
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    FormsModule
  ]
})
export class CommandsModule { }
