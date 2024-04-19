import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './show.products.component.html',
  styleUrls: ['./show.products.component.css']
})
export class ShowProductsComponent  {

  constructor(private router:Router){}



  crearProducto(){
    this.router.navigateByUrl('/products/add')
  }

  editarProducto(){

  }

  eliminarProducto(){

  }
}
