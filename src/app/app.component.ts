import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  // quote:Quote[]=[
  //     {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //     {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //     {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //     {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //     {id:5,name:'Solve math homework',description:'Damn Math'},
  //     {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];

    // constructor(){
    //   this.quote=['Remember loneliness is designed to help you discover who you are and to stop looking outside yourself for your worth','life is fun','life is fun']
    // }
}
