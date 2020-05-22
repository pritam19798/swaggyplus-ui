import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  dishes:any
  totalPrice:any
  constructor(
    private route:ActivatedRoute,
    private service:UserService
  ) { }

  ngOnInit(): void {
    this.refreshcart()
  }
  refreshcart(){
    let userId=this.route.snapshot.params['id']
    this.service.getallcart(userId).subscribe(
      data=>{

        this.dishes=data;
        console.log(this.dishes)
        this.service.getcartprice(userId).subscribe(
          data=>{

            this.totalPrice=data
            console.log(this.totalPrice)

          }
        )

      },
      err=>console.log(err)
    )
  }

  deleteCart(dishId){
    let userId=this.route.snapshot.params['id']
    this.service.deleteFromCart(userId,dishId).subscribe(
      data=>{

        this.refreshcart()

      },
      err=>console.log(err)
    )

  }

  placeOrder(){
    alert(`your order has been placed`)
  }

}
