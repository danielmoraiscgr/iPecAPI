import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import TipoManejo from '../models/TipoManejo';
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
export class TipomanejoService {

  
  public API = api.url;
  public TIPOMANEJOS_API = `${this.API}/TipoManejos`;


  constructor(private http: HttpClient) { }

getAll(): Observable<Array<TipoManejo>> {
    return this.http.get<Array<TipoManejo>>(this.TIPOMANEJOS_API,httpOptions);
 }

 get(id: string) {
   return this.http.get(`${this.TIPOMANEJOS_API}/${id}`,httpOptions);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.TIPOMANEJOS_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:TipoManejo): Observable<any> {
       return this.http.post(this.TIPOMANEJOS_API,opost,httpOptions);
 }

 put(id: string, oput: TipoManejo): Observable<TipoManejo> {
      console.log(this.TIPOMANEJOS_API+'/'+id.toString());
      return this.http.put<TipoManejo>(`${this.TIPOMANEJOS_API}/${id}`,oput,httpOptions);
 }

 update(tipomanejo: TipoManejo){
   if (tipomanejo.id) {
     let result: Observable<TipoManejo>;
     result = this.http.put<TipoManejo>(
       `${this.TIPOMANEJOS_API}/${tipomanejo.id}`,
       tipomanejo
     );
     console.log(result);
     
   return result;
 }}


}
