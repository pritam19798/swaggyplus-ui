import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Dish } from 'src/app/dish';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  restaurent:any
  public dish=new Dish("","","",null)
  constructor(
    private route:ActivatedRoute,
    private service: AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    let id=this.route.snapshot.params['id']
    this.service.getresDetail(id).subscribe(
      data=>{
        this.restaurent=data
        //console.log(this.restaurent)
      }
    )

  }
  radiochangeHandeller(event){
    this.restaurent.isActive=event.target.value
  }
  validateRestaurent(){
    if(this.restaurent.restaurentName==""){
      alert("Restaurant Name can not be empty!!!")
      return 0
    }
    if(this.restaurent.restaurentAdress==""){
      alert("Restaurant Address can not be empty!!!")
      return 0
    }
    if(this.restaurent.restaurentRating==null){
      alert("Restaurant Rating can not be empty!!!")
      return 0
    }
    if(this.restaurent.restaurentRating>5){
      this.restaurent.restaurentRating=5
      return 1
    }
    if(this.restaurent.restaurentRating<0){
      this.restaurent.restaurentRating=0
      return 1
    }
    
    return 1
  }
  updateHandeller(id){
    //console.log(id)
    if(this.validateRestaurent()){
    this.service.editRestaurent(id,this.restaurent).subscribe(
      data=>{
        //console.log(data)
        this.router.navigate(['admin-dashboard',sessionStorage.getItem("adminId")])
        alert("Restaurant Details are updated!!!")
      }
    )
    }
  }
 validate(){
   if(this.dish.dishName==null){
     return 0
   }
   else if(this.dish.shortDescription==null)
   {
     return 0
   }
   else if(this.dish.freeDelivery==null)
   {
     return 0
   } else if(this.dish.imageUrl==null)
   {
     return 0
   }     else if(this.dish.imageUrl.length>255)
   {
     alert("Image link length must be less than 255 characters")
     return 0
   }else if(this.dish.isVeg==null)
   {
     return 0
   }
   else if(this.dish.price==null)
   {
     return 0
   }
   else{
     return 1
   }

 }

  radiochangeHandeller1(event){
    this.dish.setIsveg(event.target.value)
  }

  radiochangeHandeller2(event){
    this.dish.setfreeDelivery(event.target.value)
  }
 
  addDishhandeller(restaurentId){
    if(this.validate()){
    //console.log(this.dish)
    this.service.addDishToRestaurent(restaurentId,this.dish).subscribe(
      data=>{
        //console.log(data)
        this.router.navigate(['admin-dashboard',sessionStorage.getItem("adminId")])
      }
    )}
    else{
      alert("Please Enter All details correctly!!!")
    }
  }

}
