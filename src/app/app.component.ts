import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  longitude: any;
  latitude: any;
  data: any;
  users$: any;
  user: any;
  private subscription: Subscription;
  constructor(private dataService: AppService) {}
  ngOnInit() {
    this.getData();
    // setInterval(() => this.getData(), 4000);
    this.dataService.getUsers().subscribe((result) => (this.users$ = result));

    // ((result) => {this.user = result;
    //   console.log(this.user);}
    // );
  }
  getData() {
    this.subscription = this.dataService.getValues().subscribe((value) => {
      this.data = value;
    });
  }
  unSubcribeData() {
    this.subscription.unsubscribe();
  }

  childOutputMsg: string;
  getChildOutput(data) {
    console.log(data);
    this.childOutputMsg = data;
  }
}
