export class Quote {
    public showDescription: boolean;
  numberOfDislikes: any;
  numberOfLikes: any;
  clickCounter: number;
  dislikeCounter: number;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
      this.showDescription=false;
    }
  }
