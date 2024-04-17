import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './Pages/car/car.component';
import { HomeComponent } from './Pages/home-page/home.component';
import { NavBarComponent } from './Pages/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from './components/card.component';



@NgModule({
  declarations: [
    CarComponent,
    HomeComponent,
    NavBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],


})
export class HomeModule { }
