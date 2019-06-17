import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  category = "";
  constructor(private routeData: ActivatedRoute, private serv: ProductsService) { }

  ngOnInit() {
    this.category = this.routeData.snapshot.params['cat'];
    // console.log(this.routeData.snapshot.params['cat']);
  }
  getMycategories(){
    // console.log(this.category);
    // console.log("test");
    // console.log(this.serv.getMyPros(this.category));
    return this.serv.getMyPros(this.category);
  }

}
