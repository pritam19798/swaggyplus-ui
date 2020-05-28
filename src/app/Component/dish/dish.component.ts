import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  dish:any
  constructor(
    private service:AdminService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    let id=this.route.snapshot.params['id']
    //console.log(id)
    this.service.getdish(id).subscribe(
      data=>{
        this.dish=data
        //console.log(data)
      }
    )
   
  }
  radiochangeHandeller1(event){
    this.dish.isVeg=event.target.value
  }

  radiochangeHandeller2(event){
    this.dish.freeDelivery= event.target.value
  }

  validate(){
    if(this.dish.dishName==""){
      alert("DishName cannot be empty!!")
      return 0
    }
    else if(this.dish.shortDescription=="")
    {
      alert("Dish Description cannot be empty!!")
      return 0
    }
    else if(this.dish.freeDelivery==null)
    {
      alert("Dish deliverystatus cannot be empty!!")
      return 0
    } else if(this.dish.imageUrl=="")
    {
      alert("Dish imageurl cannot be empty!!")
      return 0
    }
    else if(this.dish.imageUrl.length>255)
    {
      alert("Image link length must be less than 255 characters")
      return 0
    }
    else if(this.dish.isVeg==null)
    {
      alert("Please select dish is veg or not!!")
      return 0
    }
    else if(this.dish.price==null)
    {
      alert("Dish price cannot be empty!!")
      return 0
    }
    else{
      return 1
    }
 
  }
 

  updateHandel(){
    if(this.validate()){

      let id=this.route.snapshot.params['id']
      this.service.editDish(id,this.dish).subscribe(
        data=>{
          //console.log(data)
          this.router.navigate(['/admin/restaurant',sessionStorage.getItem("restaurantId")])
          alert("Dish Details are Updated!!")
        }
      )

    }
   

  }

}
