import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm:FormGroup=this.fb.group({
    username:[],
    password:[]
  })

  constructor(private fb:FormBuilder){}

  onSumbit(){
    console.log("hola");
  }
}
