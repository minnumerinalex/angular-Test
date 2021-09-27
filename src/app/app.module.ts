import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http'; //import the HttpClientModule

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
