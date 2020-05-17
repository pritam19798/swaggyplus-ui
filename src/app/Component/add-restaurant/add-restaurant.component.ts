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

  addhandeller(){
    //console.log(this.dish)
    this.restaurent.addDish(this.dish)
    console.log(this.restaurent)
    let adres=this.service.addRestaurent(this.restaurent)
    console.log(adres)
    adres.subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['admin',sessionStorage.getItem("adminId")])

      }
    )
  }

}
