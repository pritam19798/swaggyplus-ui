import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component/user/user.component';
import { AdminComponent } from './Component/admin/admin.component';
import { RestaurantComponent } from './Component/restaurant/restaurant.component';
import { CartComponent } from './Component/cart/cart.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AddRestaurantComponent } from './Component/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './Component/edit-restaurant/edit-restaurant.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    RestaurantComponent,
    CartComponent,
    UserLoginComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
