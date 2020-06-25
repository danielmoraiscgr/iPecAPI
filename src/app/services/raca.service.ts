import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import Raca  from '../models/Raca'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RacaService {
  public API = 'https://localhost:44339/api';
  public RACAS_API = `${this.API}/Racas`;


  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Raca>> {
    return this.http.get<Array<Raca>>(this.RACAS_API);
 }

 get(id: string) {
   return this.http.get(`${this.RACAS_API}/${id}`);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.RACAS_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Raca): Observable<any> {
       return this.http.post(this.RACAS_API,opost);
 }

 put(id: string, oput: Raca): Observable<Raca> {
      console.log(this.RACAS_API+'/'+id.toString());
      return this.http.put<Raca>(`${this.RACAS_API}/${id}`,oput);
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
