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
import { UserRouteGuard } from './user-route.guard';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { AdminRouteGuard } from './admin-route.guard';
import { DishComponent } from './component/dish/dish.component';
import { AdminRegistrationComponent } from './Component/admin-registration/admin-registration.component';
import { SearchSpaceComponent } from './component/search-space/search-space.component';
import { DummySearchComponent } from './Component/dummy-search/dummy-search.component';
//import { SearchComponent } from './Component/search/search.component';




const routes: Routes = [
  {path:'',component:DashboardComponent},
  
  {path:'user/registration',component:UserRegistrationComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user-dashboard/:id',component:UserComponent,canActivate:[UserRouteGuard]},
  {path:'restaurant/:id',component:RestaurantComponent,canActivate:[UserRouteGuard]},
  {path:'cart/:id',component:CartComponent,canActivate:[UserRouteGuard]},
  {path:'search/:searchKey',component:SearchSpaceComponent,canActivate:[UserRouteGuard]},
  {path:'dummy/:searchKey',component:DummySearchComponent,canActivate:[UserRouteGuard]},
  
  {path:'admin/registration',component:AdminRegistrationComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin-dashboard/:id',component:AdminComponent,canActivate:[AdminRouteGuard]},
  {path:'admin/restaurant/:id',component:RestaurantComponent,canActivate:[AdminRouteGuard]},
  {path:'add-restaurant',component:AddRestaurantComponent,canActivate:[AdminRouteGuard]},
  {path:'edit-restaurant/:id',component:EditRestaurantComponent,canActivate:[AdminRouteGuard]},
  {path:'dish-edit/:id',component:DishComponent,canActivate:[AdminRouteGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
