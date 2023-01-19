import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AadminLayoutComponent } from './layout/aadmin-layout/aadmin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { FrontProfileLayoutComponent } from './layout/front-profile-layout/front-profile-layout.component';
import { IntroHomeComponent } from './views/front/home/intro-home/intro-home.component';

// import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';


const routes: Routes = [
  { path: '', component: FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/front/login/login.module').then(m=>m.LoginModule)},
    {path:'registre',loadChildren:()=>import('./views/front/registre/registre.module').then(m=>m.RegistreModule)},

    

  ] },
  { path: 'profile', component: FrontProfileLayoutComponent,children:[
    
    
    
    

  ] },



  { path: 'admin', component: AadminLayoutComponent , children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  




  ]},
 
  {path:'intro',component:IntroHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
