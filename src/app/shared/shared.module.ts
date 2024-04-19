import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { CarComponent } from './page/car/car.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CarComponent
  ],
  exports:[
    NavBarComponent,
    CarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
