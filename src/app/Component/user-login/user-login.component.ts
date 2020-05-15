import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, User } from 'src/app/api.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 public user:User=new User("","");
 message:any;
 alert:any;
  constructor(
    private router:Router,private apiservice:ApiService
  ) { }

  ngOnInit(): void {
  }

  loginHandle(){
    let resp=this.apiservice.userValidation(this.user);
    resp.subscribe(data=>this.message=data);
    console.log(this.message);
  
    if(this.message==this.user.userId){
    this.router.navigate(['user',this.message]);
    }
    else{
    this.alert="please give the right information";
    }
  }


}
