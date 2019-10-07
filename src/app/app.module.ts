import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  MDBBootstrapModule.forRoot(),
  FlexLayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [Camera],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule {}