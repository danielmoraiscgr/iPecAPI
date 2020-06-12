import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Produtor from '../models/Produtor';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
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
   // console.log(id); 
    return this.http.get(`${this.PRODUTORES_API}/${id}`);
  }

  save(produtor: Produtor): Observable<Produtor> {
    let result: Observable<Produtor>;
    if (produtor.id) {
      result = this.http.put<Produtor>(
        `${this.PRODUTORES_API}/${produtor.id}`,
        produtor
      );
    } else {
      result = this.http.post<Produtor>(this.PRODUTORES_API, produtor);
    }
    return result;
  }

  remove(id: number): Observable<{}> {
     // return this.http.delete(`${this.PRODUTORES_API}/${id.toString()}`);
     const url = `${this.PRODUTORES_API}/${id}`;  
     console.log(url);        
     return this.http.delete(url, httpOptions)    
  }

}
