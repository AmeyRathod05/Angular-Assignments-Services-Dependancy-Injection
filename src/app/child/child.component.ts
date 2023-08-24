import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

//  @Input() count! :number;
count : number = 1;
@Output() countChanged = new EventEmitter<number>();

  Increment(){
    this.count++;
    this.countChanged.emit(this.count);

  }
  Decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

}
