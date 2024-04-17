import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Pages/home-page/home.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth-module.module').then(m=>m.AuthModuleModule),
  },
  {
    path:'home',
    component: HomeComponent
  },
  // {
  //   path:'auth',
  //   loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
  // },
  {
    path:'**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
