import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, ObservedValueOf } from 'rxjs';
import Produtor from '../models/Produtor';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()

export class ProdutorService {

  public API = 'https://localhost:44339/api';
  public PRODUTORES_API = `${this.API}/Produtores`;
  
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Produtor>> {
     return this.http.get<Array<Produtor>>(this.PRODUTORES_API);
  }

  get(id: string) {
    return this.http.get(`${this.PRODUTORES_API}/${id}`);
  }
 
  delete(id: number): Observable<{}> {
      const url = `${this.PRODUTORES_API}/${id}`;  
    return this.http.delete(url, httpOptions);   
  }

  post(opost:Produtor): Observable<any> {
        return this.http.post(this.PRODUTORES_API,opost);
  }

  put(id: string, oput: Produtor): Observable<Produtor> {
       console.log(this.PRODUTORES_API+'/'+id.toString());
       return this.http.put<Produtor>(`${this.PRODUTORES_API}/${id}`,oput);
  }

  update(produtor: Produtor){
    if (produtor.id) {
      let result: Observable<Produtor>;
      result = this.http.put<Produtor>(
        `${this.PRODUTORES_API}/${produtor.id}`,
        produtor
      );
      console.log(result);
      
    return result;
  }}

}
