import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import Fazenda from '../models/Fazenda';

@Injectable()

export class FazendaService {
  
  public API = 'https://localhost:44339/api';
  public FAZENDAS_API = `${this.API}/Fazendas`;

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<Array<Fazenda>> {
    return this.http.get<Array<Fazenda>>(this.FAZENDAS_API);
 }


}
