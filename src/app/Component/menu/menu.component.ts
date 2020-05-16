import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName:any;
  constructor(
    public service:UserService
  ) { }

  ngOnInit(): void {
    if(this.service.islogin()){
  
    this.userName=sessionStorage.getItem("userName")
    
    }
  }
  sesclr(){
    sessionStorage.clear();
  }
}
