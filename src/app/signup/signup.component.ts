import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register:FormGroup;
  constructor() { }

  ngOnInit() {
    this.register = new FormGroup({
      primary:new FormGroup({
        email:new FormControl('asd@asd.xom',[Validators.required,Validators.email]),
        password:new FormControl(null,Validators.required)
      })
      // address:new FormGroup({
      //   city:new FormControl(null,Validators.required),
      //   country:new FormControl(null,Validators.required)
      // })
    });
  }
  getData(){
    console.log(this.register);
    if(this.register.valid){
      console.log("Submitting form...")
    }else{
      console.log("Please fill details correctly!")
    }
    // console.log(this.register)
    // console.log(this.register.invalid)
    // console.log(this.register.valid)
    // console.log(this.register.get('email').valid);
    // console.log(this.register.get('email').invalid);
    // console.log(this.register.value.email)
    // console.log(this.register.value.password)
    // console.log(this.register.get('email'))

  }

}
