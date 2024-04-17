import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public products:any[]=[{},{},{},{},{},{},{},{},{}];

    constructor(private product:ProductService){}

    ngOnInit(): void {

  }
}
