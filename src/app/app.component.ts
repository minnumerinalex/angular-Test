import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 // parentMsg:string='Message from parent';
 childOutputMsg:string;
 getChildOutput(data){
  console.log(data);
  this.childOutputMsg=data;
 }
}
