import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:UserService
  ) { }

  restaurents:any
  
  userId=this.route.snapshot.params['id']
  ngOnInit(): void {

    this.service.getrestaurent().subscribe(
      data=>{
        this.restaurents=data
        
      
      },
      err=>console.log(err)
    )
    //console.log(this.userId)

  }
  menu(restaurentId,restaurentName){
    this.service.restaurentName=restaurentName

    this.router.navigate(['/restaurant',restaurentId])
  }

  closeAlert(){
    alert("Restaurent is not available now!!!")
  }

}
