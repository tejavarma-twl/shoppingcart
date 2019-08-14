import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

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
  items:Observable<any[]>;
  itemname = "";
  itemprice = "";
  mydate = new Date();
  fruitsList = [
    'apple',
    'banana',
    'mango',
    'sapota',
    'pomegranate',
    'jack fruit',
    'grapes'
  ];

  searchfruit = '';


  constructor(private product: ProductsService,private fire: AngularFirestore){
    this.items = fire.collection('items').valueChanges();
  }
  getCategories(){
    return this.product.getCats();
  }

  ngOnInit(){
    // this.product.signUp();
    this.product.signIn();
  }

  addItem(){
    let itemData = { name: this.itemname, price: this.itemprice }
    const shirtsCollection = this.fire.collection('items');
    shirtsCollection.add(itemData);
  }

}
