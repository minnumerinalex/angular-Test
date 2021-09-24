import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `<h2>Child Component</h2>
  <div> Message from Parent is: {{childInput}}
  </div>
  <br/>
  <div>
  Send a message to parent: <input [(ngModel)]="childMsg"/><button (click)=sendChildOutput()>Send</button>
  </div>`,
  styles: [``],
})
export class ChildComponent {
  @Input() childInput: string;
  @Output() childOutput = new EventEmitter();
  childMsg = '';

  sendChildOutput() {
    this.childOutput.emit(this.childMsg);
  }
}
