import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AadminLayoutComponent } from './layout/aadmin-layout/aadmin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { FrontLivreurLayoutComponent } from './layout/front-livreur-layout/front-livreur-layout.component';
import { FrontProfileLayoutComponent } from './layout/front-profile-layout/front-profile-layout.component';
import { IntroHomeComponent } from './views/front/home/intro-home/intro-home.component';
import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';
import { GurduserGuard } from './views/srvices/guards/gurdauser.guard';
// import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';


const routes: Routes = [
  { path: '', component: FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/front/login/login.module').then(m=>m.LoginModule)},
    {path:'registre',loadChildren:()=>import('./views/front/registre/registre.module').then(m=>m.RegistreModule)},

    

  ] },
  { path: 'profile', component: FrontProfileLayoutComponent
  ,
  canActivate:[GurduserGuard]
  ,children:[
    {path:'',loadChildren:()=>import('./views/front/profile/profile.module').then(m=>m.ProfileModule)},

    {path:'profile',loadChildren:()=>import('./views/front/profile/profile.module').then(m=>m.ProfileModule)},

    {path:'livreur',loadChildren:()=>import('./views/front/livreur/livreur.module').then(m=>m.LivreurModule)},

    {path:'panier',loadChildren:()=>import('./views/front/panier/panier.module').then(m=>m.PanierModule)},
    {path:'livrapide',loadChildren:()=>import('./views/front/livrapide/livrapide.module').then(m=>m.LivrapideModule)},
    {path:'compte',loadChildren:()=>import('./views/front/compte/compte.module').then(m=>m.CompteModule)},


    
    

  ] },




  { path: 'coursier', component: FrontLivreurLayoutComponent
  // ,
  // canActivate:[GurduserGuard]
  ,children:[
    {path:'',loadChildren:()=>import('./views/coursier/home/home.module').then(m=>m.HomeModule)},

    {path:'home',loadChildren:()=>import('./views/coursier/home/home.module').then(m=>m.HomeModule)},
    

    {path:'allcommands',loadChildren:()=>import('./views/coursier/commands/commands.module').then(m=>m.CommandsModule)},
    {path:'missions',loadChildren:()=>import('./views/coursier/missions/missions.module').then(m=>m.MissionsModule)},
    {path:'comptelivreur',loadChildren:()=>import('./views/coursier/compte-livreur/compte-livreur.module').then(m=>m.CompteLivreurModule)},


    
    
    

  ] },






  { path: 'admin', component: AadminLayoutComponent ,canActivate:[GurdadminGuard], children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'allclient',loadChildren:()=>import('./views/admin/all-client/all-client.module').then(m=>m.AllClientModule)},
    {path:'livreurs',loadChildren:()=>import('./views/admin/livreurs/livreurs.module').then(m=>m.LivreursModule)},
    {path:'commands',loadChildren:()=>import('./views/admin/commands/commands.module').then(m=>m.CommandsModule)},
    {path:'offres',loadChildren:()=>import('./views/admin/offres/offres.module').then(m=>m.OffresModule)},
    {path:'moncompte',loadChildren:()=>import('./views/admin/moncompte/moncompte.module').then(m=>m.MoncompteModule)},
    {path:'addLivreur',loadChildren:()=>import('./views/admin/add-livreur/add-livreur.module').then(m=>m.AddLivreurModule)},
    {path:'client',loadChildren:()=>import('./views/admin/client/client.module').then(m=>m.ClientModule)},




  ]},
 
  {path:'intro',component:IntroHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
