import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BidiModule} from '@angular/cdk/bidi';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    FlexLayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [Camera]
})
export class AppModule {}

