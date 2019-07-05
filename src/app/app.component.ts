import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote []= [
    {id:1, name:'Dont let what you can not interfer with interfer with you'},
    {id:2, name:'Succesful and unsuccesful dont vary in ability they vary in their desires to do things'},
    {id:3, name:'Strive for progress not perfection'},
    {id:4, name:'Theres no shortcuts to any place worth going'}
  ];
}