import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import Aparte from '../models/Aparte';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AparteService {

  public API = 'https://localhost:44339/api';
  public APARTES_API = `${this.API}/Apartes`;

  constructor(private http: HttpClient) { }

  
getAll(): Observable<Array<Aparte>> {
    return this.http.get<Array<Aparte>>(this.APARTES_API);
 }

 get(id: string) {
   return this.http.get(`${this.APARTES_API}/${id}`);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.APARTES_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Aparte): Observable<any> {
       return this.http.post(this.APARTES_API,opost);
 }

 put(id: string, oput: Aparte): Observable<Aparte> {
      return this.http.put<Aparte>(`${this.APARTES_API}/${id}`,oput);
 }

 update(aparte: Aparte){
   if (aparte.id) {
     let result: Observable<Aparte>;
     result = this.http.put<Aparte>(
       `${this.APARTES_API}/${aparte.id}`,aparte);
   return result;
 }}

}
