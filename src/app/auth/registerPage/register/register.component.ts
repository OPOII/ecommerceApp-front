import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  public myForm:FormGroup=this.fb.group({
    firstName:[],
    secondName:[],
    lastName:[],
    phone:[],
    email:[],
    password:[],
    secondPassword:[]
  })

  constructor(private fb:FormBuilder){

  }

  onSumbit(){

  }

}
