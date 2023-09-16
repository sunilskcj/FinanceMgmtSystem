import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FinanceMgmt } from './FinanceMgmt/FinanceMgmt.module';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule, FinanceMgmt, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
