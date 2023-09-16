import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {  UserModule } from "./user/user.module";
import { HomepageComponent } from './homepage/homepage.component';
import { FinanceMgmtRoutingModule } from "./FinanceMgmt-routing.module";
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
declarations : [
    HomepageComponent,   RegisterComponent
  ],
imports : [ RouterModule,FinanceMgmtRoutingModule, FormsModule, ReactiveFormsModule],
providers :[],
exports : []
})
export class FinanceMgmt {}