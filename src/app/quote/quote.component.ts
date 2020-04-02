import { Component, OnInit,Input} from '@angular/core';
// import { Quote } from './quote';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[]=[
    new Quote(1, 'The number of ways you can live in one lifetime is limitless.So why limit yourself? The sky is not the limit.Beyond the universe is.', 'Sheila',new Date(2020,3,14)),
    new  Quote(2,'Dont let your struggle become your identity','-Kili',new Date(2020,3,14)),
    new Quote(3,'Remember lonlinessis designedto help you discover who you are, and to stop looking outside yourself for your worth.','-Martha',new Date(2020,3,14)),
    new Quote(4,'If you want to live a happy life, tie it to a goal,not to people or things.',' - Tasha',new Date(2020,3,14)),
    new  Quote(5,'Great things never get done in a hurry','-Blare',new Date(2020,3,14)),
    new  Quote(6,'The grass is always greener when you water it',' -Clare',new Date(2020,3,14)),
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  // completeGoal(isComplete, index){
  //   if (isComplete) {
  //     this.quote.splice(index,1);
  //   }
  // }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
   quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  @Input() clickCounter: number;
  countClick(quote) {
    quote.clickCounter = quote.clickCounter ++;
  }
  countDislike(quote) {
    quote.dislikeCounter = quote.dislikeCounter ++;
  }
 
  

 



  constructor() { }

  ngOnInit(): void {
  }

}
