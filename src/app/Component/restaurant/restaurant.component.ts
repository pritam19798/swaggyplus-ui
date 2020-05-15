import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(
    private service:UserService,
    private route:ActivatedRoute,
  ) { }
  
  restaurentName:any
  restaurentId:any
  dishes:any
  ngOnInit(): void {
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

}
