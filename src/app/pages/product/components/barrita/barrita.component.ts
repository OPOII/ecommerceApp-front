import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrita',
  templateUrl: './barrita.component.html',
  styleUrls: ['./barrita.component.css']
})
export class BarritaComponent {

  constructor(private route: Router){}

  @Input()
  public tipo!:string;

  goHome(){
    this.route.navigate(['/home'])
  }

}
