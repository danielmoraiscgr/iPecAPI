import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import Usuario from '../models/Usuario';
import api from '../../api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = api.url+'/user'    
  public LOGIN_API = `${this.API}/login`;

  constructor(private http: HttpClient) { }

  login(username:string, password:string){
    var data ={
      username : username, 
      password : password
    };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.LOGIN_API, data, { headers: reqHeader });
  }


}
