import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router:Router,
    private apiservice:UserService
  ) { }


  public user:User=new User("","");
  message:any;
  alert:string;
  userName:any;
  ngOnInit(): void {
  }

  loginHandle(){
    let resp=this.apiservice.userValidation(this.user);
    
    resp.subscribe(
      data=>{
        
        this.message=data
        console.log(this.message);
        sessionStorage.setItem("userId",this.message)

        this.apiservice.getUserName(this.message).subscribe(data=>{
          this.userName=data;
          sessionStorage.setItem("userName",this.userName)
        })
          

        if(this.message==this.user.userId){
        
          this.router.navigate(['user',this.message]);
          
          }
        else{
          this.alert="please give the right information";
        }
        
      });
     
        
  
    
    

  }


}
