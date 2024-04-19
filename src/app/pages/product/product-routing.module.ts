import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductsComponent } from './show-producto/show.products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { AppComponent } from 'src/app/app.component';

const routes:Routes=[
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: '',
        component: ShowProductsComponent
      },
      {
        path: 'edit',
        component: EditarProductoComponent
      },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
