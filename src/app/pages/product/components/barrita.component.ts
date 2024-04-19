import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barrita',
  templateUrl: './barrita.component.html',
  styleUrls: ['./barrita.component.css']
})
export class BarritaComponent {

  @Input()
  public tipo!:string;

}
