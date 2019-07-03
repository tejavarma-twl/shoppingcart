import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  addproduct:FormGroup;
  productsList = [];
  constructor(private product: ProductsService) { }

  ngOnInit() {
    this.addproduct = new FormGroup({
      primary:new FormGroup({
        name:new FormControl(null,[Validators.required]),
        price:new FormControl(null,Validators.required)
      })
    });
    this.showProducts();
  }
  getData(){
    this.product.addMyProducts(this.addproduct.value.primary).subscribe(ack => {
      this.showProducts();
    });
  }
  showProducts(){
    this.product.getMyproducts().subscribe(
        res => {
            let temp = []
            for(let k in res){
              // console.log(res[k]);
              temp.push(res[k])
            }
            this.productsList = temp;
        }
    );
  }
}
