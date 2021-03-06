import { Component, OnInit } from '@angular/core';
import { Admin1 } from 'src/app/admin';
import { AdminService} from 'src/app/admin.service';


@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  public admin:Admin1=new Admin1("","");
 
  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
  }
  signUpValidation(){
    if(this.admin.name==""){
      alert("Admin-Name cannot be empty")
      return 0
    }
    else if(this.admin.password==""){
      alert("Password cannot be empty")
      return 0
    }
    else{
      return 1
    }
  }

  registrationHandle(){
    if(this.signUpValidation()){
    this.service.adminSignUp(this.admin).subscribe(
      data=>{
        alert(`Hello ${this.admin.name} you have successfully registered !!!! please remeber your Login Id - ${data}`)
      }
    )
    }
}}
