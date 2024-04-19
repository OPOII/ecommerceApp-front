import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/pages/home-page/home.component';
import { ShowProductsComponent } from './pages/product/show-producto/show.products.component';
import { Error404PageComponent } from './shared/page/error404-page/error404-page.component';

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
    path: '404',
    component:Error404PageComponent,
  },
  {
    path:'products',
    loadChildren:()=>import('./pages/product/products.module').then(m=>m.ProductModule)
  },
  {
    path:'**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
