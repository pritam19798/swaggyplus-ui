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
    console.log(id)
    this.service.getdish(id).subscribe(
      data=>{
        this.dish=data
        console.log(data)
      }
    )
   
  }
  radiochangeHandeller1(event){
    this.dish.isVeg=event.target.value
  }

  radiochangeHandeller2(event){
    this.dish.freeDelivery= event.target.value
  }

  updateHandel(){
    let id=this.route.snapshot.params['id']
    this.service.editDish(id,this.dish).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['/admin',sessionStorage.getItem("adminId")])
      }
    )
  }

}
