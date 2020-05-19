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


  registrationHandle(){

    this.service.userSignUp(this.user).subscribe(
      data=>{
        alert(`hello ${this.user.name} you have successfully registered  please remeber your Login Id ${data}`)
      }
    )

  }

}
