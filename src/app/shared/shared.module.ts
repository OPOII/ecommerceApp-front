import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { CarComponent } from './page/car/car.component';
import { Error404PageComponent } from './page/error404-page/error404-page.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CarComponent,
    Error404PageComponent
  ],
  exports:[
    NavBarComponent,
    CarComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
