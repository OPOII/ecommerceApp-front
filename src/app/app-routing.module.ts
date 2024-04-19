import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/pages/home-page/home.component';
import { ShowProductsComponent } from './pages/product/show-producto/show.products.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth-module.module').then(m=>m.AuthModuleModule),
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'products',
    loadChildren:()=>import('./pages/product/products.module').then(m=>m.ProductModule)
  },
  // {
  //   path:'auth',
  //   loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
  // },
  {
    path:'**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
