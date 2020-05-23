import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  restaurents:any
  constructor(
    private router:Router,
    private service:AdminService
  ) { }

  ngOnInit(): void {

    this.service.getrestaurent().subscribe(
      data=>{
        this.restaurents=data
        //console.log(data)
      },
      err=>console.log(err)
    )

  }

  addRestaurent(){
    this.router.navigate(['/add-restaurant'])
  }
  EditRestaurent(restaurentId,restaurentName){
    this.router.navigate(['/edit-restaurant',restaurentId])
  }

  menu(restaurentId,restaurentName){

    this.service.restaurentName=restaurentName

    this.router.navigate(['/admin/restaurant',restaurentId])

  }
}
