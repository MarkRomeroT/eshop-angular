import { Component, OnInit } from '@angular/core';
import * as ProductModel from '../../models/product.model'
import { StoreService } from '../../services/store.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myCart: ProductModel.Product[] = [];
  totalCart = 0;

  products: ProductModel.Product[] = [
    {
      id: 1,
      name: 'Automobil de juguete',
      price: 100,
      image: 'https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1906/lightfieldstudios190605587/125406128-coche-de-juguete-rojo-sobre-monedas-de-metal-sobre-la-superficie-de-madera-aislado-en-gris.jpg?ver=6'
  },
  {
      id: 2,
      name: 'Muñeca de trapo',
      price: 180,
      image: 'https://http2.mlstatic.com/D_NQ_NP_657333-MCO31124705005_062019-O.jpg'
  },
  {
      id: 3,
      name: 'Pelota de futbol',
      price: 120,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoV9Wi5gI31pWD9k-H7nYtS06UXKBycQbNr72sUYgpZ7_x8XFfZLdRVrK_IboEFbiLy8&usqp=CAU'
  },
  {
    id: 4,
    name: 'No Disponible',
    price: 1200,
    image: ''
  },
  {
    id: 5,
    name: 'PC gamer',
    price: 1200,
    image: 'https://tecnobits.net/wp-content/uploads/2020/02/pc-gamer-extrema-2020.jpg'
  }
  ];

  constructor(
    private storeService: StoreService
  ){
    this.myCart = this.storeService.getMyCart();
  }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: ProductModel.Product){
    this.storeService.addProduct(product);
    this.totalCart = this.storeService.getTotal();
  }
 
}
