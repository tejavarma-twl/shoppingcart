import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private product: ProductsService) { }

  ngOnInit() {
  }
  getProducts(){
    // console.log(this.product.getPros());
    return this.product.getPros();
  }
  addToCart(p:any){
    if(this.product.cart.hasOwnProperty(p.id)){
      this.product.cart[p.id]["quantity"] = this.product.cart[p.id]["quantity"]+1;
      this.product.cart[p.id]["total"] = this.product.cart[p.id]["quantity"]*p.price;
    }else{
      this.product.cart[p.id] = {quantity:1,name:p.name,price:p.price,total:p.price};
      this.product.cartkeys.push(p.id);
    }
  }

}
