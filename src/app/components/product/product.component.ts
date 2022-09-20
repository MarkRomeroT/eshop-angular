import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as ProductModel from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() product: ProductModel.Product = {
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<ProductModel.Product>();

  constructor() { }

  ngOnInit(): void {
  }


  addToCart(){
    this.addedProduct.emit(this.product);
  }

}
