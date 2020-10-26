import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import Usuario from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = 'https://localhost:44384/api/user';
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
