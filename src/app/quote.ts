export class Quote {
    public showDescription: boolean;
  numberOfDislikes: any;
  numberOfLikes: any;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
      this.showDescription=false;
    }
  }
