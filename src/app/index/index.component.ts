import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public myForm:FormGroup=this.fb.group({
    username:[],
    password:[]
  })

  constructor(private fb:FormBuilder){}

  onSumbit(){
    console.log("hola");
  }
}
