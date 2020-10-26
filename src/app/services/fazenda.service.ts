import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import Fazenda from '../models/Fazenda';

const token = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Bearer '+token
  })
};

@Injectable()

export class FazendaService {
  
  public API = 'https://localhost:44384/api';
  public FAZENDAS_API = `${this.API}/Fazendas`;

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<Array<Fazenda>> {
    return this.http.get<Array<Fazenda>>(this.FAZENDAS_API,httpOptions);
 }

 get(id: string) {
   return this.http.get(`${this.FAZENDAS_API}/${id}`,httpOptions);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.FAZENDAS_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Fazenda): Observable<any> {
       return this.http.post(this.FAZENDAS_API,opost,httpOptions);
 }

 put(id: string, oput: Fazenda): Observable<Fazenda> {
      console.log(this.FAZENDAS_API+'/'+id.toString());
      return this.http.put<Fazenda>(`${this.FAZENDAS_API}/${id}`,oput,httpOptions);
 }

 update(fazenda: Fazenda){
   if (fazenda.id) {
     let result: Observable<Fazenda>;
     result = this.http.put<Fazenda>(
       `${this.FAZENDAS_API}/${fazenda.id}`,
       fazenda
     );
     console.log(result);
     
   return result;
 }}


}
