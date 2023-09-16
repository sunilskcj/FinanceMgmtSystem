import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { RegisterComponent } from "./register/register.component";
import { ChangepasswordComponent } from "./user/changepassword/changepassword.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { UserComponent } from "./user/user.component";


const AppRoutes : Routes = [
    {path : '', component : HomepageComponent, pathMatch : "full" },

    {path : 'user', component : UserComponent, children : [
        {path : 'profile', component: ProfileComponent },
        {path : 'dash', component: DashboardComponent },
        {path : 'changepd', component: ChangepasswordComponent }
    ]},
    {path: 'rgstr', component:RegisterComponent}
]
@NgModule({
    imports : [ RouterModule.forRoot(AppRoutes)],
    exports : [RouterModule]
})
export class FinanceMgmtRoutingModule{}

export { Routes };
