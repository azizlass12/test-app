import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { FrontProfileLayoutComponent } from './front-profile-layout/front-profile-layout.component';
import { AadminLayoutComponent } from './aadmin-layout/aadmin-layout.component';

@NgModule({
  declarations: [
    FrontLayoutComponent,
  FrontProfileLayoutComponent,
  AadminLayoutComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class LayoutModule {}
