import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, Admin } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private router:Router,
    private service:AdminService
  ) { }

  public admin:Admin=new Admin("","");
  adminId:any;
  alert:string;
  adminName:any;

  ngOnInit(): void {
  }


  loginHandle(){
    console.log(this.admin)
    this.service.adminValidation(this.admin).subscribe(
      data=>{
        console.log(data)
        this.adminId=data;
        sessionStorage.setItem("adminId",this.adminId)
        this.service.getAdminName(this.adminId).subscribe(data=>{
          this.adminName=data;
          
          sessionStorage.setItem("adminName",this.adminName)
          sessionStorage.setItem("adminType","ADMIN")
          this.service.adminName=this.adminName
          if(this.adminId==this.admin.adminId){
        
            this.router.navigate(['admin',this.adminId]);
            
            }
          else{
            alert("please give the right information");
          }
        })
      },
      err=>{
        alert("please give the right information");
      }
      );
  }

}
