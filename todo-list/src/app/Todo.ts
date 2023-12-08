export class Todo{
  id: number;
  title:string;
  desc:string;
  completed : boolean;
  date : Date;

  constructor(title:string, desc:string) {
    this.id = 0;
    this.title = title;
    this.desc = desc;
    this.completed = false;
    this.date = new Date();
  }
}