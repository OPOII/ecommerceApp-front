import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../../shared/page/car/car.component';
import { HomeComponent } from './pages/home-page/home.component';
import { NavBarComponent } from '../../shared/page/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from './components/card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule
  ],exports:[
  ]


})
export class HomeModule { }
