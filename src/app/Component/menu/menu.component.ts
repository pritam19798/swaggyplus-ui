import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName:any;
  adminName:any
  constructor(
    public service:UserService,
    public aService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
 
    console.log(this.service.userName)
    this.userName=this.service.userName
    console.log(this.aService.adminName)
    this.adminName=this.aService.adminName
    console.log(this.aService.isadminlogin())

 
  }
  sesclr(){
    sessionStorage.clear();
    this.router.navigate([''])
    
  }

  restaurents(){
    let userId=sessionStorage.getItem("userId")
    this.router.navigate(['user',userId]);

  }

  carthandle(){
    let userId=sessionStorage.getItem("userId")
    this.router.navigate(['cart',userId])
    
  }
  goadmin(){
    this.router.navigate(['/admin',sessionStorage.getItem("adminId")])
  }
  
}
