import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { RegisterUser } from '../interfaces/register.interface';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private authService=inject(AuthService);
  private fb=inject(FormBuilder);
  public myForm:FormGroup=this.fb.group({
    firstName:[],
    secondName:[],
    lastName:[],
    phone:[],
    email:[],
    password:[],
    password2:[]
  })


  onSumbit(){
    const registerUser:RegisterUser=this.myForm.value as RegisterUser;
    registerUser.username=registerUser.firstName+registerUser.lastName;
    this.authService.register(registerUser)
  }

}
