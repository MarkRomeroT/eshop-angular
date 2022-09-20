import { Injectable } from '@angular/core';
import * as ProductModel from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCart: ProductModel.Product[] = [];
  
  constructor() { }

  addProduct(product: ProductModel.Product){
    this.myCart.push(product);
  }

  getTotal(){
    return this.myCart.reduce((sum, item) => sum + item.price, 0)
  }

  getMyCart(){
    return this.myCart;
  }

}
