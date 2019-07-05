import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Dont let what you can not interfer with interfer with you', 'Succesful and unsuccesful dont vary in ability they vary in their desires to to things', 'Strive for progress not perfection','Theres no shortcuts to any place worth going']
  } 
}