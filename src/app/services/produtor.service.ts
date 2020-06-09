import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Produtor from '../models/Produtor';


@Injectable()

export class ProdutorService {

  public API = 'https://localhost:44339/api';
  public PRODUTORES_API = `${this.API}/Produtores`;

  constructor(private http: HttpClient) {}


  getAll(): Observable<Array<Produtor>> {
    return this.http.get<Array<Produtor>>(this.PRODUTORES_API);
  }

  get(id: string) {
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

  remove(id: number) {
    return this.http.delete(`${this.PRODUTORES_API}/${id.toString()}`);
  }

}
