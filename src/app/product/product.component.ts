import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private looktime: Subscription;
  constructor(private product: ProductsService) { }
  ngOnInit() {
    // let a = 1;
    // setInterval(function(){ console.log(a++) },1000);
    // this.looktime = interval(1000).subscribe((d) => { 
    //   console.log(d); 
    // });
    // const testob = new Observable( observer => {
    //   let a = 1;
    //   setInterval( function(){
    //     observer.next(a)
    //     a++;
    //   },1000)
    // });
    // this.looktime = testob.subscribe((d) => { 
    //   console.log(d); 
    // });
  }
  ngOnDestroy(){
    // this.looktime.unsubscribe();
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
