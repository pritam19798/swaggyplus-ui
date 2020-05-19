import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './app.constants';
import { Restaurent } from './restaurent';
import { Admin1 } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  restaurentName:string
  adminName:any
  constructor(
    private http:HttpClient
  ) { }

  adminValidation(admin){
    console.log(admin)
    return this.http.post(`${API_URL}/admin/login`,admin,{responseType:'text' as 'json'});
  }

  adminSignUp(admin:Admin1){
    return this.http.post(`${API_URL}/admin/addAdmin`,admin,{responseType:'text' as 'json'})
  }

  getAdminName(Id){
    console.log(Id)
    return this.http.get(`${API_URL}/admin/getAdminName?Id=${Id}`,{responseType:'text' as 'json'})
  }

  isadminlogin(){
    return !(sessionStorage.getItem("adminId")==null) && (sessionStorage.getItem("adminType")=="ADMIN")
  }
 


  getrestaurent(){
    return this.http.get(`${API_URL}/res/getrestaurent`)
  }

  getrestaurentById(restaurentId){
    return this.http.get(`${API_URL}/res/restaurent?id=${restaurentId}`)
  }

  getresDetail(id){
    return this.http.get(`${API_URL}/res/restaurent?id=${id}`)
  }


  addRestaurent(restaurent:Restaurent){
    return this.http.post(`${API_URL}/res/addrestaurent`,restaurent)
  }

  editRestaurent(id,restaurent){
    return this.http.put(`${API_URL}/res/restaurent?id=${id}`,restaurent)
  }

  addDishToRestaurent(restaurentId,dish){
    return this.http.put(`${API_URL}/res/addDish/${restaurentId}`,dish)
  }

  getdish(dishId){
    return this.http.get(`${API_URL}/res/dish?id=${dishId}`)
  }

  editDish(dishId,dish){
    return this.http.put(`${API_URL}/res/editDish?id=${dishId}`,dish)
  }



}


export class Admin{
  adminId:string;
  password:string;
 
	constructor(adminId:string,password:string) {
		
		this.adminId = adminId;
    this.password = password;
   
  }
}
