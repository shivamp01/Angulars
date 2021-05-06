import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarrierComponent } from './carrier/carrier.component';
import { CodeComponent } from './code/code.component';
import { RouteComponent } from './route/route.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrierComponent,
    CodeComponent,
    RouteComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
