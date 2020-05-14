import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './Component/user/user.component';
import { AdminComponent } from './Component/admin/admin.component';
import { RestaurantComponent } from './Component/restaurant/restaurant.component';
import { CartComponent } from './Component/cart/cart.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AddRestaurantComponent } from './Component/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './Component/edit-restaurant/edit-restaurant.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'user/:id',component:UserComponent},
  {path:'admin/:id',component:AdminComponent},
  {path:'restaurant/:id',component:RestaurantComponent},
  {path:'add-restaurant',component:AddRestaurantComponent},
  {path:'edit-restaurant/:id',component:EditRestaurantComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
