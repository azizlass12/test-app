import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';

import { FrontProfileLayoutComponent } from './front-profile-layout/front-profile-layout.component';
import { FrontLivreurLayoutComponent } from './front-livreur-layout/front-livreur-layout.component';
import { AadminLayoutComponent } from './aadmin-layout/aadmin-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FrontLayoutComponent,
    FrontLivreurLayoutComponent,
    FrontProfileLayoutComponent,
    AadminLayoutComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class LayoutModule {}
