import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LockScreenComponent } from './Components/lock-screen/lock-screen.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { ErrorPageComponent } from './Shared/Components/error-page/error-page.component';
import { ProfileComponent } from './Components/Settings/profile/profile.component';
import { ChartJsComponent } from './Components/Charts/chart-js/chart-js.component';
import { FlotComponent } from './Components/Charts/flot/flot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LockScreenComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ErrorPageComponent,
    ProfileComponent,
    ChartJsComponent,
    FlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
