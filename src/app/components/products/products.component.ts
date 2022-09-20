import { Component, OnInit } from '@angular/core';
import * as ProductModel from '../../models/product.model'
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myCart: ProductModel.Product[] = [];
  totalCart = 0;

  products: ProductModel.Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myCart = this.storeService.getMyCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    });
  }

  onAddToShoppingCart(product: ProductModel.Product){
    this.storeService.addProduct(product);
    this.totalCart = this.storeService.getTotal();
  }
 
}
