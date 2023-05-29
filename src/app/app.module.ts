import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyAppComponent} from "./my-app-rxjs/my-app.component";
import {MyAppSignalComponent} from "./my-app-signal/my-app-signal.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyAppComponent,
    MyAppSignalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
