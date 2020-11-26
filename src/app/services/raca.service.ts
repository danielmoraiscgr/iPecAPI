import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import Raca  from '../models/Raca';
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

export class RacaService {
  public API = api.url;  
  public RACAS_API = `${this.API}/Racas`;


  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Raca>> {
    return this.http.get<Array<Raca>>(this.RACAS_API,httpOptions);
 }

 get(id: string) {
   return this.http.get(`${this.RACAS_API}/${id}`,httpOptions);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.RACAS_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Raca): Observable<any> {
       return this.http.post(this.RACAS_API,opost,httpOptions);
 }

 put(id: string, oput: Raca): Observable<Raca> {
      console.log(this.RACAS_API+'/'+id.toString());
      return this.http.put<Raca>(`${this.RACAS_API}/${id}`,oput,httpOptions);
 }

 update(raca: Raca){
   if (raca.id) {
     let result: Observable<Raca>;
     result = this.http.put<Raca>(
       `${this.RACAS_API}/${raca.id}`,
       raca
     );
     console.log(result);
     
   return result;
 }}

 
}
