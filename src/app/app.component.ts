import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ProductsService]
})
export class AppComponent implements OnInit {
  title = 'shopping';
  cart = {};
  cartkeys = [];
  constructor(private product: ProductsService){
  }
  getCategories(){
    return this.product.getCats();
  }
  
  ngOnInit(){
    // this.product.signUp();
    this.product.signIn();
  }

}
