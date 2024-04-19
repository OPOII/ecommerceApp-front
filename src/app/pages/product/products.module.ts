import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ShowProductsComponent } from './show-producto/show.products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { BarritaComponent } from './components/barrita.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ShowProductsComponent,
    EditarProductoComponent,
    AddProductComponent,
    BarritaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
