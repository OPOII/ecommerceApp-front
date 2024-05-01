import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginRequest } from '../interfaces/login.request';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService=inject(AuthService);
  private router=inject(Router);
  public myForm:FormGroup=this.fb.group({
    email:[],
    password:[]
  })

  constructor(private fb:FormBuilder){}

  onSumbit(){
    const loginRequest:LoginRequest=this.myForm.value as LoginRequest;
    this.authService.login(loginRequest).subscribe({
      next:()=>this.router.navigateByUrl('/home'),
      error:(message)=>{
        alert('Error with'+message);
      }
    });
  }
}
