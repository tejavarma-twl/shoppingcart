import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
    imgsrc      = "https://www.gr8bunch.com/wp-content/uploads/2018/11/dummy-product-600x400.png";
    dataBaseUrl = "https://test-project-9cbbd.firebaseio.com/";
    signupurl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBNWK7kdy-NeRlz_-tNNyuBXUyxCyzDe7o";
    signinUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBNWK7kdy-NeRlz_-tNNyuBXUyxCyzDe7o";

    categories  = [
        {cat_id:"c1",cat_name:"Watches",cat_colour:"blue"},
        {cat_id:"c2",cat_name:"Shoes",cat_colour:"black"},
        {cat_id:"c3",cat_name:"Perfumes",cat_colour:"white"},
        {cat_id:"c4",cat_name:"Mobiles",cat_colour:"green"},
    ]
    products = {
        perfumes:[
            {id:123,name:"Ferrari",price:6500,brand:"Ferrari",category:"c3",image:this.imgsrc},
            {id:124,name:"Cool waters",price:3500,brand:"David off",category:"c3",image:this.imgsrc}
        ],
        watches:[{id:125,name:"Diesel",price:1000,brand:"Diesel",category:"c1",image:this.imgsrc}],
        mobiles:[{id:126,name:"oneplus 7",price:70000,brand:"oneplus",category:"c4",image:this.imgsrc}],
        shoes:[
            {id:127,name:"Nike",price:4800,brand:"Nike",category:"c2",image:this.imgsrc},
            {id:128,name:"Puma",price:7500,brand:"Nike",category:"c2",image:this.imgsrc}
        ]
    }
    allproducts = [];
    cartkeys = [];
    cart = {};

    constructor(private http:HttpClient){

    }
    getCats(){
        return this.categories;
    }
    getPros(){
        this.allproducts = [];
        for(let x in this.products){
            for(let y in this.products[x]){
                // console.log(this.products[x][y]);
                this.allproducts.push(this.products[x][y])
            }
            // console.log(this.products[x]);
        }
         return this.allproducts;
    }

    getMyPros(cat: string){
        // console.log(cat);
        // console.log(this.products[cat]);
        return this.products[cat];
    }

    addMyProducts(p){
        return this.http.post(this.dataBaseUrl+'products.json',p)
    }

    getMyproducts(){
        return this.http.get(this.dataBaseUrl+'products.json');
    }

    signUp(){
        this.http.post(this.signupurl,
            {
                email:'kvarma063@gmail.com',
                password:'testing123',
                returnSecureToken:true
            }).subscribe(
                res => {
                    console.log(res);
                }
            )
    }

    signIn(){
        this.http.post(this.signinUrl,
            {
                email:'kvarma063@gmail.om',
                password:'testing123',
                returnSecureToken:true
            }).subscribe(
                res => {
                    console.log(res);
                }
            )
    }
    
}