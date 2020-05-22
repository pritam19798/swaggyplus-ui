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
  loginValidate(){
    if(this.admin.adminId==""){
      alert("Please enter Admin User-Id")
      return 0
    }
    else if(this.admin.password==""){
      alert("Password cannot be empty")
      return 0
    }
    return 1
  }

  loginHandle(){
    if(this.loginValidate()){
    
    this.service.adminValidation(this.admin).subscribe(
      data=>{
      
        this.adminId=data;
        sessionStorage.setItem("adminId",this.adminId)
        this.service.getAdminName(this.adminId).subscribe(data=>{
          this.adminName=data;
          
          sessionStorage.setItem("adminName",this.adminName)
          sessionStorage.setItem("adminType","ADMIN")
          this.service.adminName=this.adminName
          if(this.adminId==this.admin.adminId){
        
            this.router.navigate(['admin-dashboard',this.adminId]);
            
            }
          else{
            alert("Wrong Credential!! please give the right information");
          }
        })
      },
      err=>{
        alert("Wrong Credential!! please give the right information");
      }
      );}
  }

}
