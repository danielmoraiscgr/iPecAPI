import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import Manejo from '../models/Manejo';
import api from '../../api';

const token = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Bearer '+token
  })
};

@Injectable({
  providedIn: 'root'
})
export class ManejoService {
  public API = api.url;
  public MANEJOS_API = `${this.API}/Manejos`;

  constructor(private http: HttpClient) { }

  
getAll(): Observable<Array<Manejo>> {
  return this.http.get<Array<Manejo>>(this.MANEJOS_API,httpOptions);
}

get(id: string) {
 return this.http.get(`${this.MANEJOS_API}/${id}`,httpOptions);
}

delete(id: number): Observable<{}> {
   const url = `${this.MANEJOS_API}/${id}`;  
 return this.http.delete(url, httpOptions);   
}

post(opost:Manejo): Observable<any> {
    console.log(opost);
     return this.http.post(this.MANEJOS_API,opost,httpOptions);
}

put(id: string, oput: Manejo): Observable<Manejo> {
    return this.http.put<Manejo>(`${this.MANEJOS_API}/${id}`,oput,httpOptions);
}

update(manejo: Manejo){
 if (manejo.id) {
   let result: Observable<Manejo>;
   result = this.http.put<Manejo>(
     `${this.MANEJOS_API}/${manejo.id}`,manejo);
 
 return result;
}}
  

}
