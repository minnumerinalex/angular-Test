import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable, range, Subscription } from 'rxjs';
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
  innerhtml = 'Template  ';
  time = new Observable((observer) =>
    setInterval(() => observer.next(new Date().toString()), 2000)
  );
  private subscription: Subscription;
  constructor(private dataService: AppService) {}
  ngOnInit() {
    const source = range(1, 5);
    // Create observer object
    const myObserver = {
      next: (x) => console.log('Observer got a next value: ' + x),
      error: (err) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.getData();
    // setInterval(() => this.getData(), 4000);
    this.dataService
      .getUsers()
      .subscribe(
        (result) => ((this.users$ = result), (error) => console.log(error))
      );

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
