import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth-service.service';
import { ItemSelector } from '../../interface/itemSelector.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  private router=inject(Router);
  private authService=inject(AuthService);
  public user=computed(()=>this.authService.currentUser());
  public isUserLoggin=signal<boolean>(false);
  public items:ItemSelector[]=[
    {
      text:'Information',
      url: ''
    },
    {
      text:'Settings',
      url:''
    },
    {
      text:'LogOut',
      url:'LogOut'
    }
  ]
  constructor(){}
  ngOnInit(): void {
    if(this.user()!==null){
      this.isUserLoggin.set(true);
    }
  }

  goToLogin(){
    this.router.navigate(['/auth/login']);
  }

  goTo(url:string){
    if(url==='LogOut'){
      this.authService.logOut();
      this.isUserLoggin.set(false);
    }else{
      this.router.navigate([url]);
    }
  }

}
