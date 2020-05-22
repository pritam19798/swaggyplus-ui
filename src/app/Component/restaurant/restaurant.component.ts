import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(
    public service:UserService,
    private route:ActivatedRoute,
    public aService:AdminService,
    private router:Router
  ) { }
  
  restaurentName:any
  restaurentId:any
  rating:any
  restaurent:any
  dishes:any
  message:any
  ifVeg:any
  ngOnInit(): void {
    this.referseh()

  }

  referseh(){
    this.restaurentId=this.route.snapshot.params['id']
    
    this.service.getrestaurentById(this.restaurentId).subscribe(
      data=>{
        this.restaurent=data
        this.dishes=this.restaurent.dishes
        console.log(data)
     
      }
    )
  }
  Veg(){
    if(this.restaurent.dishes.isVeg==false){
     this.ifVeg="Non-Veg"
    }
    else{
      this.ifVeg="Veg"
    }
  }
  addtoCart(dishId,dishName){
    let userId=sessionStorage.getItem("userId")
    this.service.addToCart(userId,dishId).subscribe(
      data=>{
        console.log(data)
        this.referseh()
        this.message=`${dishName} added to cart`
        alert(this.message)
      }
    )
   

  }
  edit(dishId,dishName){
    this.router.navigate(['dish-edit',dishId])
  }
  

}
