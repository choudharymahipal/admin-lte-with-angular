import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LockScreenComponent } from './Components/lock-screen/lock-screen.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorPageComponent } from './Shared/Components/error-page/error-page.component';
import { ProfileComponent } from './Components/Settings/profile/profile.component';
import { ChartJsComponent } from './Components/Charts/chart-js/chart-js.component';
import { FlotComponent } from './Components/Charts/flot/flot.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "lockscreen", component: LockScreenComponent },
  { path: "error", component: ErrorPageComponent },
  { path: "settings/profile", component: ProfileComponent },
  { path: "charts/chartjs", component: ChartJsComponent },
  { path: "charts/flot", component: FlotComponent },
  { path: "", component: DashboardComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "error", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
