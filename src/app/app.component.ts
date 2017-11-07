import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote ={
    content:"",
    author:"",
    vote:0,
  }

  updeateinfo(event){
    console.log(event);
    if(event.status == 'up'){
      this.quotes[event.index].vote += 1;
    }else if(event.status == 'down'){
      this.quotes[event.index].vote -= 1;
    }else if(event.status == 'delete'){
      this.quotes.splice(event.index, 1);
    }
    this.quotes.sort((a:any, b:any)=>{
      return b.vote - a.vote;
    })
  }
  quotes = []
  onSubmit(){
    this.quotes.push(this.quote);
    this.quotes.sort((a:any, b:any)=>{
      return b.vote - a.vote;
    })
    this.quote ={
      content:"",
      author:"",
      vote:0,
    }
  }
}
