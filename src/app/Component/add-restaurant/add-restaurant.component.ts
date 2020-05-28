import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/dish';
import { Restaurent } from 'src/app/restaurent';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  public dish=new Dish("","","",null)
  public restaurent=new Restaurent("","",null)
  constructor(
    private service:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  radiochangeHandeller(event){
    this.restaurent.setisActive(event.target.value)
  }

  radiochangeHandeller1(event){
    this.dish.setIsveg(event.target.value)
  }

  radiochangeHandeller2(event){
    this.dish.setfreeDelivery(event.target.value)
  }
  
  addResValidation(){
     if(this.restaurent.restaurentName==""){
      alert("Restaurent name is empty")
      return 0
    }
    else if(this.restaurent.restaurentAdress==""){
      alert("Restaurent address is empty")
      return 0
    }else if(this.restaurent.restaurentRating==null){
      alert("Restaurent Rating is empty")
      return 0
    } else if(this.restaurent.restaurentRating>5){
      this.restaurent.restaurentRating=5
      return 1
    }
        else if(this.restaurent.restaurentRating<0){
      this.restaurent.restaurentRating=0
      return 1
    }
   else if(this.restaurent.isActive==null){
     alert("Please select if the restaurent is active or not!!")
     return 0
    }
    
    else if(this.dish.dishName==""){
      alert("Dish Name is empty")
      return 0
    } 
      else if(this.dish.shortDescription==""){
      alert("Short description of dish is empty")
      return 0
    }
    else if(this.dish.imageUrl==""){
      alert("Image url is empty")
      return 0
    }else if(this.dish.price==null){
      alert("Dish Price is empty")
      return 0
    }else if(this.dish.isVeg==null){
      alert("Please select if the Dish is veg or not")
      return 0
    }else if(this.dish.freeDelivery==null){
      alert("Please select if the Dish is available for free deliveryor not!!")
      return 0
    }
    else if(this.dish.imageUrl.length>255)
 {
   alert("Image link length must be less than 255 characters")
   return 0
 }
    return 1
  }
  addhandeller(){
    if(this.addResValidation()){
    //console.log(this.dish)
    this.restaurent.addDish(this.dish)
    //console.log(this.restaurent)
    let adres=this.service.addRestaurent(this.restaurent)
    //console.log(adres)
    adres.subscribe(
      data=>{
        //console.log(data)
        this.router.navigate(['admin-dashboard',sessionStorage.getItem("adminId")])
        alert("Restaurent is added Successfully")
      }
    )
    }
  }

}
