// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-child01',
//   templateUrl: './child01.component.html',
//   styleUrls: ['./child01.component.css']
// })
// export class Child01Component implements OnInit {

//   constructor() { }


//   @Input() arr;
//   @Output() delIndex = new EventEmitter();
//   del(i){
//     this.delIndex.emit(i);
//   }


//   ngOnInit() {
//   }

// }

import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
//import {  } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  @Input()arr:Array<any>;
  @Output() delIndex: EventEmitter<number>=new EventEmitter<number>();
  del(i){
    this.delIndex.emit(i);
    
  }
  ngOnInit() {
  }
}

