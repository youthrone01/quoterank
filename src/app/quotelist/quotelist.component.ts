import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class QuotelistComponent implements OnInit {
  @Input() quoteinfo;
  @Output() update = new EventEmitter;

  voteup(index){
    let info = {
      status:"up",
      index: index,
    }
    this.update.emit(info);
  }

  votedown(index){
    let info = {
      status:"down",
      index: index,
    }
    this.update.emit(info);
  }

  delete(index){
    let info = {
      status:"delete",
      index: index,
    }
    this.update.emit(info);
  }

  ngOnChanges(){
    this.quoteinfo;
  }

  constructor() { }

  ngOnInit() {
  }

}
