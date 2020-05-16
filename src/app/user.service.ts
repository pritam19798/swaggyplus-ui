import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { API_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  restaurentName:string

  userValidation(User){
    return this.http.post(`${API_URL}/user/login`,User,{responseType:'text' as 'json'});
  }

  islogin(){
    return !(sessionStorage.getItem("userId")==null)
  }
 

  getrestaurent(){
    return this.http.get(`${API_URL}/res/getrestaurent`)
  }
  getDish(restaurentId){
    return this.http.get(`${API_URL}/res/dishes?id=${restaurentId}`)
  }
  getUserName(Id){
    return this.http.get(`${API_URL}/user/getUserName/?Id=${Id}`,{responseType:'text' as 'json'})
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