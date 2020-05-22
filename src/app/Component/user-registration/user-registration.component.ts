import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {


  public user:User=new User("","");
  alert:any
  constructor(
    private service:UserService
  ) { }

  ngOnInit(): void {
  }
  signUpValidation(){
    if(this.user.name==""){
      alert("User-Name cannot be empty")
      return 0
    }
    else if(this.user.password==""){
      alert("Password cannot be empty")
      return 0
    }
    else{
      return 1
    }
  }

  registrationHandle(){
   if(this.signUpValidation()){
    this.service.userSignUp(this.user).subscribe(
      data=>{
        alert(`Hello ${this.user.name}!!! You have successfully registered ... please remeber your Login Id -${data}`)
      }
    )
    }
  }

}
