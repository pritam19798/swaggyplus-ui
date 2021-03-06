import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search-space',
  templateUrl: './search-space.component.html',
  styleUrls: ['./search-space.component.css']
})
export class SearchSpaceComponent implements OnInit {

  SearchKey:any
  restaurents:any
  dishes:any
  message:any
  notFoundMessage:string
  notFound:boolean
  constructor(
    private route:ActivatedRoute,
    public service:UserService,private router:Router
  ) {}

  ngOnInit(): void {

    this.SearchKey=this.route.snapshot.params['searchKey']
    this.refresh()
   

  }
 
  refresh(){
    
    this.SearchKey=this.route.snapshot.params['searchKey']
    if(this.SearchKey.length){
      this.service.searchHandle(this.SearchKey).subscribe(
        data=>{
          this.restaurents=data
          //console.log(this.restaurents)
          //alert(this.restaurent.restaurentAdress)
          this.service.searchHandleDish(this.SearchKey).subscribe(
            data=>{
              this.dishes=data
              //console.log(this.dishes)
              if(this.dishes.length==0 && this.restaurents.length==0){
                this.notFound=true
                this.notFoundMessage=`No restaurants or dish found containing ${this.SearchKey}`
                console.log(this.notFound)
              }
            }
          )
        }
      )
    }
    else{
      this.router.navigate(['user-dashboard',sessionStorage.getItem("userId")])
    }


  }

  addtoCart(dishId,dishName,restaurantId){
    let userId=sessionStorage.getItem("userId")
    // let restaurantId=this.route.snapshot.params['id']
    this.service.getrestaurentId(userId).subscribe(
      data=>{
        //console.log(data,restaurantId)
        if(data!=-1){

          if(data==restaurantId){
            //console.log(true)
            this.service.addToCart(userId,dishId).subscribe(
              data=>{
                //console.log(data)
                this.refresh()
                this.message=`${dishName} added to cart`
                alert(this.message)
              }
            )
          }else{
           let r=confirm("Previously You have added dish from another restaurant. Do you want to delete previous Items?")
           if (r == true) {
            this.service.addToCart(userId,dishId).subscribe(
              data=>{
                //console.log(data)
                this.refresh()
                this.message=`${dishName} added to cart`
                alert(this.message)
              }
            )
          } else {
            console.log("nothing")
          }
          }

        }else{
          this.service.addToCart(userId,dishId).subscribe(
            data=>{
              //console.log(data)
              this.refresh()
              this.message=`${dishName} added to cart`
              alert(this.message)
            }
          )
        } 
      }
    )
  }

}
