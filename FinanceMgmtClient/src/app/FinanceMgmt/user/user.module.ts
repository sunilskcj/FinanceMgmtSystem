import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from "./user.component";
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
declarations : [
    DashboardComponent, UserComponent, NavbarComponent, ChangepasswordComponent
  ],
imports: [CommonModule, RouterModule],
providers : [],
exports:[DashboardComponent]
})
export class UserModule{}