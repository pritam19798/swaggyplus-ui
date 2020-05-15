import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
        console.log(data)
      },
      err=>console.log(err)
    )
    console.log(this.userId)

  }
  menu(restaurentId,restaurentName){
    this.service.restaurentName=restaurentName

    this.router.navigate(['/restaurant',restaurentId])
  }

}
