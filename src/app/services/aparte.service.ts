import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import Aparte from '../models/Aparte';
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
export class AparteService {

  public API = api.url;
  public APARTES_API = `${this.API}/Apartes`;

  constructor(private http: HttpClient) { }

  
getAll(): Observable<Array<Aparte>> {
    return this.http.get<Array<Aparte>>(this.APARTES_API,httpOptions);
 }

 get(id: string) {
   return this.http.get(`${this.APARTES_API}/${id}`),httpOptions;
 }

 delete(id: number): Observable<{}> {
     const url = `${this.APARTES_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Aparte): Observable<any> {
       console.log(opost); 
       return this.http.post(this.APARTES_API,opost,httpOptions);
 }

 put(id: string, oput: Aparte): Observable<Aparte> {
      return this.http.put<Aparte>(`${this.APARTES_API}/${id}`,oput,httpOptions);
 }

 update(aparte: Aparte){
   if (aparte.id) {
     let result: Observable<Aparte>;
     result = this.http.put<Aparte>(
       `${this.APARTES_API}/${aparte.id}`,aparte);
   return result;
 }}

}
