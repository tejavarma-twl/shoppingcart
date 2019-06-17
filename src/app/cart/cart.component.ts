import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart = {}
cartkeys = [];
  constructor(private product: ProductsService) { }

  ngOnInit() {
    this.cart = this.product.cart;
    this.cartkeys = this.product.cartkeys
  }

}
