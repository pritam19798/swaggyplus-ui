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
  userName:string
  userValidation(User){
    return this.http.post(`${API_URL}/user/login`,User,{responseType:'text' as 'json'});
  }

  userSignUp(User){
    return this.http.post(`${API_URL}/user/addUser`,User,{responseType:'text' as 'json'});
  }

  getUserName(Id){
    return this.http.get(`${API_URL}/user/getUserName/?Id=${Id}`,{responseType:'text' as 'json'})
  }

  islogin(){
    return !(sessionStorage.getItem("userId")==null) && (sessionStorage.getItem("userType")=="USER")
  }
 
  //Restaurent area....

  getrestaurent(){
    return this.http.get(`${API_URL}/res/getrestaurent`)
  }
  getDish(restaurentId){
    return this.http.get(`${API_URL}/res/dishes?id=${restaurentId}`)
  }


  //cart Area.....

  getallcart(id){
    return this.http.get(`${API_URL}/user/${id}/cart/dish`)
  }
  getcartprice(id){
    return this.http.get(`${API_URL}/user/${id}/cart/price`)
  }

  deleteFromCart(userId,dishId){
    return this.http.delete(`${API_URL}/user/${userId}/cart/dish?dishId=${dishId}`)
  }
  addToCart(userId,dishId){
    return this.http.post(`${API_URL}/user/${userId}/cart/dish?dishId=${dishId}`,{})
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