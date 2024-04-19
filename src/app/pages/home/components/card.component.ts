import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public product!:Product;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
