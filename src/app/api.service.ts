import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userValidation(User){
    return this.http.post('http://localhost:8080/user/login',User,{responseType:'text' as 'json'});
  }

}
  export class User{
  userId:string;
	password:string;
	constructor(userId:string,password:string) {
		
		this.userId = userId;
		this.password = password;
	}
}