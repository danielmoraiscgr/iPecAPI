import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, ObservedValueOf } from 'rxjs';
import Produtor from '../models/Produtor';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import api from '../../api';

const token = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Bearer '+token
  })
};
 
@Injectable()
export class ProdutorService { 
  
  public API = api.url;   
  public PRODUTORES_API = `${this.API}/Produtores`;
  
  constructor(private http: HttpClient, private storage: Storage) {
    storage.get('token').then((token) => {
    });
  } 


  getAll(): Observable<Array<Produtor>> {
     console.log(httpOptions);     
     return this.http.get<Array<Produtor>>(this.PRODUTORES_API,httpOptions);
  }

  
  get(id: string) {
    return this.http.get(`${this.PRODUTORES_API}/${id}`,httpOptions);
  }
 
  delete(id: number): Observable<{}> {
      const url = `${this.PRODUTORES_API}/${id}`;  
    return this.http.delete(url, httpOptions);   
  }

  post(opost:Produtor): Observable<any> {
        return this.http.post(this.PRODUTORES_API,opost,httpOptions);
  }

  put(id: string, oput: Produtor): Observable<Produtor> {
       console.log(this.PRODUTORES_API+'/'+id.toString());
       return this.http.put<Produtor>(`${this.PRODUTORES_API}/${id}`,oput,httpOptions);
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
