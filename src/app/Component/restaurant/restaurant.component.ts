import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

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
  dishes:any
  message:any
  ngOnInit(): void {
    this.referseh()
  }

  referseh(){
    this.restaurentId=this.route.snapshot.params['id']
    this.restaurentName=this.service.restaurentName
    this.service.getDish(this.restaurentId).subscribe(
      data=>{
        this.dishes=data
        console.log(this.dishes)
      },
      err=>console.log(err)
    )
  }

  addtoCart(dishId,dishName){
    let userId=sessionStorage.getItem("userId")
    this.service.addToCart(userId,dishId).subscribe(
      data=>{
        console.log(data)
        this.referseh()
        this.message=`${dishName} added to cart`
      }
    )


  }
  edit(dishId,dishName){
    this.router.navigate(['dish-edit',dishId])
  }
  

}
