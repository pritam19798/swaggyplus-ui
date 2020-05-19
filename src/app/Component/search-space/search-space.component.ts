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
  constructor(
    private route:ActivatedRoute,
    public service:UserService,private router:Router
  ) { }

  ngOnInit(): void {

   
    this.refresh()
    

  }
  refresh(){
    
    this.SearchKey=this.route.snapshot.params['searchKey']
    if(this.SearchKey.length){
      this.service.searchHandle(this.SearchKey).subscribe(
        data=>{
          this.restaurents=data
          console.log(this.restaurents)
          //alert(this.restaurent.restaurentAdress)
          this.service.searchHandleDish(this.SearchKey).subscribe(
            data=>{
              this.dishes=data
              console.log(this.dishes)
            }
          )
        }
      )
    }
    else{
      this.router.navigate(['user-dashboard',sessionStorage.getItem("userId")])
    }


  }

  addtoCart(dishId,dishName){
    let userId=sessionStorage.getItem("userId")
    this.service.addToCart(userId,dishId).subscribe(
      data=>{
        console.log(data)
        this.refresh()
        this.message=`${dishName} added to cart`
        alert(this.message)
      }
    )
   

  }

}
